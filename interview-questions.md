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

method="GET"    /students  

The controller method called is index, show.

Will display a list of all students.

method="POST"   /students    

The controller method called is create, add new items.

Will create a new student

method="GET"    /students/new

The controller method called is index, new.

Will return an HTML form for creating a new student.

method="GET"    /students/2  

The controller method called is index, show.

Will display a specific student.

method="GET"    /students/2/edit    

The controller method called is index, edit.

Will return an HTML form for editing a student.

method="PATCH"  /students/2      

The controller method called is update, modify items.

Will update a specific student.

method="DELETE" /students/2    

The controller method called is destroy, remove items.

Will delete a specific student.



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1.  As a developer I want to create a 'to-do' list application using Ruby on Rails, so that I can have a usable table and database to create a functaion and usable 'to-do' list to keep track of things I want to do and to mark off those items once they are completed.
