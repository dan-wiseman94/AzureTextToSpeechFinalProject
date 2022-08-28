import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

export class App extends React.Component {
  constructor(props) {
    super(props);

    // Next up create a new Unity Context object to
    // initialise and define your WebGL build. The
    // paths are relative from your index file.

    this.unityContext = new UnityContext({
      loaderUrl: "build/myunityapp.loader.js",
      dataUrl: "build/myunityapp.data",
      frameworkUrl: "build/myunityapp.framework.js",
      codeUrl: "build/myunityapp.wasm"
    });
  }

  render() {

    // Finally render the Unity component and pass
    // the Unity context through the props.

    return <Unity unityContext={this.unityContext} />;
  }
}
