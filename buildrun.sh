#!/bin/bash

yarn install
sudo yarn build
if [ $? != "0" ]; then
    exit 1
fi

sudo screen -ls builded > /dev/null
if [ $? == "0" ]; then
    sudo screen -S builded -X quit
fi

read -p "enter to continue: "
sudo screen -UAmdS builded next start -p ${1:-80}
sudo screen -ls

read -p "do you want to attach? (y:any): " attach

if [ "$attach" == "y" ]; then
    sudo screen -r builded
fi

