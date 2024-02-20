Feature: Login

    Scenario: User can log in using valid credentials
        Given I am on home page
        When I click on Sign in link
        And I enter email "new_email@gmail.com"
        And I enter password "winterschool2024!"
        And I click the Sign in button
        Then I see the welcome message "Welcome, Natallia Newcomer!"
        And My account page contains email "new_email@gmail.com"