# Group_19

Group Members: 
* Zufishan Ali
* Daniel Camara
* Deepanjali Gerangal
* Pavan Kamra

## Project Overview 

### Client Information

For this project, our group has decided to act as our own client. 

We are all full time students at Seneca College enrolled in the BSD program working towards an Honours Bachelor of Technology in Software Development degree. 

Over the course of our two to three years at Seneca we have learned a variety of languages and frameworks including: C, C++, Java, HTML/CSS/JavaScript/JQuery/PHP, ASP.NET, and SQL. Along with these languages we have taken courses that teach us the fundamentals of software development such as class design and user use case modeling. 


There is no specific client per say but the end user of this application will be libraries and their patrons. Librarians will maintain (catalogue and update inventories) and administer (maintain user accounts and settings/policies) the application while their patrons will use the services that the application provides

### Business Statement

As full time students at Seneca college, we frequently use Seneca’s library website. The website is very tedious to use and doesn’t allow students to search books effortlessly. If we search a title, it shows books, articles, essays, etc. all together rather then putting them in separate categories, making it hard to understand and open the correct link. On the other hand, it is tough for library staff to look for details of current users and available books. There are many unnecessary steps required by the users to reserve or get a book for loan.

To improve the library website, we are developing a web application which helps various libraries to have an easy-to-maintain website. The library web application focuses on the needs of administrator as well as users. It consists of databases to store information of books and users. It will focus on searching books based on subject, title and author. Other functionalities will include loaning and reserving books; checking user status, etc. The purpose of this web application is to build a quick and efficient library website.

### Key System Requirements

### General Requirements

•	Our web application is available nationally and users are able to access this web application 24 hours a day, 7 days a week.  

•	It must be accessible on different technological devices like computer, smart phones, or tablets and modern browsers like Google Chrome, Firefox, etc. 

•	The system starts with a flash screen that allows the user to log in with the two categories of users: administration and user. It has a continue button for users who do not log in which means the user can only perform searches. 

•	Users with administration credentials can perform searches, process payments, make reservation, check out books for users, return books, cataloguing books, classifying library resources into the system, adjusting the library material – add and delete, etc.

•	Users with user credentials can perform searches, check out material from the library, renew checked out material, put books on hold, etc. 

### Security Requirements

•	For the flash page, when administration portal is clicked, the only way this page is opened is when the WIFI for the computer being used is in the location where the web application is being monitored from. For example, if a library decides to use our system, the administration portal will only work when the administration user logs in at the library using the library WIFI. The reason is for this is because we do not want people with authorization to have access to the system from home. This is confidential and is only required to be accessed at a workplace setting. This system requirement would depend on what the users of our system preference is. It will have the ability to choose whether they want this security or not. 

•	Failed login authentication should activate a lock-out after a reasonable number of attempts. This lock-out to last for a time period (example: couple of hours). 

•	Authentication attempts should be logged which includes log in, log outs, failed logins, and password change requests. 

•	For registering for an account, the login requirements should include a strong username and password. They should have requirements that need to be met for it to be saved into the database. (Example: minimum amount of letters, upper case letters, numbers, etc.). Overall, this is pretty much has to do with input validation and the best way to start this process is from the client side. Client side validation can include: Constraint input, validate data, etc. 

•	Users information should be stored in a safely manner which includes storing the password in a hashed format. 

•	Authorization should be specific to the type of user that is accessing the data available to them by the web application. General web users would have the least privileges to the data as we don’t want anyone accessing confidential information. However, administrations and users with power would have more accessibility on what they can access with the users confidentiality kept in mind. This would require user roles and handling sensitive information concepts.

•	Queries made by regular users (people who use site to search for books) should be sanitized to prevent SQL injections to the database. Use of  prepared statements or the equivalent would provide a solution to such problem

### Logical Requirements

*	Prevent users without authentication from: 
	*	loaning out books or reserving them
	*	viewing any user information such as status, books due, and any personal information
*	System should prevent:
	*	User info and book detail being saved multiple times
	*	Loaning out books that are already loaned 
	*	Reserving books that are lost or stolen
	*	Users from taking out items if there are any unpaid fines of over a predefined limit   
*	Certain views and tasks must only be available to the type of user that is accessing it (for example, administrators have their own views and students have their own, and catalog management should only be made by successfully logged in administrators) 


### Communication Requirements

*	System should provide users with on site notifications for:
	*	Providing wrong credentials and let user know that a wrong username/password was entered 
	*	Errors in reservations, queries, or any other problem the site is experiencing 
	*	User role of limited permission trying to access information that is not permitted for them
*	System should provide an email summary, with due dates of any reservations or loaned books made to the user
*	If a book is already loaned out then system should respond with details of next availability and book reservation 
*	System should email the user a reminder of book due date when they are approaching 
*	System should provide daily reports of overdue books to administrator 
*	In case the administrator portal is clicked outside of the workplace environment, an error will occur notifying the user that they entered through the wrong portal, and the error will be logged/recorded into the database for the user that tried to access the web application 

## Technical Overview

This library web application will assist many libraries with their everyday job of reserving and loaning out books, administering the services, checking user status, etc. This project requires a front-end for users, as well as, libraries to be able to interact with the system and use its functionalities. It requires a back-end to perform actions, process data, communicate with the database and run the web application smoothly. As mentioned, it also needs a database in order to store various details of books, users, etc. The application requires API to read barcodes and we will use QuaggaJS for that. 
The details about front-end, back-end, database, API and hosting are as described below:

### Front-end

For front end development, this library web application will be using *Bootstrap 4*, which is a popular framework for HTML, CSS, and JavaScript. This framework would help us to build a responsive library application that can be easily used on phones, tablets, and computers as this is a necessity for most student users. Components such as labels, button groups, dropdowns, tabs, panels etc. would help make the site more efficient to use. 

We will also be implementing *AngularJS* instead of using the jQuery library in this web application. The reason for this is that AngularJS allows us to extend the HTML syntax and express components more clearly. Using features, such as directives, lets us invent new HTML syntax specific to our application. 

### Back-end

The web application will use Node.js and Express for the back-end development. They are components of MEAN stack which helps in building a fast and robust web app. 
* Node.js is a server side JavaScript environment. It is built on Chrome’s V8 JavaScript engine which uses an event-driven, non-blocking I/O model that makes it lightweight, quick and effective. Node.js will help us built highly scalable and concurrent application as required by our project.
* Express is a web application framework used for Node.js which provides several sturdy features for building multiple page web application. It provides a thin layer of fundamental web application features, without obscuring Node.js features.
* In regards to the project, Node.js and Express will be used to code the functionalities of the library application. It will be used to program the user details, loaning and renting of books, scanning the barcode information, searching books and administration of the website.
 
### Database

Being part of the MEAN stack, MongoDB will be used as the database. Some of the benefits of using this database system are:

* Key component of the MEAN stack so it was designed to work well with the JavaScript based technologies
* Data is stored in the form of BSON, which is a JSON style of storage, making it easy to manipulate and read
* No schema allows for easy record scaling (adding and removing columns)

Mongoosejs will be a module used in Node.js to act as a data modeling tool and body-parser middleware will be used to extract data from forms to put into the database.

### Hosting

This application will use Digital Ocean as our hosting service. It will run off an Ubuntu 16.04 web server equipped with 512MB of memory, a 1 core processor, and a 20GB SSD disk.  The server will use Node.js as the server application, Express as the framework for running server-side scripts, and MongoDB as the database. The application will be accessed by the client through an IP rather than a domain name to save on cost but can be transferred to a registered domain later down the road if so chosen to.

Ease of use along with the cost effectiveness of using Digital Ocean cloud hosting services were the main reasons for choosing them over the likes of GoDaddy and Heroku. Also, the number of tutorials on the company’s website and YouTube make the setup and configuration of virtual machines easy and provide us with easily accessible reference material.  

### API

The application program interface (API) we will be using is QuaggaJS, it is a barcode-scanner entirely written in JavaScript supporting immediate localization and decoding 
of various types of barcodes such as EAN, CODE 128, CODE 39, EAN 8, UPC – A, UPC – C, 12of5, 2of5, CODE93 and CODEABAR. QuaggaJS has the capabilities of finding a barcode-like pattern and is invariant to scale and rotation, whereas many other libraries require the barcode to be aligned with the viewport. QuaggaJS serves as an extension to the zxing 
library for barcode image processing. QuaggaJS has two modes under which it operates: 

1.	Analyzing static images 
2.	Using a camera to decode the image from a live-stream

## System Components

### User Account Management

Used to create, update, and delete user accounts.  Both patrons and librarians have access to this feature but librarians have extended features which allow them to put holds on patrons’ accounts and remove late fees from them as well.

### Search Tool

Used by librarians and patrons to search the library’s catalogue. This component includes various search functions based on title, author, ISBN and genre.

### Reservation Tool

Used to allow library patrons the ability to reserve books online. The library patrons can check when these books are available
so they can reserve it and they can see which books they have reserved. It will show information about how many people have 
reserved it, what number they are in line for the reservation, etc.   

### Inventory Management

Used to add, update, and remove books from the library’s catalogue. Only librarians or administrators are allowed access to this component.

## Use Cases

### A Book Being Added to the Database

**Pre-requisites:** User has admin privileges and is online and logged in to the system. <br />
**Actor:** Librarian. <br />
**Use Case Successful Post-conditions:** The book is added to the library’s inventory. <br />

1.	User selects "add material" from the on screen options.
2.	The system displays a form for the user to enter the books details. Including required details (i.e.  author, title, ISBN, quantity, and barcode) and optional details (i.e. notes, year, publisher, etc.).
3.	The user enters all the required fields and any of the optional fields they may wish to add and then proceeds to click on the add button located inside the window.
	*	The user can cancel this operation by clicking the cancel button located inside the window.
4.	The system checks to see that all required fields have been entered and that a valid length ISBN number and barcode have been submitted for which the book is added to the database.
	*	The book is not added to the database.
	*	The system sends an error message displayed to the user letting them know which fields need to be corrected or added.
	*	The user corrects the errors or cancels the operation by clicking the cancel button on the bottom of the window.
5.	After the book is added to the database the form is cleared (allowing for addition of another book) and a message displaying successful addition of book to inventory is displayed.

### A Student Loaning a Book Out

**Pre-requisites:** User has admin privileges, is online and logged into the system. <br />	
**Actor:** Librarian. <br />	
**Use Case Successful Post-conditions:** The book is loaned out to the student. <br />		

1. The student brings the selected book to the librarian to loan.
2. The librarian selects the loaning option from the web application and scans the barcode of the book.
3. The system shows details of the book and asks for student information.
4. The student provides his/her information (name, student number, etc.) for record of loan.
	*	The student information may be wrong and system may ask for correct information again.
5. The librarian saves the information into the system and the book is loaned.
6. The system provides details about the loan such as return date, late fee charges, etc.

### A Student Performing a Search

**Pre-requisite:** Student is online and logged in the system. Student has an item to search for in the library database. <br />		
**Actor:** Student. <br />		
**Use Case Successful Post-Condition:** Search results are displayed on the page. <br /> 	

1. 	The user clicks the search field/textbox.
2.	The user selects a search type from a list of “Search by” options (title, author, genre, ISBN) displayed on the search page and enters search keyword into the search field. User presses “Enter”.
	*	By default, the search type is set to “Any Field”
3.	The system displays all the results matching the search field by search type. 
	*	If the item doesn’t exist in the database, the system displays “No results found”
4.	The student selects a result
5.	The system displays all the item details to the user (ex. title, author, genre, publisher, availability etc.)
	*	Student has the option to select cancel and continue viewing search results 	

### A user makes a book reservation

**Pre-requisites:** The student is already on the page of the book they want to reserve. The page shows the book details. <br />	
**Actor:** User. <br />
**Use Case Successful Post-conditions:** A book is put on reserve. <br />
 
1. The user chooses the book that the user wants to reserve.
2. The user clicks on the “Place on hold” button that is located on the book result. 
3. The system will display a confirmation message that will show the item details and 
   the place number the user is on the reservation list. This place number represents the 
   amount of people that have reserved this book. It is first come first serve, thus, if 
   there are previous reservations on this book, the book will go to the users in the order 
   of the place number.    

