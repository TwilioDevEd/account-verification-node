#!/bin/bash

clear
echo "Downloading docker-compose.yml"

wget https://raw.githubusercontent.com/TwilioDevEd/account-verification-node/dockerize/docker-compose.yml

docker compose up -f docker-compose-demo.yml -d

echo "Your app is now running. Check the Github README to see which port to access."