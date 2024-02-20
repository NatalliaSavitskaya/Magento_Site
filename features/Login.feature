Feature: Login

    Scenario: User can log in using valid credentials
        Given I am on the home page
        When I click on the Sign In link
        And I enter "new_email@gmail.com" into Email input field
        And I enter "winterschool2024!" into Password input field
        And I click the Sign In button
        Then I see the welcome message "Welcome, Natallia Newcomer!"
        And My Account page contains email "new_email@gmail.com"