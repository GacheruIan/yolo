# YOLOMY

## Introduction

The YOLO Project is a full-stack application designed for managing products seamlessly. This application features a client and backend, both running within Docker containers, providing a robust environment for development and deployment. Follow the instructions below to set up and run the project on your local machine.

To get started, clone the repository using the following command:


git clone git@github.com:GacheruIan/yolo.git



### Change into the project directory:
cd yolo
### Run the following command to build and start the Docker containers:
docker compose up --build

## Start the Client

### Navigate to the client directory:
cd client
### Install the required dependencies:
npm install
### Set the Node options for compatibility:
export NODE_OPTIONS=--openssl-legacy-provider
### Start the client application:
npm start - http://localhost:3000/


## Start the Backend

### Navigate to the client directory:
cd ../backend
### Install the required dependencies:
npm install
### Start the client application:
npm start 

## Add a Product
To add a product, fill in the product details in the form. Note that the price field only accepts numeric input.
<img src="../client//src/images/Pasted image.png" alt="TagsDocker" />
