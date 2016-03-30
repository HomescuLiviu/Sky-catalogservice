# Sky-catalogservice

# Donwload
git clone git@github.com:HomescuLiviu/Sky-catalogservice.git

# Run
gradlew spring-boot:run

Usage : 

URL : "http://localhost:8082/productSelection"
Mandatory cookie : "customerID"

Sky-catalogservice is a web application that allows customers to select and checkout products based on their location.

Tha app was developed in Intellij and build with Gradle.

TDD evidence : The first classes to be wtitten were CatalogueService, CustomerLocationService and CatalogueController with only a few unimplemented methods.
    
    The second step was creating the test classes for the above sevices. 
    This may not be completly visible due from looking at the commits.


BDD evidence : The following steps involved creating a web testing api that would connnect to the web application and parse the response.

The following tests were created and functionality was added after each test: 

http://localhost:63342/catalogservice/catalogueservice/webTests/Scenario1.html
http://localhost:63342/catalogservice/catalogueservice/webTests/Scenario2.html
http://localhost:63342/catalogservice/catalogueservice/webTests/Scenario3.html
http://localhost:63342/catalogservice/catalogueservice/webTests/Scenario4.html
http://localhost:63342/catalogservice/catalogueservice/webTests/Scenario5.html
http://localhost:63342/catalogservice/catalogueservice/webTests/Scenario6.html
http://localhost:63342/catalogservice/catalogueservice/webTests/Scenario7.html

BDD can be seen by looking at the commits.

Each test has a description on top, a test action in the middle and a test result on the left of tha page.

the tests have been run on Google Chrome.

All the above tests are in "/webtests".

