#!/bin/bash

screen -ls dev > /dev/null
if [ $? == 0 ]; then
    screen -S dev -X quit
fi

screen -UAmdS dev yarn dev
screen -ls

read -p "do you want to attach? (y:any): " attach

if [ "$attach" == "y" ]; then
    screen -r dev
fi

