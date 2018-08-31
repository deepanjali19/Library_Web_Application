# Test Case Document  # 

## Team: 19 ##

### AREA: Login ###  

| | Function | Case |	Result | 
|---|---------|------|--------|
1 |	Login	| administration, successful | Administration is given the permission to access the library system with administration capabilities. The Administration profile will be displayed. |
| | |	regular user, successful login | User is allowed access to the library system with user capabilities. The user profile will be displayed. |
| | | Incorrect information (user and/or password) administration or regular user, unsuccessful |	The administration or regular user will be given an error stating that the information for the account is inputted incorrectly. |


### AREA: Creating a user ###

| | Function | Case |	Result | 
|---|---------|------|--------|
|1|	User creation |	administration, successful	|The user will be added into the database and a display with the confirmation of user creation will be displayed. |
| | |	Inputted wrong information or incorrectly formatted information. administration, unsuccessful	| The system will display a message notifying the administration where the errors have occurred in their user input form. |


### AREA: Edit Profile ### 

| | Function | Case |	Result | 
|---|---------|------|--------|
|1| 	Editing profile information |	Inputted correctly formatted information. administration, successful | The administration can edit the phone number & email of their own information. <br><br> For clients, the administration has the ability to edit all categories of the client’s information. <br><br> For both situation, a successful validation message saying the changes have been made will be displayed. The database will be updated. 
| |	| Inputted correctly formatted information. <br><br> regular user, successful |	The clients can successfully change their email and phone number. There will be a validation message saying that the changes have been successfully made. The database will be updated. |
| |	|Inputted incorrect information or in wrong format. <br><br> administration / regular user, unsuccessful |	An error message will be displayed saying that the information inputted have not been properly inputted. |


### AREA: Add/Delete a book ###

| | Function | Case |	Result | 
|---|---------|------|--------|
|1|	Adding a book |	administration, successful |	A confirmation message will show up saying the book has been added. The book will be inserted into the database. |
| | |administration, unsuccessful 	| An error message will be displayed stating which part of the forum is incorrectly inputted. |
|2| Deleting a book |	administration, successful	| The system will ask the administration if they are sure about deleting the book. If yes, the book is deleted and removed from the database. |


### AREA: Search a book ###

| | Function | Case |	Result | 
|---|---------|------|--------|
|1|	Searching a book | searched by all, author, title, publisher, ISBN, or year <br><br> administration/user – successful |	The book(s) that match the information on provided search will be displayed|  
| | |	searched by all, author, title, publisher, ISBN, & year <br><br> administration/user – unsuccessful	| A message stating that no books match the description of the searched keyword. |

### AREA: Advanced search a book ###

| | Function | Case |	Result | 
|---|---------|------|--------|
|1|	Search a book using advanced search	| Compound the search using author, title, publisher, ISBN, &/or year. <br><br> administration/regular user – successful. | The book(s) that match information on provided search information will be displayed |
| | |	Compound the search using author, title, publisher, ISBN, &/or year. <br><br> administration/regular user – unsuccessful.	| A message stating that no books match the description of the inputted information. |


### AREA: Edit/Update book details ### 

| | Function | Case |	Result | 
|---|---------|------|--------|
|1|	Edit/Update a books detail	| administration, successful | The system will produce a confirmation message that says the book information has been updated. The database will be updated. |
| | |administration, unsuccessful	| The system will display an error message and it will display where the error occurred in the form to edit a book. |


### AREA: Reserve a book ###

| | Function | Case |	Result | 
|---|---------|------|--------|
| 1	|Reserving a book	| regular user – successful |	The system will display a message saying the book has been reserved. The book will be added to the user profile, so they can see all their reservations. |
| | |	User tries to reserve a book they have already reserved. <br><br> Regular user – unsuccessful	|The system will display an error saying that the book has already been reserved. |


### AREA: Loaning a book ### 

| | Function | Case |	Result | 
|---|---------|------|--------|
| 1| Loaning a book	| The regular user wants to loan out a book. <br><br> administration – successful |	The system will add the loaned book to the regular user’s account. A message confirming that the book has been loaned out will appear.  | 
| | |	The regular user cannot loan a book out because there are reservations on the book <br><br> Administration – unsuccessful	| The system will display an error message that says the user cannot loan out the material because there are reservations on the book. | 



### AREA: Renewing Book ### 

| | Function | Case |	Result | 
|---|---------|------|--------|
|1|	Renewing a loaned-out book | Regular User – successful |	The system extends the book due date to 7 more days from the current(today’s) date. A message confirming the book was renewed with the new due date appears.  | 
|2| |	The regular user tries to renew the book 7 or more days before the due date. <br><br> Regular user – unsuccessful |	The system displays an error message saying the book cannot be renewed at this point. |
|3| |	The regular user tries to renew the book more than 2 times. <br><br> Regular user – unsuccessful |	The system displays an error message saying the book cannot be renewed because the limit (of 2 renews) has been reached. |
|4| |	The regular user tries to renew a book that has too many reservations on it. <br><br> Regular user – unsuccessful |	The system displays an error message saying the book cannot be renewed due to too many reservations on it. |

### AREA: Returning Book ### 

| | Function | Case |	Result | 
|---|---------|------|--------|
|1|	Returning a book	| The Admin wants to check returned books back into the system. <br><br> administration – successful  | The system removes the book from user’s account and makes it available again.  |


### AREA: Updating Password ### 

| | Function | Case |	Result | 
|---|---------|------|--------|
| 1|	Forgot Password	| regular users – successful |	The system will email a 4-digit pin to the regular users account email. The 4-digit pin can be used to login and change the password. |
|2|	Change Password |	regular users – successful 	| The system will display a confirmation saying the password has been updated. Database will be updated. |




