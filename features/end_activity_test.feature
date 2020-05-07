        @endActivityTest
Feature: End Activity Test

        Background: Go to Modal End the Activity
             When I click the EN Button
             Then I see the confirmation This will end the activity

        @negativeTesting
        Scenario: As a User, I should be able to successfully ignore end the activity apps
             When I click the No, no button
             Then I see the EN Button

        @positiveTesting
        Scenario: As a User, I should be able to successfully confirmed end the activity apps
             When I click the I agree button