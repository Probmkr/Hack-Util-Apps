#!/bin/bash

yarn install
./appdata.sh
screen -ls dev > /dev/null
if [ $? == 0 ]; then
    screen -S dev -X quit
fi
if [ $1 == 'onlykill' ]; then
    screen -ls
    exit 0
fi

screen -UAmdS dev yarn ${1:-dev:https}
screen -ls

read -p "do you want to attach? (y:any): " attach

if [ "$attach" == "y" ]; then
    screen -r dev
fi

