import React, { Component } from 'react';
import io from 'socket.io-client'

class App extends Component {
  constructor(props){
    super(props);

    this.socket = io("localhost:8000")
    
    this.state = {
      messages: [
        {message: "You have joined"}
      ],
      newMessage: ""
    };    
  }

  componentDidMount = () => { 
    this.socket.on('message', (message)=>{
      this.setState({
        messages: [...this.state.messages, message]
      })
    })
  }

  addMessage = (event) => {
    event.preventDefault()
    const {messages , newMessage} = this.state
    const addedMessage = {message: newMessage}
    this.socket.emit("message",addedMessage)
    this.setState({
      // messages: [...messages, addedMessage],
       newMessage: ""
    })
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }


  render() {

    const {newMessage} = this.state
    return (
      <div>
          {this.state.messages.map(ele => {
            return (
              <div>
                <p>{ele.message}</p>
            </div>
            )
          })}

        <form onSubmit={this.addMessage}>
        <label>
          message: 
          </label>
          <input type="text" name="newMessage" value={newMessage} onChange={this.onChange}/>
        
        <input type="submit" value="Submit"/>
      </form>
    </div>
 
    );
  }
}

export default App;
