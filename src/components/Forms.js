import React, { Component } from 'react'

export class Forms extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: ''
        }
    }
    handleUsernameChange = (event) => {

        this.setState({
            username: event.target.value
        })
    }
    handleCommentChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handleTopicChange = (event) => {
        this.setState({
            topics: event.target.value
        })
    }

    render() {
        return (
            <form>
                <div>
                    <label>Username : </label>
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <label>comments : </label>
                    <input type="text" vaalue={this.state.comments} onChange={this.handleCommentChange}></input>
                </div>
                <div>
                    <label>topics</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>Vue</option>
                    </select>

                </div>
            </form>
        )
    }
}

export default Forms
