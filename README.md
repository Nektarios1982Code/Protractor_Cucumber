"# Protractor_Cucumber" 

Guide to Protractor, Javascript and Cucumber Setup
==================================================

NPM
----
First initialize your package.json file by running the command below:

`$ npm init`

Run the following commands below to install the required packages needed

protractor, cucumber, chai, cucumber-html-reporter, properties-reader and protracor-cucumber-framework

according of course to your project needs. 

The **required** packages are : cucumber, protractor and protractor-cucumber-framework

`$ npm i cucumber`

`$ npm i protractor`

`$ npm i protractor-cucumber-framework`

`$ npm i chai`

`$ npm i chai-as-promised`

`$ npm i cucumber-html-reporter`

`$ npm i properties-reader`


PACKAGE.JSON WITH DEPENDENCIES
------------------------------
Your package.json file should now look like this:
```
{
  "name": "protractor_cucumber",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "chai": "^4.2.0",
    "chai-as-promised": "^7.1.1",
    "cucumber": "^6.0.5",
    "cucumber-html-reporter": "^5.1.0",
    "properties-reader": "^1.0.0",
    "protractor": "^5.4.3",
    "protractor-cucumber-framework": "^6.2.0"
  }
}
```

CONFIGURATION FILE v1.0.0
-------------------------
Add on your project ROOT folder the file protractor-conf.js

The basic skeleton should look like this:

```
exports.config = {
    //directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        'browserName': 'chrome'
    },
};
```
