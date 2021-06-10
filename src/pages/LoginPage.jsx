import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setUsername } from '../actions';

import '../css/LoginPage.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ value, name }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { username } = this.state;
    const { setUsernameProp } = this.props;
    return (
      <form className="login-form">
        <label htmlFor="username" className="login-label">
          Insira um nome de usuário:
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            placeholder="Username"
            maxLength="30"
            onChange={(e) => this.handleChange(e.target)}
          />
        </label>
        <Link
          to="/products"
          onClick={(e) => {
            if (!username) {
              e.preventDefault();
            }
            setUsernameProp(username);
          }}
          className="login-btn"
        >
          Entrar
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUsernameProp: (payload) => dispatch(setUsername(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
