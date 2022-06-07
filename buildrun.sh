#!/bin/bash

if [ $1 == 'onlykill' ]; then
    screen -S builded -X quit
    screen -ls
    exit 0
fi

yarn install
yarn build
if [ $? != "0" ]; then
    exit 1
fi

screen -ls builded > /dev/null

read -p "enter to continue: "

if [ $? == "0" ]; then
    screen -S builded -X quit
fi

screen -UAmdS builded yarn start
screen -ls

read -p "do you want to attach? (y:any): " attach

if [ "$attach" == "y" ]; then
    screen -r builded
fi

