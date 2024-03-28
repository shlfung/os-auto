Feature: OpenSpecimen Homepage

    Scenario: Check title
        Given I open url "https://openspecimen.bcchr.ca/openspecimen"
        When I fill in the username and password and click button "Sign In"
        Then I see in title "Home"
