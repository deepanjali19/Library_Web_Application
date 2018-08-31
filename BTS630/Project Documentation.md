# Project Document #

## Team #: 19 ## 

## System Overview ##

This project is a Library web application which replicates a real-world library website. It consists of many basic and high-level functionalities needed by a library admin and any regular user which mainly include CRUD (create, read, update, delete books), multiple-filter book search, reserve and loan out books. The system allows access to these user-specific tasks only when the user is logged in through their unique library card ID and password.

## Part 1: Differences between Planned and Actual ##

The following functions were added to the final application which were not mentioned in the earlier iterations.

* Multiple filter search
* View user profile
* Book barcode
* Update profile option
* 2 ISBN for each book
* Renewing book
* Returning book

We added these functionalities as while working on the system we realised they are an essential part of a standard library application.

In terms of technology, the following changes were made:

* Planned to deploy the system using Digital Ocean as our hosting service, which we didn’t use as it was not needed.
* QuaggaJS was not used as barcode scanner was plug-and-play.

Used the following:

* moment.js to manipulate time to calculate important dates such as due dates.
* bcrypt.js to encrypt and decrypt passwords.
* Nodemailer to send emails.
* JSON Web Tokens for login authentication.
* bwip-js barcode generator and library to create book barcodes.

All the other technologies mentioned in BTR490 and BTS530 were same.

## Part 2: Deployment ##

We would use our original application hosting plan that is using Digital Ocean as our hosting service. It will run off an Ubuntu 16.04 web server equipped with 512MB of memory, a 1 core processor, and a 20GB SSD disk. The server will use Node.js as the server application, Express as the framework for running server-side scripts, and MongoDB as the database. The application will be accessed by the client through a domain name.

## Part 3: Limitations ##

The following operations are missing from the system that prevents it from being used at a real library.

* Most URLs are not guarded which means a URL can be typed and be accessed.
* Search users by multiple filters such as first and last name, phone number, etc.
* Calculating and charging fines for late returns and pick-ups for books.
* No alerts and notifications are being generated and send to the users.
* Unable to view all reserves and loans on each book.
* Deleting a user from the database 

## Part 4: Learning ##

Here are the details of our learning experience in BTR490/BTS530/BTS630.

### Functions/Business that our system supports: ### 

We learned the concepts of reserving and loaning out books. These topics came out to be more complicated than expected. We realised that multiple classes were connected in the design model to fulfill the necessary functionalities of these two use cases. Another very useful and function at a library website is searching of books. This took a lot of time and understanding to complete. It included complications like using separate use cases for each filter of the search, breaking and combining string components for highly effective search, etc.

### Technology used: ### 

We got a good hands-on experience with MEAN stack; developing for both front and back-end of the library application. The application of MEAN stack gave us an opportunity to learn about how to work on a system as a whole including managing database with functionalities.

### Experience of running and being part of project: ### 

Working on this project not only gave us amazing technical skills but also helped us build our team work and interpersonal skills. We as a whole team became better at time management, work division, analyzing work progress and keeping up with deadlines. All of us grew stronger as a software developer with both personal and strong professional skills.
