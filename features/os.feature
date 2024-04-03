Feature: Adding and Deleting Users

    Scenario: Login as admin Check title
        Given I open url "https://openspecimen-staging.bcchr.ca/openspecimen"
        When I fill in the username and password and click button "Sign In"
        Then I see in title "Home"

    Scenario: Login as admin and create a regular user
        Given I open url "https://openspecimen-staging.bcchr.ca/openspecimen"
        When I fill in the username and password and click button "Sign In"
        When I click on the side bar
        Then I see in title "Navigate To"

    Scenario: Login as the test user
        Given I open url "https://openspecimen-staging.bcchr.ca/openspecimen"
        When I fill in the username and password and click button "Sign In"
        When I click on the side bar
        Then I see in title "Navigate To"
     
    Scenario: Login as admin and delete the regular user
        Given I open url "https://openspecimen-staging.bcchr.ca/openspecimen"
        When I fill in the username and password and click button "Sign In"
        When I click on the side bar
        Then I see in title "Navigate To"