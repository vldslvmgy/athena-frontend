import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const LOGIN_CALL = gql`
  mutation login($email: String!, $password: String!) {
    login(
      email: $email,
      password: $password
    ) {
      id
      email
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
`;

const Loader = styled.div`
  margin-top: 10px;
`;

const StyledPaper = styled(Paper)`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 64px;
  max-width: 400px;
  padding: 14px;
`;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      redirect: false,
      error: false
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/profile" />;
    }
  }

  handleLogin = (credentials) => {
    const { id, email } = credentials.login;
    this.props.login(id, email);
    this.setState({ redirect: true });
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleError = () => {
    this.setState({ error: true });
  }


  render() {
    return (
      <Wrapper>
        {this.renderRedirect()}
        <Mutation
          mutation={LOGIN_CALL}
          onCompleted={this.handleLogin}
          onError={this.handleError}
        >
          {(callLogin, { loading }) => (
            <StyledPaper>
              <Avatar>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  callLogin({ variables: { email: this.state.email, password: this.state.password } });
                }}
              >
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="email">Email Address</InputLabel>
                  <Input
                    id="email"
                    name="email"
                    autoComplete="email"
                    onChange={this.handleEmailChange}
                    error={this.state.error}
                    autoFocus
                  />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                    name="password"
                    type="password"
                    id="password"
                    error={this.state.error}
                    onChange={this.handlePasswordChange}
                    autoComplete="current-password"
                  />
                </FormControl>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
              Sign in
                </Button>
              </form>
              {loading && (
                <Loader>
                  <CircularProgress
                    className="loading"
                  />
                </Loader>
              )}
            </StyledPaper>
          )}
        </Mutation>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({ user: state.login.user });

const mapDispatchToProps = dispatch => (
  {
    login: (userId, email) => dispatch({ type: 'LOGIN', payload: { user: { userId, email } } })
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
