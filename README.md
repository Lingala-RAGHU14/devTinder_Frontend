# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

1) created a vite + React 
2) removed unnecessary code 
3) installed Tailwind css
4) installed daisy UI
5) add navbar component to app.jsx
6) create a seprate navbar file
7) installed a react-router-dom 
8) made routing using BrowserRouter > Routes > Route 
9) create a outlet in your body component  
9) create a login profile and footer 
10) install axios 
11) install cors in backend add middleware with configuration : origin, credentials:true;
12) whenever you pass the API call so pass axios configuration : {withCredentials: true}
13) installed the @reduxjs/toolkit react-redux 
14) configureStore => Provider => createSlice => add reducers to store
15) add redux devtools in chrome 
16) login and see if the data is coming properly in the store
17) navBar should upadate as soon as user logs in 
18) refactor our code to add constant file in utils folder and create a component folder
- we should not be access the other routes without login 
- if token is not present the user redirect to login page
- created a logout page
- get the feed and add it in to the store 
- build the user card on the feed 
- edit profile feature 
- show taste message on save of profile 
-  set all user connections in connection page
- set all user request on request page 
- feature : Accept reject the request

remaining 
    - send/ignore the feedCard of the feed api
    - signup the new user 
    - end to end testing