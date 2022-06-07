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

read -p "enter to continue: "

screen -ls product > /dev/null

if [ $? == "0" ]; then
    screen -S product -X quit
fi

screen -UAmdS product yarn ${1:-start:https}
screen -ls

read -p "do you want to attach? (y:any): " attach

if [ "$attach" == "y" ]; then
    screen -r product
fi

