#!/bin/bash
exec  1> $"$(pwd)/output.txt"
exec  2> $"$(pwd)/error.txt"

timeout 3 python3 -u file.py

if  [ $? = 124 ]; then
    exit 1
else
    exit 0
fi


