/*global chrome*/

import React, { Component } from 'react';
import App from './App';
import firebase from "./firebase/config";
import 'firebase/database';
import NewWindow from 'react-new-window'

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoPermission: false,
      notificationPermission: false,
      notificationIds: [],
      trackPosture: false,
    }
    this.handleNotification = this.handleNotification.bind(this);
    this.handleTracking = this.handleTracking.bind(this);
  }

  handleNotification() {
    let _this = this;
    let options = {
      type: "basic",
      iconUrl: "./logo192.png",
      title: "PostureML",
      message: "Uh-Oh! Fix your posture!",
      priority: 2,
      buttons: [
        { title: "Reset posture" }
      ]
    }

    chrome.notifications.create(options, function(notificationId) {
      _this.setState(state => {
        return {
          notificationIds: [...state.notificationIds, notificationId]
        }
      });
    })
  }

  handleTracking() {
    this.setState({
      trackPosture: true,
    })
  }

  render() {
    return(
      <>
        {this.state.trackPosture &&
          <NewWindow>
            <App />
          </NewWindow>
        }
        <button onClick={this.handleTracking}>Track Posture</button>
        <button onClick={this.handleNotification}>Test push notifications</button>
      </>
    )
  }
}
