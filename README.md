## Raspberry Pi IoT Server

In the following steps we will create a Rasbperry Pi IoT Server with Nodejs, Express, Socket.io, Nginx, PM2 and Dataplicity as a secure VPN tunnel.

![Pic](/public/img/Slide2.PNG)


### Hardware - I have no affiliation find cheapest price
[Raspberry Pi](https://www.canakit.com/raspberry-pi-4-ultimate-kit.html)  
[IoT Relay](https://dlidirect.com/products/iot-power-relay)  

### Overview
[Video](https://www.screencast.com/t/LSzoEROijFPA)


### Download OS and Boot Pi
[Video](https://www.screencast.com/t/Gvj92bM2Hok)  
https://www.raspberrypi.org/downloads/


### Install NodeJS
[Video](https://www.screencast.com/t/aVQjJiXy)  
https://www.nodesource.com/  
https://github.com/nodesource/distributions


### GPIO Test
[Video](https://www.screencast.com/t/SHqnAdSEO)  


### Clone Git Repo / Test LED and Relay
[Video](https://www.screencast.com/t/ZJtFPPdl)
``` 
git clone https://github.com/prichardsondev/RaspberryPiServer.git
cd RaspberryPiServer
npm i
node app.js

```


### Install NginX & Test
[Video](https://www.screencast.com/t/fYx4OY9QYl25)
```   
 sudo apt-get install nginx
 sudo rm /etc/nginx/sites-enabled/default
 sudo nano /etc/nginx/sites-available/node

```
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
```
 sudo ln -s /etc/nginx/sites-available/node /etc/nginx/sites-enabled/node  
 sudo service nginx restart
```


### Install Dataplicity.com
[Video](https://www.screencast.com/t/uk2HuJ4vXFt)  
https://www.dataplicity.com/


### Install PM2
[Video](https://www.screencast.com/t/ZkStAopciB8f)
```
 sudo npm install pm2 -g  
 pm2 start app.js  
 pm2 startup
 
```
run script from 'pm2 startup'
```
pm2 save

```