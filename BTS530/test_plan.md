# Test Plan

## Create New Book: 

The following tests will be conducted in order to test the create new book tool: 

| Number | Action | Output |
| :---: | --- | --- |
| 1 | A administration creates a new book properly with correctly inserted information, all required fields are filled. | The system gives a verification message saying that the book has been inserted and it is added to the database. |
| 2 | A administration creates a new book without correctly inserting the information properly, however, all the required fields have been filled. | The system highlights the incorrect information in red and does not allow the adminstration to continue. Book is not inserted into database. |
| 3 | A administration creates a new book without filling in all the required fields. | The system will not allow the book to be inserted, making the required information boxes to be highlighted red to tell the administration that they need to add that information. |

## Read/Search Books: 

The following tests will be conducted in order to test the searching book tool: 

| Number | Action | Output |
| :---: | --- | --- |
| 1 | A administration or user can search the book using different categories like: isbn, author, title, year, and publisher. Based on the category, the keyword is inserted into the search bar. | The system will go through the database based on the category and keyword and displays the search results. | 
| 2 | A administration or user searches the book using different categories. The keyword inserted does not match the category chosen. | The system will go through the database and display no search results as the keyword inserted is not based on the category chosen. Thus, no matching information. | 

## Update existing book: 

The following tests will be conducted in order to test the updating book tool: 

| Number | Action | Output |
| :---: | --- | --- |
| 1 | A administrator updates the book correctly with the right format and the required fields are filled in. | The system will update the database based on the changes and the book information page will be updated.| 
| 2 | A administrator updates the book incorrectly with an incorrect format, however, the required fields are filled in. | The system will send an error to the administration and highlight the errors in red. Database will not be updated. |
| 3 | A administrator updates the book incorrectly with an incorrect format and the required fields are incomplete. | The system will send an error to the administrator and highlight the errors and fields in red. Database will not be updated. | 

## Delete a book: 

The following tests will be conducted in order to test the delete book tool: 

| Number | Action | Output |
| :---: | --- | --- |
| 1 | A administrator goes to the targetted book and presses the delete button. | The system will update the database and get rid of the deleted book. the administrator will be redirected to the previous search results with a message of confirmation of the deleted book.| 

## Advance search a book:

The following tests will be conducted in order to test the advance search tool:

| Number | Action | Output |
| :---: | --- | --- |
| 1 | Administration or user selects advance search option. User enters filter by choosing category of search and query. User adds multiple filters using “and/or” filter option. | The system will go through the database based on the categories and keywords and displays the search results. |
| 2 | Administration or user searches the book using different categories. The keywords inserted do not match the category chosen. | The system will go through the database and display no search results as the keywords inserted are not based on the category chosen. Thus, no matching information. |
| 3 | Administration or user does not input either first category or query to search results. | The system prompts a message “no query parameter given” as first entry is required. |
| 4 | Administration or user enters in a query but does not enter any category for the query to search. | The system prompts a message “to please select category“ as it is needed for the search results. |
| 5 | Administration or user enters a category but does not enter any query to search. | The system performs the search but the entry with no query gets deleted. |
