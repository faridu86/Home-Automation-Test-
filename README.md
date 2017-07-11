# Home Automation Portal
Node.js, Express, Sequelize, Webpack, Babel/ES6, AngularJS...

# DB
DB is provided under the directory db, after importing db change the config in *./config/main.js* according to your db.

# System Requirements (Node)
Node 8 should be installed on your machine.
If its not installed, install it using brew with command *brew install node*
Check node version using command *node -v*
If it is 8 then its okay, else install it using "n" a node version manager, install *n* using command *npm install n -g*
To switch to any version just type the syntax "n version", in our case it will be *n 8*
To verify version just run *node -v* again and it should be 8

# Install packages
cd into the project directory and run *npm install* to install dependencies and packages

# Generate bundle file
cd into the project directory and run *webpack --config webpack.config.js --progress* to generate bundle file

# Open app
cd into the project directory and run app using command *node app* 
then open the app in browser using url *http://localhost:3000/*

# Login
after opening the app in browser you can login with following existing users
root/123
farid/123
hamza/123