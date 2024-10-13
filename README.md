# PostureDetection
Enhance your posture with Machine Learning 


Inspiration
---------------
In today's digital age, much of our work involves spending long hours in front of a computer, often leading to poor posture. We wanted to create a solution that helps people improve their posture while they work, promoting better health and productivity.

What it does
---------------
PostureML uses a combination of your webcam and machine learning to estimate your posture in real-time. It tracks your posture continuously and provides alerts to help you correct it when necessary.

How we built it
---------------
With your permission, we capture live frames through your webcam and send the images to a pre-trained machine learning model directly in the browser and estimate human poses in real-time. We use the coordinates from the eyes, ears, nose, and shoulders. Using all these points, with the help of advanced mathematical calculation we were able to detect what makes a person slouch.

Challenges we ran into
---------------
Initially, we aimed to implement PostureML as a Chrome extension running in the background. However, we encountered difficulties integrating Tensorflow.js within the extension environment, which led us to pivot to a more browser-friendly solution.

Accomplishments that we're proud of
---------------
We successfully built a system that can accurately detect poor posture and provide real-time alerts to help users improve it. This achievement required fine-tuning machine learning models and understanding how different postural factors come into play.


Example of the Tensorflow Model working in the background
---------------
<img src="https://github.com/jasur-2902/PostureDetection/blob/master/media/model_view.png" alt="alt text" width="400">


https://github.com/user-attachments/assets/cb87966b-2dda-429b-930e-dc21a5951aec

