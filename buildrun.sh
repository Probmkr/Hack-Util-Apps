#!/bin/bash

yarn build
if [ $? != "0" ]; then
    exit 1
fi

screen -ls builded > /dev/null
if [ $? == "0" ]; then
    screen -S dev -X quit
fi

read -p "enter to continue: "
screen -UAmdS builded yarn start
screen -ls

read -p "do you want to attach? (y:any): " attach

if [ "$attach" == "y" ]; then
    screen -r builded
fi

