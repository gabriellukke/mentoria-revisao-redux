import React from 'react';
import { Link } from 'react-router-dom';

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
    const { getUsername } = this.props;
    return (
      <form>
        <label htmlFor="username">
          Username
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => this.handleChange(e.target)}
          />
        </label>
        <button
          type="button"
          onClick={() => getUsername(username)}
        >
          <Link to="/products" />
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
