#!/bin/bash

nohup java -jar /var/www/html/backend_jars/vta-oar.jar $2 > /var/log/vta-oar.log & sleep 5
nohup java -jar /var/www/html/backend_jars/vta-vas.jar $2> /var/log/vta-vas.log & sleep 5
#$CATALINA_HOME/bin/startup.sh & sleep 5
service apache2 reload
/usr/sbin/apache2ctl start
