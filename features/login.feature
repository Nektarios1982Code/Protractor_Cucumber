Feature: Login to Website

    In order to perform successful login
    As a user
    I want to verify correct title of page

    Scenario: In order to verify correct title of page
        Given I go to "http://juliemr.github.io/protractor-demo/"
        Then I found the title as "Super Calculator"