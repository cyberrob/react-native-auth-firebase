import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  }

  render() {
      return (
        <Card>
          <CardSection>
            <Input
              label='Email'
              placeholder='hello@auth.com'
              autoCorrect={false}
              type='email-address'
              returnKeyType='next'
              secureTextEntry={false}
              value={this.state.email}
              onChangeText={email => {
                this.setState({ email });
              }}
            />
          </CardSection>

          <CardSection>
            <Input
              label='Password'
              placeholder='password'
              autoCorrect={false}
              type='default'
              returnKeyType='go'
              secureTextEntry
              value={this.state.password}
              onChangeText={password => {
                this.setState({ password });
              }}
            />
          </CardSection>

          <CardSection>
            <Button>
              Log In
            </Button>
          </CardSection>
        </Card>
      );
  }
}

export default LoginForm;
