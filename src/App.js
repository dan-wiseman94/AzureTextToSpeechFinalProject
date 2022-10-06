import "./styling/App.css";
import React, { Component } from "react";
import styled from "styled-components";
import azureToken from "./token.php";
import * as sdk from "microsoft-cognitiveservices-speech-sdk";

import TextToSpeechBox from "./components/TextToSpeechBox.js";
import SettingsMenu from "./components/SettingsMenu.js";
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
      settings: {voiceName: "en-US-JennyNeural"},
      subscription: "",
      region: ""
    };
  }
  synthesizeSpeech = () => {
    // const speechConfig = sdk.SpeechConfig.fromSubscription('77b138ab70794c2b8090765c0f884377', 'eastus'); 
    const speechConfig = sdk.SpeechConfig.fromSubscription(this.state.subscription, this.state.region); 
    speechConfig.speechSynthesisVoiceName = this.state.settings.voiceName;
    const synthesizer = new sdk.SpeechSynthesizer(speechConfig);

    synthesizer.speakTextAsync(
       this.state.text,
        result => {
            synthesizer.close();
            return result.audioData;
        },
        error => {
            console.log(error);
            synthesizer.close();
        });
}

  onTextSubmit = (submission) => {
  };

   onSettingChange = (e) => {
    // this.setState({
    //   settings: {},
    // });
    // this.setState({
    //   text: submission.text,
    //   subscription: submission.subscription,
    //   region: submission.region
    // });
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
   };
  render() {
    return (
      <div className="App">
        <header>
          <h1> Content Authoring Text-To-Speech</h1>
        </header>
        <main>
          <div className="flexContainer">
            <SettingsMenu/>
            <TextToSpeechBox
              className="textBox"
              token={azureToken}
              onTextSubmit={this.onTextSubmit}
              onSettingChange= {this.onSettingChange}
            />
            <Button id="startSpeakTextAsyncButton" onClick={this.synthesizeSpeech}>
              Start Text to Speech
            </Button>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
