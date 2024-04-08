Feature: Adding Collection Protocol

    Scenario: Login as admin and create a collection protocol
        Given I open url "https://openspecimen-staging.bcchr.ca/openspecimen"
        When I fill in the username and password and click button "Sign In"
        When I click on the side bar and select "Collection Protocols"
        When I see in title "Collection Protocols"
        When I click on the button "Create"
        When I see in title "Create Collection Protocol"
        Then I create a new Collection Protocol