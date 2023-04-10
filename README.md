# Git Good: Water Filter Building Application

## Description 
Water for the World (W4TW) is a mobile application for understanding issues around global clean water supply. Engineers Without Borders (W4TW) is the project partner. This organization is concerned with educating the world about the global clean water supply and the disparities of access to it for different parts of the world. The app intends to educate people on the disparities of access to clean water through a series of questions along with an interactive module. A common use case for the app would be for students to use the app to learn about the unequal distribution of resources in the world. The app would also support educators as a teaching method while also assessing and providing information on student responses to the educator.

## Key Features
1. Registering/logging into a student/teacher account
 * Due to the different features of a student and a teacher (a student can answer questions, etc), the registration process for a student and a teacher differs a little.
2. Completing a pre-game questionnaire on global water supply
 * Slider questions to test a student’s base knowledge of global water supply
3. Building an interactive water filter with varying countries’ resources and literacy rate
 * The interactive module is a simple exercise where the user selects a country of the world, and depending on which country, is given a limited amount of in-app currency to create a virtual water filter whose parts have various costs. 
* This simulation helps us understand both how a simple water filter is made, as well as the lack of resources some countries of the world face when required to build such systems. The limited instructions relate to the literacy rate which in turn relates to general education levels in the population of the country.
4. Completing a post-game questionnaire on global water supply
* Short open-ended questions to test a student’s knowledge of global water supply after playing the game, as well as understanding the student's perspective on the issue
5. No server hosting is required
* The application is fully functional without any running database/backend servers.
6. Emailing the teacher result of the most recent game by a student
* Teachers will receive a result of the most recent game via email automatically. An offline version of the app is available as well where this feature is turned off.
7. Save post-game questionnaire answers before submitting
* Students would be able to save their post-game questionnaire answers while they continue playing around in the application.
8. Random event generator during the filter building to mimic real-life unpredictable scenarios
* Picking different countries would expose the students to different events during filter building (eg: donations, taxes, grants).

## Instructions
 Our application is deployed on the Expo App Store which is accessible by the Expo Go App on the Google Play Store. The link for Android is https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_CA&gl=US. After installing the Expo Go App, our application can be accessed by inputting exp://exp.host/@albertwelong/WaterForTheWorld?release-channel=default in the URL input or with this QR code. Unfortunately, because of Apple's security measures against installing applications that are not verified by the iOS app store, this process will not work on iOS phones. Therefore, we will include instructions on how to run an Android emulator to boot up our app.
 
 ![expo go](https://user-images.githubusercontent.com/78889780/224879826-f3f7919a-df38-4c0e-951f-6745184b4812.png)
 
 
## Development requirements
Testing can be done using the Expo Go app from the mobile phone. 
Download Expo Go app from the app store, or Expo app from the play store (attached below are the icons for app store and play store respectively).Create an account there.

Download the code from our github page. Choose an editor of choice (e.g. VSCode). 

In the terminal, cd to deliverable-2/w4w-app/frontend directory
Make sure to have expo-cli(https://docs.expo.dev/get-started/installation/), node(https://nodejs.org/en/download/), and git(https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed.

Run npm install.
Run npm start
A QR code is expected to show up (expected behavior below)
![image](https://user-images.githubusercontent.com/57972170/225425500-aefa44ce-5a84-4348-865a-8491666466df.png)

For Android, scan the QR code using Expo Go app
For iOS, use camera app to scan QR code (will then be redirected to the Expo app)
Testing of the front end functionality can also be seen by viewing this video: https://youtu.be/qfPpBfAvsxM
 
## Deployment and Github Workflow
Naming conventions used in building the app include camelCase. To merge our code, we used a separate branch from the main branch called d2-test. This branch was the original branch that includes the merged codes from originally all 3 sub-teams: backend, frontend, and database (see note below). To add new features, we used pull requests complete with descriptions of such features and had other teammates review such pull requests to be approved. These features would be added to the same d2-test branch instead of the main branch. The overall development process from writing code to viewing a live application included extensive testing in each small feature to ensure that the codebase is extendable in the future for additional features. Other than tests, we tested the codebase with the railway database cloud service to ensure that the database is working. Finally, we used postman to connect the backend with the frontend app design and used expo react native to test the app. We decided to use this workflow because it made the most sense to us to have a staging environment before production and work from there. Moreover, we used descriptive pull requests to ensure that new codes can be easily checked by other teammates without mishaps.

NOTE: Our application is now functional fully through frontend. No server hostings are required for backend/database features.

Backend Deployment (No longer used): 
To deploy our backend code, we used a service called Heroku. The reason we pushed our backend code to Heroku is that it can run the server 24/7 so that any API calls the frontend requires will always be up and available. We first installed Heroku from their website and created an account. Then, by installing the Heroku command line (CLI) we were able to create a Heroku app that provides us with a domain address. Heroku will set up a virtual machine on this domain that is able to run our code. Next, we installed the Heroku/python build pack on the Heroku app, and git add/commit/push our backend code to the Heroku git repo. Our list of APIs can be found at https://csc301-backend.herokuapp.com/.

Frontend Deployment:
To deploy our frontend, which is a react native mobile app, we used the Expo App Store. The Expo App Store allows us to deploy our app such that it can be accessible by anyone, anywhere, and at any time. Our mobile app can be accessed by inputting exp://exp.host/@albertwelong/WaterForTheWorld?release-channel=default as a URL input or by scanning the QR code above in the Expo Go app, which is available on the Google Play Store. Once again, this will not work on iOS devices due to their security measures, but running our app locally will allow the use of an iOS emulator to test out the application.

## Licenses 

We will use the MIT open-source license - it is simple and permissive. It allows redistribution, modification, and commercial use while limiting liability and warranty. Thus, the MIT open-source license will allow us to hand over our work to our partner with protection from legal action. However, we have agreed with our partner that we will not share our code beyond the initial handover to our partner. 

There will be no drastic differences in the development and use of our codebase. If our partner decides to share the codebase, the open-source license will allow other similar organizations (e.g., Engineers Without Borders) to develop similar apps that require a pre-game questionnaire, a game, and a post-game questionnaire to be developed at a lower cost.

There are several unlicensed images in the game that have not been licensed yet. However since the product is not published yet, no legal actions can be taken. Thus until the imaging licenses have been sorted out, the product will not be used for commercial purposes. 
