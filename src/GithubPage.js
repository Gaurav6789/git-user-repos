import React, { PureComponent } from 'react'
import './App.css'
import reactDom from 'react-dom';
import Header from './Header';
import Users from './Users';


class GithubPage extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    return (
      <React.Fragment>
      <Header/>
      <Users/>
      </React.Fragment>
      
    )
  }
}

export default GithubPage