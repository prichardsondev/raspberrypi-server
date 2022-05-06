## Raspberry Pi IoT Server

In the following steps we will create a Rasbperry Pi IoT Server with Nodejs, Express, Socket.io, Nginx, PM2 and Dataplicity as a secure VPN tunnel.

![Pic](/public/img/Slide2.PNG)


### Hardware - I have no affiliation find cheapest price
[Raspberry Pi](https://www.canakit.com/raspberry-pi-4-ultimate-kit.html)  
[IoT Relay](https://dlidirect.com/products/iot-power-relay)  

### Overview
[Video](https://www.screencast.com/t/M8Y9wp9y)


### Download OS and Boot Pi
[Video](https://www.screencast.com/t/FHFa8H9z)  
https://www.raspberrypi.org/downloads/


### Install NodeJS
[Video](https://www.screencast.com/t/VUWQJbiT95)  
https://www.nodesource.com/  
https://github.com/nodesource/distributions


### GPIO Test
[Video](https://www.screencast.com/t/uvcP7id7OX9)  


### Clone Git Repo / Test LED and Relay
[Video](https://www.screencast.com/t/dxnVxYAJxX8)  
git clone https://github.com/prichardsondev/RaspberryPiServer.git  
for version with pi camera  
git git clone https://github.com/prichardsondev/RaspberryPiServerWithCamera.git



### Install NginX & Test
[Video](https://www.screencast.com/t/L4puWFsXBN1g)   
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
#### You may need python2 for this to work
#### New Raspberry PI OS come with Python3
#### sudo apt-get install python
#### reboot then install dataplicity
[Video](https://www.screencast.com/t/KQtHAmH58sWT)  
https://www.dataplicity.com/


### Install PM2
[Video](https://www.screencast.com/t/brQiuYSyIy)  
 sudo npm install pm2 -g  
 pm2 start app.js  
 pm2 startup
 //run script generated
 pm2 save 
