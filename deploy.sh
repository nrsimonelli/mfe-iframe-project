#!/bin/sh
echo 'Installing module invincible-spa-world........'
cd invincible-spa-world/ && npm install
cd ..

echo "Installing root config module................"
cd root-config/ && npm install
cd ..

echo "Installing single-spa-poc module..............."
cd single-spa-poc/ && npm install
cd ..

echo "Deploying the application................."
cd root-config/ && npm start
