import React, { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      messages: [
        {message: ""}
      ]
    };    
  }

  // componentDidMount = () => {
  //   this.handleChange()
  //   this.handleSubmit()
  // }

  addMessage = (event) => {
    event.preventDefault()
    console.log(event);
    
  }

  handleChange = (event) =>{
    this.setState({ [Event.target.name]: event.target.value})
  }


  render() {
    console.log(this.state);
    
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
          <input type="text" value={this.state.messages}  onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit"/>
      </form>
    </div>
 
    );
  }
}

export default App;
