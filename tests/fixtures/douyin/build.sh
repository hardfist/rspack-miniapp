#!/bin/bash
set -e

source ~/.nvm/nvm.sh
nvm use lts/erbium
npm i -g yarn

yarn install --frozen-lockfile
yarn build
