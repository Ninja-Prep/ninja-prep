#!/bin/bash
exec  1> $"$(pwd)/output.txt"

timeout 5 java File < testcase.txt
javaExitCode=$(echo "$?")

if  [ "$javaExitCode" = 124 ]; then
    exit "$javaExitCode"
elif [ "$javaExitCode" = 0 ]; then
    exit 0
else 
    exit 1
fi