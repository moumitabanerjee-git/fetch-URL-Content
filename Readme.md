# Fetch content of array of URLs

---

## Introduction

The _**fetchURLContent**_() function basically accepts an array URLs and return the content of them in a single promise.
The error states has been defined and also test file has been provided for Unit testing purpose.

## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environment.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer. Also, be sure to have `git`
  available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and
  the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v12.17.0

    $ npm --version
    6.14.4

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open
again the command line and be happy.

    $ npm install npm -g

## Install

    $ git clone https://github.com/YOUR_USERNAME/PROJECT_TITLE
    $ cd PROJECT_TITLE
    $ npm install

## Install Axios for API calls

    $npm install axios

## Install Mocha, Chai for testing

    $npm install --save-dev mocha 
    $npm install --save-dev chai 

## API

### fetchURLContent

    fetchURLContent(arrayOfUrl:[])

Snippet to call Example:

     const fetchURLContent=require('../index');
      
     function () {

     const arrayOfURLs = ['https://jsonplaceholder.typicode.com/todos/2',
                          'https://jsonplaceholder.typicode.com/todos/3'];
     
     fetchURLContent(arrayOfURLs).then(urlContent=>{
      ...Do Something
      })
    }

## Configuration for testing

In Package.json:

    "scripts": {
       "test": "mocha"
    }

Run the test:

     $ npm run test

or

     $ mocha

##Test Cases
    ==> For all correct URLs
    ==> For partial correct URLS
    ==> For empty response body


 ## Thank You!