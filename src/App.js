import "./styling/App.css";
import React, { Component } from "react";
import styled from "styled-components";
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
      settings: {
        voice: "en-US-JennyNeural",
        subscription: "",
        region: "",
        style: "",
        rate: "+0%",
      },
    };
  }
  synthesizeSpeech = () => {
    // const speechConfig = sdk.SpeechConfig.fromSubscription('77b138ab70794c2b8090765c0f884377', 'eastus');
    const speechConfig = sdk.SpeechConfig.fromSubscription(
      this.state.settings.subscription,
      this.state.settings.region
    );
    speechConfig.speechSynthesisVoiceName = this.state.settings.voice;
    const synthesizer = new sdk.SpeechSynthesizer(speechConfig);

    let speechSynthesisVoiceName = this.state.settings.voice;
    var ssml = `<speak version='1.0' xml:lang='en-US' xmlns='http://www.w3.org/2001/10/synthesis' xmlns:mstts='http://www.w3.org/2001/mstts'> \r\n \
        <voice name='${speechSynthesisVoiceName}' style='${this.state.settings.style}'> \r\n \
        
            <mstts:viseme type='redlips_front'/> \r\n \
            <prosody rate='${this.state.settings.rate}'>
            '${this.state.text}'
            </prosody>
        </voice> \r\n \
    </speak>`;

    // synthesizer.speakTextAsync(
    //   this.state.text,
    synthesizer.speakSsmlAsync(
      ssml,
      (result) => {
        synthesizer.close();
        return result.audioData;
      },
      (error) => {
        console.log(error);
        synthesizer.close();
      }
    );
  };

  onTextChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  onSettingChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState((prevState) => ({
      settings: {
        ...prevState.settings,

        [name]: value,
      },
    }));
  };
  onVoiceChange = (selectedVoice) => {
    this.setState((prevState) => ({
      settings: {
        ...prevState.settings,
        voice: selectedVoice,
      },
    }));
  };

  onStyleChange = (selectedStyle) => {
    this.setState((prevState) => ({
      settings: {
        ...prevState.settings,
        style: selectedStyle,
      },
    }));
  };
  onRateChange = (selectedRate) => {
    if (selectedRate >= "0" && selectedRate != "") {
      this.setState((prevState) => ({
        settings: {
          ...prevState.settings,
          rate: "+" + String(selectedRate) + "%",
        },
      }));
    } else if (selectedRate < "0" && selectedRate != "") {
      this.setState((prevState) => ({
        settings: {
          ...prevState.settings,
          rate: String(selectedRate) + "%",
        },
      }));
    }
    //reset if empty
    else if (selectedRate === 0) {
      this.setState((prevState) => ({
        settings: {
          ...prevState.settings,
          rate: "+0%"
        },
      }));
    }
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1> Azure Cognitive Services Text-To-Speech Web GUI</h1>
        </header>
        <main>
          <div className="flexContainer">
            <div className="setupContainer">
              <SettingsMenu
                id="SettingsMenu"
                onVoiceChange={this.onVoiceChange}
                onStyleChange={this.onStyleChange}
                onRateChange={this.onRateChange}
              />
              <TextToSpeechBox
                className="textBox"
                onTextChange={this.onTextChange}
                onSettingChange={this.onSettingChange}
              />
            </div>
            <Button
              id="startSpeakTextAsyncButton"
              onClick={this.synthesizeSpeech}
            >
              Start Text to Speech
            </Button>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
