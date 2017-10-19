#!/bin/bash

exec nohup java -jar /var/www/html/backend_jars/vta-oar.jar > /var/log/vta-oar.log &
exec nohup java -jar /var/www/html/backend_jars/vta-vas.jar > /var/log/vta-vas.log &
a2enconf servername
service apache2 reload
exec /usr/sbin/apache2ctl -D FOREGROUND
$CATALINA_HOME/bin/startup.sh

