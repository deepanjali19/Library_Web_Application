# Database Design

In this document, we present how the Book class, described in the domain_classes.md file, translates into a database design. Note that, we have included the User class also, but it was not a part of this POC. Also, this web application does not follow an Object Oriented design paradigm. Therefore, these classes contain only properties (but not methods). These properties are explained below. 

## Book
* Title - The title of the book (String) 
* ISBN - A unique ISBN number that identifies the book(Number)
* Year - The year the book was published (Number)
* Publisher - The publisher of book (String)
* Description - Description of Book (String)
* Language - Language the book is in (String)
* NoCopies - The number of copies the library has of the book (Number)
* AuthorFirstName - Author's first name (String)
* AuthorLastName - Author's last name (String)

## User
* FirstName - User's first name (String)
* LastName - User's last name (String)
* UserNumber - Unique number that identies each user (Number)
* Role - User's role in the system. Valid entries include: Administration and Student (String)
* Email - User's email (String)
* Password - User's Password (String)
* LastLogin - Last time the user logged into the system (DateField)



