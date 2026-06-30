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

//remaining 
    - send/ignore the feedCard of the feed api
    - signup the new user 
    - end to end testing




// Deployment 
    - sign up in aws 
    - launch instance (modify the permissions)
    - chmod 400 <secretkey>.pem
    - ssh -i "devTinder-secret.pem" ubuntu@ec2-13-53-122-55.eu-north-1.compute.amazonaws.com
    - install node version 22.13.1 (not latest that verison current in pc)
    - git clone <http url>
    -Frontend
        - make sure while npm run  build we have to be in same branch 
        - in ec2 server install "npm install" and run "npm run build" 
        -sudo apt update
        - sudo apt install nginx
        - sudo systemctl start nginx
        - sudo systemctl enable nginx
        - copy code from dist folder (build files) to /var/www/html
        - sudo scp -r dist/* /var/www/html/
        - enable port :80 on our AWS instace 
    -Backend
        - allowed EC2 instance public  IP on mongo DB server
        - npm install pm2 -g 
        - pm2 start npm -- start
        - pm2 logs 
        - pm2 flush (name) npm [to flush the logs] 
        - pm2 list <name>,pm2 stop <name>, pm2 delete <name>
        - pm2 start npm  -- name "devTinder" -- start [for custom the name]
        - config nginx :  sudo nano /etc/nginx/sites-available/default
        - restart nginx : sudo systemctl restart nginx
        - modify Frontend BASE_URL to /api
        

        frontend - 13.53.122.55
        backend - 13.53.122.55:3000 

        domain name --> devtinder.com --> 13.53.122.55

        frontend --> devtinder.com 
        backend --> devtinder.com:3000 (but we should make) --> devtinder.com/api/
            -for this we do nginx configuration by nginx proxy pass
        
        nginx config :

        server_name 13.53.122.55;

         location /api/ {
        proxy_pass http://localhost:3000/;

        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }