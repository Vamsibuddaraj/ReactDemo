import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    
    render() {
        let message
        if(this.state.isLoggedIn){
            message= <div>welcome vamsi</div>
        }
        else{
            message= <div>welcome guest</div>
        }
        return <div>{message}</div>
      
    }
}

export default UserGreeting