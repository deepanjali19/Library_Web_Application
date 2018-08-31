# Proof of Concept 

## Proof of Concept (POC) Name:  

Create, Read, Update, Delete [CRUD] in Database.	

## Functionality in this POC: 

**Create new books:**
    The administration will be able to create a new book to add into the database of our web application. This works by pressing "add book" which presents a blank form that the administration would fill in and press submit. The application will verify and make sure the information is inserted correctly, else it would present an error message. Once verified, it is inserted into the database. Users of our web application will be able to see this book as a search result, if searched.    

**Read/Search books from database:**
    The administration or users can search for books by using the search tab located on the navigation bar. The search tab has a drop down menu of different methods of searching which include isbn, author, title, year, and publisher. After choosing a method, the users or administration can type in the information and press search. The search results will be displayed.    

**Update existing books:**
      The administration can update the book details by going to the targetted book information and pressing "modify". A modification form will appear with previously inserted information which the administration can change. Once changed, the administration can either cancel or submit the modification form. If submitted, the system will make sure the information is inserted correctly and it will update the database. If not inserted correctly, a error message will appear. After being inserted correctly, the book information page will be updated and a message verifying the modifications will appear. 
      
**Delete book(s) from database:** 
    The administration will be able to delete the book by going to the targetted book information page. There will be a delete button located on the book information page for administrations. Once this button is pressed, a confirmation message will appear with the option of cancelling or deleting. If cancelled, then it would go back to the book information page, else the deleted book will be wiped from the database and it would go back to the search results. 

## Data Store: 

The required data tables for the CRUD will be created as a part of this POC. The table will be for storing book information.

## Assumptions/Exclusions: 

This POC does not manage the administrator or user mode. It is already in place as administration mode and the administration is logged in. The book reservation and loaning is not a part of this POC.

