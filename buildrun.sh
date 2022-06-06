#!/bin/bash

npm i
sudo yarn build
if [ $? != "0" ]; then
    exit 1
fi

screen -ls builded > /dev/null
if [ $? == "0" ]; then
    screen -S builded -X quit
fi

read -p "enter to continue: "
screen -UAmdS builded sudo next start -p ${1:-80}
screen -ls

read -p "do you want to attach? (y:any): " attach

if [ "$attach" == "y" ]; then
    screen -r builded
fi

