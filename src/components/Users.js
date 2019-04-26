<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserInput from './UserInput'

=======
// import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserInput from './UserInput'
>>>>>>> fe07c55e1630d74979f377a0675e9fabe1ad9fb2
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          // Users!
<<<<<<< HEAD
        {this.props.users.map((user, index) =>
        <li key={index}>User: {user.username}, {user.hometown}</li>
        )}
        </ul>
        Total Users: {this.props.userCount}
=======
          {this.props.users.map((user, index) =>
        <li key={index}>User: {user.username}, {user.hometown}</li>
        )}
        </ul>
       Total Users: {this.props.userCount}
>>>>>>> fe07c55e1630d74979f377a0675e9fabe1ad9fb2
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length }
}

<<<<<<< HEAD
=======
const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length }
}

>>>>>>> fe07c55e1630d74979f377a0675e9fabe1ad9fb2
// export default Users
export default connect(mapStateToProps)(Users);