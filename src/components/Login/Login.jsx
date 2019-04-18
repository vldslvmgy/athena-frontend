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
    this.state = {};
  }

  // handleSubmit(event) {
  //   const data = console.log(event.target);
  // }

  render() {
    return (
      <Wrapper>
        <StyledPaper>
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={this.handleSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
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
      </Wrapper>
    );
  }
}

export default Login;
