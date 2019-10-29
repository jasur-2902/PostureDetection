# PostureDetection
Enhance your posture with Machine Learning 


Inspiration
---------------
Most of our work is done over long periods of time on the computer. We want to improve our posture while we work on the computer.

What it does
---------------
With the combination of your webcam and machine learning, we estimate your posture in real-time and provide alerts to improve your posture.

How we built it
---------------
With your permission, we capture live frames through your webcam and send the images to a pre-trained machine learning model directly in the browser and estimate human poses in real-time. We use the coordinates from the eyes, ears, nose, and shoulders. Using all these points, with the help of advanced mathematical calculation we were able to detect what makes a person slouch.

Challenges we ran into
---------------
We first started to implement PostureML as a Chrome Extension that would run in the background of your browser. we had issues running Tensorflow.js

Accomplishments that we're proud of
---------------
We're able to estimate when the user's posture is bad and can provide alerts to correct their posture.

What we learned
---------------
We learned high advanced mathematical equations, what determines bad vs good posture, how machine learning works under the hood, and read/writing to firebase.
