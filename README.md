# Sportim
> The application is the web part of a larger student project carried out as part of a credit for the course `Team Programming`.

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Setup](#setup)
* [Screenshots](#screenshots)

## General Information
The aim of the Sportim project is to bring together people who participate in group sports. The application allows users to find other people in the city and outside who are also interested in the same physical activity. The application allows for the creation of events that can be joined by other users who are looking for members to create a team, or just want to play together.

> The frontend of the application is based on React.js library, while the backend and the database is based on Firebase platform.

## Technologies Used
- React.js - version 16.13.0
- Redux - version 4.0.5
- Firebase - version 7.11.0

## Setup

1. Install locally all dependecies in project directory using commands:

> `cd ../sportim`<br>
> `npm install`


2. Create `.env` file in main directory and set environment variables:
  	* `REACT_APP_FB_API` - firebase API key (`apiKey` variable in firebase config object)
  	* `REACT_APP_FB_MESS_SENDER_ID` - Google Cloud Messaging Sender ID (`messagingSenderId`  variable in firebase config object)
  	* `REACT_APP_FB_APP_ID` -firebase project ID (`appId`  variable in firebase config object)
  	* `REACT_APP_FB_MEASUREMENT_ID` - ID for Google Analytics (`measurementId`  variable in firebase config object)
  	* `REACT_APP_MAP_API` - API key for Google Maps

2. Run project:
> `npm run start`


## Screenshots
![Sportim](https://user-images.githubusercontent.com/44229717/118544878-29208680-b756-11eb-95d5-7b37393f6dc3.jpg)

