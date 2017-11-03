#Pull Tomcat image with Apache installed
FROM tomcat
MAINTAINER Garegin Ayvazyan <garegin.ayvazyan@ucom.am>, <garegin.ayvazyan@hotmail.com>

#Installing basic tools
RUN apt-get update && \
    apt-get install -y git curl wget net-tools vim elinks sudo gnupg gnupg2 gnupg1 software-properties-common alien libaio1 apache2
    
#Get and install nodejs,npm
RUN curl --silent --location https://deb.nodesource.com/setup_6.x | sudo bash -
RUN apt-get install -y nodejs build-essential npm

#Pull Github repository for Dockerfile, docker-compose.yml, startup scripts
RUN git clone http://Eduard.Khachatryan:Protegoinmaxima91@192.168.37.20:7990/scm/vta/autokit-web.git /tmp/vas_app/
WORKDIR /tmp/vas_app/

#Installing Oracle instant client and MYSQL client for DB connections
RUN alien -i oracle-instantclient11.2-basic-11.2.0.3.0-1.x86_64.rpm
RUN alien -i oracle-instantclient11.2-devel-11.2.0.3.0-1.x86_64.rpm
RUN alien -i oracle-instantclient11.2-jdbc-11.2.0.3.0-1.x86_64.rpm
RUN alien -i oracle-instantclient11.2-sqlplus-11.2.0.3.0-1.x86_64.rpm
RUN apt-get install -y mysql-client mysql-common

#Setup Oracle and Tomcat environments
ENV ORACLE_HOME=/usr/lib/oracle/11.2/client64
ENV PATH=$PATH:$ORACLE_HOME/bin
ENV LD_LIBRARY_PATH=/usr/local/tomcat/native-jni-lib:/usr/lib/oracle/11.2/client64/lib/${LD_LIBRARY_PATH:+:$LD_LIBRARY_PATH}
WORKDIR /tmp/vas_app/autoweb/

#Install grunt, bower, karma and related dependencies and build application
RUN npm install && \
    npm install --global grunt grunt-cli bower grunt-karma karma karma-phantomjs-launcher karma-jasmine jasmine-core phantomjs-prebuilt --save-dev
RUN bower install --allow-root && \
    grunt build
    
#Copy Jar files to Apache root directory
RUN cp ../vta*.jar /var/www/html/ && \
    cp /tmp/vas_app/run_startup_scripts.sh /etc/apache2/ && \
    cp -avr /tmp/vas_app/autoweb/dist/. /var/www/html/
    
#Change default 8080 port to 8070 for Tomcat    
RUN sed -i -e 's/8080/8070/g' /usr/local/tomcat/conf/server.xml 
#&& \
#    echo "ServerName localhost" | sudo tee /etc/apache2/conf-available/servername.conf

#Cleanup
RUN rm -rf /tmp/vas_app/
