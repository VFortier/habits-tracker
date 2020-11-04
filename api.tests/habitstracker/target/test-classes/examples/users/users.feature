Feature: Signing in a new user

  Background:
    * url 'http://localhost:5000'

  Scenario: Sign in new user and log him in
    * def now = function(){ return java.lang.System.currentTimeMillis() }
    * def username = 'Test-' + now()
    * def email = username + '@test.com'
    * def signinReq =
      """
      {
        "email" : "#(email)",
        "password" : "Testing123",
        "nickname" : "#(username)"
      }
      """

    Given path '/user/signup'
      And request signinReq
    When method post
    Then status 200

    * def loginReq =
      """
      {
        "email" : "#(email)",
        "password" : "Testing123",
      }
      """

    Given path '/user/login'
      And request loginReq 
    When method post
    Then status 200