"# Protractor_Cucumber" 

Guide to Protractor, Javascript and Cucumber Setup
==================================================

USED SOFTWARE
-------------
Windows 10
VS Code

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
    framework: 'jasmine',
    //frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        'browserName': 'chrome'
    },
    specs: ['protractor-specs.js']
};
```

PROTRACTOR SPECS FILE 
---------------------
Add on your project ROOT folder the file protractor-specs.js

which will contain a basic test of protractor without cucumber yet

```
describe('angularjs homepage todo list', function () {
    it('should add a todo', function () {
        browser.get('https://angularjs.org');
    });
});
```

PACKAGE.JSON WITH SCRIPTS
-------------------------
In your package.json file add on the scripts section the following lines:

The protractor line points to the protactor cmd file and the argument

passed is the specs file we have added before.

```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "protractor": ".\\node_modules\\.bin\\protractor.cmd protractor-conf.js"
  },
```

RUN OUR FIRST PROTRACTOR SCRIPT
-------------------------------
Open 2 terminals or cmd windows and leave them open in order to keep running the processes below:
Go to your 1st terminal or cmd and type from your project's folder the following commands:

1. webdriver-manager update

This will download all required webdrivers for our browsers

2. webdriver-manager start

This will start the webdriver manager in order to successfully receive browser requests for connection

From a 2nd terminal or cmd window run the following command :

3. npm run protractor

This command will automatically run the script with property 'protractor', defined in the package.json

This should be the output of your first Protractor Script

```
C:\Protractor_GIT>npm run protractor

> protractor_git@1.0.0 protractor C:\Protractor_GIT
> protractor.cmd protractor-conf.js

[23:49:35] I/launcher - Running 1 instances of WebDriver
[23:49:35] I/hosted - Using the selenium server at http://localhost:4444/wd/hub
Started
.


1 spec, 0 failures
Finished in 4.298 seconds

[23:49:45] I/launcher - 0 instance(s) of WebDriver still running
[23:49:45] I/launcher - chrome #01 passed
```

PACKAGE.JSON NEW SCRIPTS
------------------------
You can automate some commands through package.json in the scripts section by adding the following lines

```
"test": "protractor protractor-conf.js",
"protractor": "node_modules/protractor/built/cli.js",
"webdriver-update": "./node_modules/.bin/webdriver-manager update"
```

In that way, we run **npm run test** and inside the test we define the source of the file containg our test

CONFIGURATION FOR CUCUMBER
--------------------------
**Important** If you are using VS Code (preferred) install the extension

* * cucumber (gherkin) full support * *

1. From your project root folder create a new folder called 'features'

2. Inside the 'features' folder create a file called login.feature

This will be your specs file for cucumber (gherkin)

3. Inside the 'features' folder create a sub-folder called 'stepDefinitions'

4. Inside the 'stepDefinitions' folder create a file called stepDefinitions.js file

There all the skeleton for the output of the compiled feature file will be generated

5. Open your 'protractor-conf-js' file and add a new property called 

specs: './features/*.feature'
cucumberOpts: {
        tags: false,
        // require step definitions
        require: [
            ./features/stepDefinitions/*.js', // accepts a glob
        ]
    }

6. Uncomment the following line: frameworkPath: require.resolve('protractor-cucumber-framework')

7. Replace framework: 'jasmine' with 'custom

RUNNING YOUR FIRST FEATURE FILE
-------------------------------

```
C:\Protractor_GIT>npm run test

> protractor_git@1.0.0 test C:\Protractor_GIT
> protractor protractor-conf.js

[00:10:42] I/launcher - Running 1 instances of WebDriver
[00:10:42] I/hosted - Using the selenium server at http://localhost:4444/wd/hub
UUUUUU.

Warnings:

1) Scenario: In order to verify login to facebook # features\login.feature:7
   ? Given I go to "http://www.way2automation.com/angularjs-protractor/banking/#/login"
       Undefined. Implement with the following snippet:

         Given('I go to {string}', function (string) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

   ? When I found the title as "Protractor practice website - Banking App"
       Undefined. Implement with the following snippet:

         When('I found the title as {string}', function (string) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

   ? Then I click on CustomerLogin Button
       Undefined. Implement with the following snippet:

         Then('I click on CustomerLogin Button', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

   ? Then I select the value as "Harry Potter" from the list
       Undefined. Implement with the following snippet:

         Then('I select the value as {string} from the list', function (string) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

   ? Then I click on Login
       Undefined. Implement with the following snippet:

         Then('I click on Login', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

   ? Then Welcome Page should show login as "Harry Potter"
       Undefined. Implement with the following snippet:

         Then('Welcome Page should show login as {string}', function (string) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

   √ After # node_modules\protractor-cucumber-framework\lib\resultsCapturer.js:27

1 scenario (1 undefined)
6 steps (6 undefined)
0m00.002s
```
