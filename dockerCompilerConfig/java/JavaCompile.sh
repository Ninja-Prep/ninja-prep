#!/bin/bash
exec  2> $"$(pwd)/error.txt"

javac File.java
compileExitCode=$(echo "$?")
chown root:npusers ./
chmod -R 722 *
chmod 755 *.class
chmod 755 ./
if [ "$compileExitCode" -eq 0 ];	then
    su npuser JavaExecuteScript.sh 
    runExitCode=$(echo "$?")
    chmod 777 ./
    exit "$runExitCode"
fi

chmod 777 ./
chmod -R 777 *
exit 2