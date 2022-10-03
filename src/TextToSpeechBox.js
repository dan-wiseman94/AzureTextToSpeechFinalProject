import "./TextToSpeechBox.css";
import React, { Component } from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
class TextToSpeechBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subscription: "",
      region: "",
      text: "",
    };
  }

//   RequestAuthorizationToken = () => {
//     const authorizationEndpoint = this.props.token;
//     if (authorizationEndpoint) {
//       var a = new XMLHttpRequest();
//       a.open("GET", authorizationEndpoint);
//       a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//       a.send("");
//       a.onload = function () {
//         var token = JSON.parse(atob(this.responseText.split(".")[1]));
//         this.setState({

//             region: token.region
//         });
//         let authorizationToken = this.responseText;
//         // subscriptionKey.disabled = true;
//         // subscriptionKey.value = "using authorization token (hit F5 to refresh)";
//         console.log("Got an authorization token: " + token);
//       };
//     }
//   };
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
  };
  render() {
    // this.RequestAuthorizationToken();
    return (
      <div id="content">
        <form>
          <label htmlFor="subscriptionKey">
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
          <br/>
          <label htmlFor="phraseDiv">Input Text</label>

          <textarea
            name="text"
            id="phraseDiv"
            value={this.text}
            onChange={this.handleChange}
          ></textarea>
          <br/>
        {/* <label htmlFor="slider1">Slider1</label> */}
        <Slider id="slider1" className="slider"/>
        <Slider id="slider2" className="slider"/>
        <Slider id="slider3" className="slider"/>
        <Slider id="slider4" className="slider"/>
          {/* <label>Result</label> */}
          {/* <textarea id="resultDiv"></textarea> */}
        </form>
      </div>
    );
  }
}

export default TextToSpeechBox;
