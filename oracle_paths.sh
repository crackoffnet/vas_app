#!/bin/bash

###Integrate Oracle Libraries and export ORACLE_HOME
echo "/usr/lib/oracle/11.1/client64/lib/" >> /etc/ld.so.conf.d/oracle.conf
export ORACLE_HOME=/usr/lib/oracle/11.1/client64
export PATH=$PATH:$ORACLE_HOME/bin
export LD_LIBRARY_PATH=/usr/lib/oracle/11.1/client64/lib/${LD_LIBRARY_PATH:+:$LD_LIBRARY_PATH}
