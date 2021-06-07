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
    const { email } = this.state;
    const { getUsername } = this.props;
    return (
      <form>
        <label htmlFor="username">
          Username
          <input
            type="text"
            name="username"
            id="username"
            value={email}
            onChange={(e) => this.handleChange(e.target)}
          />
        </label>
        <button
          type="button"
          onClick={() => getUsername(this.state)}
        >
          <Link to="/products" />
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
