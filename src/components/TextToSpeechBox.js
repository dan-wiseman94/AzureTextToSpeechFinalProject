import "../styling/TextToSpeechBox.css";
import React, { Component } from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
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
class TextToSpeechBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subscription: "",
      region: "",
      text: "",
    };
  }

//  
  onSubmitInfo = (e) => {
    e.preventDefault();
    this.props.onTextSubmit(this.state);
    this.setState({
      text: "",
    });
  };
  handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
    this.props.onSettingChange(e);
  };
  render() {
   
    return (
      <div id="content">
        <form>
          {/* <label htmlFor="subscriptionKey">
            <a
              href="https://docs.microsoft.com/azure/cognitive-services/speech-service/get-started"
              target="_blank"
              rel="noreferrer"
            >
              Subscription :
            </a>
          </label>

          <input
            name="subscription"
            id="subscriptionKey"
            value={this.subscription}
            type="text"
            size="40"
            placeholder="YourSubscriptionKey"
            onChange={this.handleChange}
          />
          <br/>
          <label htmlFor="serviceRegion">Region</label>

          <input
            name="region"
            id="serviceRegion"
            type="text"
            value={this.region}
            size="40"
            placeholder="YourServiceRegion"
            onChange={this.handleChange}
          />
          <br/> */}
          <label htmlFor="phraseDiv">Input Text</label>

          <textarea
            name="text"
            id="phraseDiv"
            value={this.text}
            onChange={this.props.onTextChange}
          ></textarea>
          <br/>
        </form>
      </div>
    );
  }
}

export default TextToSpeechBox;
