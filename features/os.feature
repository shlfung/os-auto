Feature: Adding and Deleting Users

    Scenario: Login as admin Check title
        Given I open url "https://openspecimen-staging.bcchr.ca/openspecimen"
        When I fill in the username and password and click button "Sign In"
        Then I see in title "Home"

    Scenario: Login as admin and create a regular user
        Given I open url "https://openspecimen-staging.bcchr.ca/openspecimen"
        When I fill in the username and password and click button "Sign In"
        When I click on the side bar and select "Users"
        When I see in title "Users"
        When I click on the button "Create"
        Then I see in title "Create User"

