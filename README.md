# vas_app
###### Step by step userguide ######

### To build the image ###
docker build -t vas_backend .

### To pull the image ###
docker pull crackoffnet/vas_backend

### To run the image ###
docker run -d --name vas_backend -p 9000:9000 -p 8080:80 vas/vas_backend

### To attach to the running container ###
docker exec -ti vas_backend bash

### To connect to mysql server from another containers ###
mysql -h mysql -u root -p

####################################################################################
<p> git clone https://github.com/crackoffnet/vas_app.git /tmp/vas_app/ </p>
<p> cd /tmp/vas_app && docker-compose up --build -d </p>
####################################################################################
