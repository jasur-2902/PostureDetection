import React from 'react';
import './App.css';
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";

let net = null;

async function estimatePoseOnImage(imageElement) {
    // load the posenet model from a checkpoint
    // const net = await posenet.load();

    const pose = await net.estimateSinglePose(imageElement, {
        flipHorizontal: false
    });
    return pose;
}


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.webcamRef = React.createRef();
        this.state = {
            "image": null
        }
    }
    formatImage() {
        return "data:image/png;base64," + this.state.image;
    }
    async componentDidMount() {
        net = await posenet.load();
    }
    getScreenshot() {
        // const capture = React.useCallback(
        //     () => {
        //       const imageSrc = this.webcamRef.current.getScreenshot();
        //     },
        //     [this.webcamRef]
        //   );
        const sshot = this.webcamRef.current.getScreenshot();
        const img = document.createElement("img");
        img.src = sshot;
        setTimeout(async function test() {
            // const img = document.getElementById("img");
            const pose = await estimatePoseOnImage(img);
            console.log(pose);
        })
    }
    render() {
        return (
            <div className="App">
                <button onClick={() => this.getScreenshot()}>Click Me!</button>
                <Webcam
                    audio={false}
                    height={480}
                    ref={this.webcamRef}
                    screenshotFormat="image/jpeg"
                    width={960}
                />
            </div>
        );
    }
}

