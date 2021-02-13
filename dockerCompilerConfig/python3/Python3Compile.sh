#!/bin/bash
chown root:npusers ./
chmod 755 ./

su npuser PythonExecuteScript.sh
exitCode=$(echo "$?")

wait $!

chmod 777 ./
exit "$exitCode" 
