Feature: OpenSpecimen Homepage

    Scenario: Check title
        Given I open url "https://openspecimen-staging.bcchr.ca/openspecimen"
        When I fill in the username and password and click button "Sign In"
        Then I see in title "Home"

    Scenario: Check Side Bar
        Given I open url "https://openspecimen-staging.bcchr.ca/openspecimen"
        When I fill in the username and password and click button "Sign In"
        When I click on the side bar
        Then I see in title "Navigate To"