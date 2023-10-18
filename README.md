[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/AvkT738V)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12376524&assignment_repo_type=AssignmentRepo)

## Summary
We decided to use Node.js for our backend. The options we originally had listed out as a team were Java, Python, and Javascript, and we voted on using 
For the database, we chose to use PostgreSql as it was the management system we were both most familiar with using. 
Express
Docker

## Individual Contributions
Eric:
- Designed database schema
- Implemented database schema in SQL
- Created API with node.js to handle HTTP requests and database accesses.

Marc:
- Designed database schema.
- Created and deployed webpage.
- Added functionality to prevent HTTP redirects and update webpage with HTTP response data with javascript.
- Filled in API methods with node.js for HTTP requests and database accesses.

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
