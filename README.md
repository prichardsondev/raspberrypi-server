## Raspberry Pi IoT Server

In the following steps we will create a Rasbperry Pi IoT Server with Nodejs, Express, Socket.io, Nginx, PM2 and Dataplicity as a secure VPN tunnel.

![Pic](/public/img/Slide2.PNG)

### Overview
[Video](http://placeholder.com)


### Download OS and Boot Pi
[Video](http://placeholder.com)  
https://www.raspberrypi.org/downloads/


### Install NodeJS
[Video](http://placeholder.com)  
https://www.nodesource.com/  
https://github.com/nodesource/distributions


### GPIO Test
[Video](http://placeholder.com)  


### Clone Git Repo / Test LED and Relay
[Video](http://placeholder.com)  
git clone https://github.com/prichardsondev/RaspberryPiServer


### Install NginX & Test
[Video](http://placeholder.com)   
 sudo apt-get install nginx  
 sudo rm /etc/nginx/sites-enabled/default  
 sudo nano /etc/nginx/sites-available/node  
```
server {
    listen 80;
    server_name localhost;

    location / {
        proxy_set_header   X-Forwarded-For $remote_addr;
        proxy_set_header   Host $http_host;
        proxy_pass         "http://127.0.0.1:3000";
    }
}
```
 sudo ln -s /etc/nginx/sites-available/node /etc/nginx/sites-enabled/node  
 sudo service nginx restart


### Install Dataplicity.com
[Video](http://placeholder.com)  
https://www.dataplicity.com/


### Install PM2
[Video](http://placeholder.com)  
 npm install pm2 -g  
 pm2 start app.js  
 pm2 startup  
