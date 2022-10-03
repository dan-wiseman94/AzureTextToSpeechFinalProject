import "./App.css";
import TextToSpeechBox from "./TextToSpeechBox.js";
import azureToken from "./token.php";
import React, { Component } from "react";
import styled from "styled-components";
const Button = styled.button`
  background-color: #252525; 
  color: white;
  font-size: 20px;
  padding: 10px 30px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  max-width: 250px;
  box-shadow 1px 1px 1px black;
`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      settings: {},
      token: azureToken,
    };
  }

  onTextSubmit = (submission) => {
    this.setState({
      text: submission.text,
    });
  };

  onSettingChange = (e) => {
    this.setState({
      settings: {

      }
    })
  }
  render() {
    return (
      <div className="App">
        <header>

        <h1> Content Authoring Text-To-Speech</h1>
        </header>
        <main>
        <div className="flexContainer">

        <TextToSpeechBox className="textBox" token={azureToken} onTextSubmit={this.onTextSubmit} />
          <Button id="startSpeakTextAsyncButton" onClick={this.onSubmitInfo}>
            Start Text to Speech
          </Button>
        </div>
        </main>
      </div>
    );
  }
}

export default App;
