#!/bin/bash

yarn build
read -p "enter to continue: "
screen -UAmdS builded yarn start

if [ $1 == "-a" ]; then
    screen -r builded
fi

