import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };
  }

  handleInputOnChange = (e) => {
    console.log(this.state.input)
    this.setState({
      input: e.target.value
    })
  }

  charsLeft = () => {
    return <p><span>{this.props.maxChars - this.state.input.length}</span> characters left</p>
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.input} onChange={this.handleInputOnChange}/>
        {this.charsLeft()}
      </div>
    );
  }
}

export default TwitterMessage;
