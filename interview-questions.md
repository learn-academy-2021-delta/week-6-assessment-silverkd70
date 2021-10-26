# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: You can use the migrate function in Rails to add or make changes to the model Cohort.  You can create the foreign key Student ID within the Cohort Model.

  Researched answer: In rails, the migrate function to add the foreign key.  Make sure to run the db:migrate command, then access the cohort.rb app model and set the class Cohort within the ApplicationRecord with has_many :students.  Then set the class Student within the ApplicationRecord with belongs_to :cohort. Finally, create the new student entry by accessing teh rails c (console) and use cohort.first when create your student to cohort assignments within the active record with the create function.



2. Which RESTful routes must always be passed params? Why?

  Your answer: I believe that update and delete are the only two RESTful routes that must always be passed params, because they both require an :id param to locate the active record in order to allow for the edit and destroy to change the assigned record.  All other RESTful routes do not require the params to create or get all records.  Show is the only portion of read that would need the param, however the index portion of the Read route does not require it.

  Researched answer: As I stated above, it does look like some portions of Read needs to have an identifier to know which item in the database needs to be displayed to the reader.  Update requires a param because it needs to know which item in the database is being called for the edit.  This also allows the database to locate the active record and if it cannot find such record then the edit option will display an error for the user.  Delete also needs to know which item in the database is being called in order for the data to be destroyed and to remove the active record.  It will also display an error if the record cannot be found or does not exist.



3. Name three rails generator commands. What is created by each?

  Your answer: Three rails generator commands that I can think of would be db:migrate, which allows us to modify the schema of our database; rails new is a generator command that creates the new rails application; and, rails destroy, which will undo/remove what was previously generated in rails.

  Researched answer: Migrations allow for database alterations in a more structred and organized way, by allowing the developer to edit SQL data fragments.  The active record tracks migrations that have already run so all that is need to do in order to make an update it to run db:migrate then deccribe your edits using rails functions.  After running the gem install rails you are able to use the rails new command to create a new Rails application which setups up the application files and database schema to begin creating the required database input.  Rails destroy is the oppisite of the rails generate command and is useful in undoing what was generated in order to start over. The rails destroy command pretty much reverses the generation.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

<!-- Somehow I left the word index in some of my answers.  I removed them so things make more sense -->

method="GET"    /students  

The controller method called is index.

Will display a list of all students.

method="POST"   /students    

The controller method called is create, add new items.

Will create a new student

method="GET"    /students/new

The controller method called is new.

Will return an HTML form for creating a new student.

method="GET"    /students/2  

The controller method called is show.

Will display a specific student.

method="GET"    /students/2/edit    

The controller method called is edit.

Will return an HTML form for editing a student.

method="PATCH"  /students/2      

The controller method called is update, modify items.

Will update a specific student.

method="DELETE" /students/2    

The controller method called is destroy, remove items.

Will delete a specific student.



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

 1.  As a developer I want to create a 'to-do' list application using Ruby on Rails, so that I can have a usable table and database to create a functaion and usable 'to-do' list to keep track of things I want to do and to mark off those items once they are completed.
 
 2.  As a developer, my 'to-do' list application will have a title and include content.
 
 3.  As a developer, I will need to add new 'to-do' items directly to my database.
 
 4.  As a developer, I will need to use migrate to add or make changes to my 'to-do' list items or to add new content, such as a completed and date column.
 
 5.  As a developer, I may want to consider using a foreign key in a new table for people resposible for specific 'to-do' list items.
 
 6.  As a user, I can see all of the 'to-do' list itmes listed on the home page of the application.
 
 7.  As a user, I can add new 'to-do' list items directly to the database.
 
 8.  As a user, I can see a new form that allows me to modify a 'to-do' list item.
 
 9.  As a user, I can be redirected back to the application home page after entering a new item.

10.  As a user, I can can click on a 'to-do' list item and be routed to a page where I can see the title and content of the item I selected.