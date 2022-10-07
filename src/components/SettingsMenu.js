import "../styling/SettingsMenu.css";
import React, { Component } from "react";
// import Dropdown from "react-bootstrap/Dropdown";
import Select from "react-select";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";
import styled from "styled-components";

const voiceOptions = [
  { value: "en-US-JennyNeural", label: "Jenny (US)" },
  { value: "en-US-GuyNeural", label: "Guy (US)" },
  { value: "en-GB-AbbiNeural", label: "Abbi (UK)" },
  { value: "en-GB-AlfieNeural", label: "Alfie (UK)" },
];

const styleOptions = [
  {
    name: "en-US-JennyNeural",
    options: [
      { value: "assistant", label: "Assistant" },
      { value: "chat", label: "Chat" },
      { value: "newscast", label: "News Caster" },
      { value: "angry", label: "Angry" },
      { value: "cheerful", label: "Cheerful" },
      { value: "sad", label: "Sad" },
      { value: "excited", label: "Excited" },
      { value: "friendly", label: "Friendly" },
      { value: "shouting", label: "Shouting" },
      { value: "whispering", label: "Whispering" },
      { value: "hopeful", label: "Hopeful" },
    ],
  },
  {
    name: "en-US-GuyNeural",
    options: [
      { value: "newscast", label: "News Caster" },
      { value: "angry", label: "Angry" },
      { value: "cheerful", label: "Cheerful" },
      { value: "sad", label: "Sad" },
      { value: "excited", label: "Excited" },
      { value: "friendly", label: "Friendly" },
      { value: "shouting", label: "Shouting" },
      { value: "whispering", label: "Whispering" },
      { value: "hopeful", label: "Hopeful" },
    ],
  },
];
class SettingsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voice: null,
      style: "",
      rate: "+0%",
      pitch: 0,
    };
  }
  onSettingChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
    this.props.onSettingChange(e);
  };
  onVoiceChange = (selectedVoice) => {
    // const target = e.target;
    // const value = target.type === "checkbox" ? target.checked : target.value;
    // const name = target.name;
    this.setState({
      voice: selectedVoice.value,
    });
    this.props.onVoiceChange(selectedVoice.value);
  };
  onStyleChange = (selectedStyle) => {
    // const target = e.target;
    // const value = target.type === "checkbox" ? target.checked : target.value;
    // const name = target.name;
    this.setState({
      voice: selectedStyle.value,
    });
    this.props.onStyleChange(selectedStyle.value);
  };
  onRateChange = (e) => {
    const target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      rate: value,
    });
    this.props.onRateChange(value);
  };
  render() {
    const { style, voice } = this.state;
    return (
      <div id="content">
        <div className="selectGroup">
          <label htmlFor="voiceSelect">Select Voice:</label>
          <Select
            id="voiceSelect"
            defaultValue={voice}
            options={voiceOptions}
            onChange={this.onVoiceChange}
          />
        </div>
        <div className="selectGroup">
          <label htmlFor="styleSelect">Select Style:</label>
          <Select
            id="voiceSelect"
            defaultValue={style}
            options={styleOptions.filter((person) => {
              if (person.name === this.state.voice) return person.options;
            })}
            onChange={this.onStyleChange}
          />
        </div>
        <div className="selectGroup">
          <label htmlFor="rateSelect">Select Speed:</label>
          <input
            defaultValue={this.state.rate}
            id="rateSelect"
            type="number"
            onChange={this.onRateChange}
          />
        </div>
       
      </div>
    );
  }
}
export default SettingsMenu;
