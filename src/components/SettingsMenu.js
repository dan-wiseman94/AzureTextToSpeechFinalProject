import "../styling/SettingsMenu.css";
import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import styled from "styled-components";
function SettingsMenu (props)  {
  let [voiceName, setVoice] = useState("en-US-JennyNeural");

  return (
      <Dropdown >
        <Dropdown.Toggle className="dropdown" variant="success" id="voice-select">
          Select Voice
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item className="dropdown dropdown_item"> Jenny</Dropdown.Item>
          <Dropdown.Item className="dropdown dropdown_item"> Other Person</Dropdown.Item>
          <Dropdown.Item className="dropdown dropdown_item"> Other Person 2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
  );
}
export default SettingsMenu;