[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/AvkT738V)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12376524&assignment_repo_type=AssignmentRepo)

## Summary
We decided to use Node.js for our backend. The options we originally had listed out as a team were Java, Python, and Javascript, and the result was that we would use javascript due to the knowledge the more experienced members
of the group had with the language, and with the benefits that come with using Node.js over using any of the other choices of backend technologies.
For the database, we chose to use PostgreSql as it was the management system the two of us were both most familiar with using. 
Express TODO
Docker TODO
We chose to implement functionality for the specific SQL queries involving SELECT and INSERT because those two are the most prevalent and useful in the context of our project. In the final version of the project,  
data is planned to be inputted through files created by the user containing information about students, staff members, on-site buildings, etc. Thus, the situations where operations like DELETE and UPDATE are rare and only occur
if there was an error with the processing of the input data itself outside of the application (i.e. there was a typo or extra student which is not meant to be there). These methods would follow the same structure as the ones 
implemented in this demo, but fit into a more niche use case, which is why we decided to leave them out.

## Individual Contributions
Eric:
- Designed database schema
- Implemented database schema in SQL
- Created API with node.js to handle HTTP requests and database accesses.
- Learned about Docker and created docker files and docker-composed to easily create the docker container from scratch.
- Deployed and managed the EC2 instance containing the REST API which translates the requests to database CRUD commands and the postgresSQL database. 
- Research existing microarchitectures and paradigms, chose the best one for us and followed them. 
- Took on the leadership role in the subgroup and guided Marc with some frontend issues like the post body data. 
- Learned about express testing, then implemented testing using jest and supertest. 

Marc:
- Designed database schema.
- Conducted research and exercised different methods/platforms to use for deploying a webpage online.
- Created and deployed webpage with Microsoft Azure.
- Conducted research into several methods to create and receive HTTP requests in HTML and javascript to prevent response redirecgts.
- Added functionality to prevent HTTP redirects and update webpage with HTTP response data with javascript.
- Filled in API methods with Node.js for HTTP requests and database accesses.
- Conducted research into and implemented different fixes for errors stemming from HTTP requests send from frontend being blocked from backend.
- Implemented a fix for HTTP request being blocked by CORS policy with Node.js.

## Instructions on how to use
The landing page of our part is hosted with Microsoft Azure on the url: http://group48databasewebpage.z19.web.core.windows.net. On the page, there are 5 input sections on the left-hand side
with areas to create different objects that will be stored in the final database. These objects are: User (account information), Student (student attending the summer camp),
Student preference (information detailing two students who should be separated/kept together), Room (information about a room in the camp), and Counselor (staff member 
on the summer camp site). For any of the five forms, if all the necessary input fields are filled out and any necessary conditions are met (i.e. when making a student
preference item, the first SID must be greater than the second), then a message on the right-hand side of the page will state that the insertion into the database has 
succeeded. If there is an issue with an issue with the insertion of the given data (i.e. the same SID is inserted twice, meaning that a student is attempted to be duplicated),
then a message that the insertion has failed should display instead.
If the user would like to see the data that they have inserted thus far, they can use the buttons on the right-hand side of the screen, which will display the data stored in
each relation of the database in JSON format in the same area that the insertion messages appear. If an error has occurred, a message detailing such will appear instead in the
same place.
