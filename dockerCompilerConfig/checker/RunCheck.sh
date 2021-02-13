#!/bin/bash
exec  1> $"$(pwd)/output.txt"
exec  2> $"$(pwd)/error.txt"

javac Checker.java
compileExitCode=$(echo "$?")
if [ "$compileExitCode" -eq 0 ];	then
    timeout 5 java Checker
    javaExitCode=$(echo "$?")

    if  [ "$javaExitCode" = 124 ]; then
        exit "$javaExitCode"
    elif [ "$javaExitCode" = 0 ]; then
        exit 0
    elif [ "$javaExitCode" = 3 ]; then
        exit 3
    else 
        exit 1
    fi
fi
exit 2