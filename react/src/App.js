import React, { Component } from "react";
import { Grid, Card, Image, Button, Segment, Menu, Dimmer, Loader } from 'semantic-ui-react';
import "./App.css";
import LineGraph from "./LineGraph";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import * as firebase from "firebase/app";
import "firebase/auth";

let interval = null;

export default class App extends Component {
    constructor(props) {
        super(props);
        let startEvent = new Event("startTensor");
        let stopEvent = new Event("stopTensor");
        let resetEvent = new Event("setDefaultPose");
        this.state = {
            isRecording: false,
            startEvent: startEvent,
            stopEvent: stopEvent,
            resetEvent: resetEvent,
            profilePic: "",
            loggedIn: false,
            displayName: "John Smith",
            loadingUI: true,
            resetText: "Reset Posture",
            disableReset: false
        }
    }
    componentDidMount() {
        let that = this;
        this.resetPose();
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                console.log("user is signed in", user);
                that.setState({ loggedIn: true, profilePic: user.photoURL, displayName: user.displayName });
            } else {
                // No user is signed in.
                console.log("user is not signed in");
            }
        });
        interval = setInterval(() => {
            let data = localStorage.getItem("data")
            // Write to firebase
        }, 10000)
        setTimeout(() => {
            console.log("done loading");
            that.setState({ loadingUI: false });
        }, 2000);
    }
    componentWillUnmount() {
        clearInterval(interval);
    }
    toggleRecord() {
        let status = this.state.isRecording;
        if (status) {
            window.dispatchEvent(this.state.stopEvent);
        } else {
            window.dispatchEvent(this.state.startEvent);
        }
        this.setState({ isRecording: !status });
    }
    resetPose() {
        this.setState({ resetText: "Resetting...", disableReset: true });
        setTimeout(() => {
            window.dispatchEvent(this.state.resetEvent);
            this.setState({ resetText: "Reset Posture", disableReset: false });
        }, 1500);
    }
    login() {
        var provider = new firebase.auth.GoogleAuthProvider();
        let that = this;
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // var token = result.credential.accessToken;
            // // The signed-in user info.
            // var user = result.user;
            // console.log("token:", token, "user:", user);
            that.setState({ profilePic: user.photoURL });
            console.log("Signed in!")
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // // The email of the user's account used.
            // var email = error.email;
            // // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;

            console.log("Error signing in:", errorMessage);
            // // ...
        });
    }
    logout() {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
            console.log("Successfully signed out");
        }).catch(function (error) {
            // An error happened.
            console.log("Error signing out:", error);
        });
    }
    render() {
        return (
            <div>
                <div className={this.state.loadingUI ? "loader" : "hidden"}>
                    <Segment>
                        <Dimmer active inverted>
                            <Loader inverted>Loading</Loader>
                        </Dimmer>
                    </Segment>
                </div>
                <div>
                    <Button onClick={() => {
                        if (this.state.loggedIn) {
                            this.logout();
                        } else {
                            this.login();
                        }
                    }}
                        className="gauth"
                        style={{ margin: 20 }}
                    >{this.state.loggedIn ? "Logout" : "Login"}</Button>
                    <div className="parent">
                        {/* <Menu className="menu">
                    <Menu.Item onClick=>Login</Menu.Item>
                </Menu> */}
                        <Grid columns={2}>
                            <Grid.Column width={4} className="profile">
                                <Card>
                                    <Card.Header>Google Profile</Card.Header>
                                    <Card.Meta>{this.state.displayName}</Card.Meta>
                                    <Image src={this.state.profilePic}></Image>
                                    <Card.Content>
                                        <Button
                                            fluid
                                            onClick={() => { this.toggleRecord() }}
                                            color={this.state.isRecording ? "red" : "green"}>{this.state.isRecording ? "Stop" : "Start"}</Button>
                                        <Button
                                            fluid
                                            onClick={() => { this.resetPose() }}
                                            color="grey"
                                            disabled={this.state.disableReset}
                                            >{this.state.resetText}</Button>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                            <Grid.Column width={1}></Grid.Column>
                            <Grid.Column width={11} className="content" stretched>
                                <Grid.Row className="graph">
                                    <Segment>
                                        <LineGraph />
                                    </Segment>
                                </Grid.Row>
                                <Grid.Row>
                                    <Segment className="shareOptions">
                                        <Button circular color='facebook' icon='facebook' />
                                        <Button circular color='twitter' icon='twitter' />
                                        <Button circular color='linkedin' icon='linkedin' />
                                        <Button circular color='google plus' icon='google plus' />
                                    </Segment>
                                </Grid.Row>
                            </Grid.Column>
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }
}