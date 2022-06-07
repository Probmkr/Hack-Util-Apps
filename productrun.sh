#!/bin/bash

if [ $1 == 'onlykill' ]; then
    screen -S product -X quit
    screen -ls
    exit 0
fi

yarn install
yarn build
if [ $? != "0" ]; then
    exit 1
fi

screen -ls product > /dev/null

read -p "enter to continue: "

if [ $? == "0" ]; then
    screen -S product -X quit
fi

screen -UAmdS product yarn start
screen -ls

read -p "do you want to attach? (y:any): " attach

if [ "$attach" == "y" ]; then
    screen -r product
fi

