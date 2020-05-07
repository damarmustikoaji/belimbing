        @userRegisterTest
Feature: User Register Test

        Background: Go to screen the apps
            Given I go to screen the apps

        @positiveTesting
        Scenario: As a User, I should be able to successfully register
             When I click the User Register button
             Then I see the title register page
             When I fill in the username field
             When I fill in the email field
             When I fill in the password field
             Then I close the softkeyboard
             When I click the agreement
             When I click the register button
             Then I see the Register User button