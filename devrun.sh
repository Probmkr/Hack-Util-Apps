#!/bin/bash

screen -UAmdS builded yarn dev

if [ $1 == "-a" ]; then
    screen -r dev
fi

