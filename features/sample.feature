@sampleFeatureTest1
Feature: Sample Feature Test

  @tag1
  Scenario: Scenario testing 1
    Given I go to screen the apps
    When I click the button
    Then I see the hello world

  @tag2 @skip
  Scenario: Scenario testing 2
    Given I go to screen the apps
    Then I see the test

  @tag3
  Scenario: Scenario testing 3
    Given I go to screen the apps