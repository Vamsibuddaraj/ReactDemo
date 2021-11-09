import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
    
    render() {
        return(
            this.state.isLoggedIn?
            <div>welcome vamsi</div> :
            <div>welcome guest</div>
        )
      
    }
}

export default UserGreeting