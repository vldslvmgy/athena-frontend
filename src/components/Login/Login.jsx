import React, { Component } from 'react';
import styled from 'styled-components';
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
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const TEST_QUERY = gql`
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
      error: false
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleError = () => {
    this.setState({ error: true });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    console.log(this.state.error);
    return (
      <Wrapper>
        <Mutation
          mutation={TEST_QUERY}
          onCompleted={(data) => { console.log(data); }}
          onError={this.handleError}
        >
          {(login, { loading, error }) => (
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
                  login({ variables: { email: this.state.email, password: this.state.password } });
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
            </StyledPaper>
          )}
        </Mutation>
      </Wrapper>
    );
  }
}

export default Login;
