1)Make sure you have mysql installed on your system.Go to .env file and enter your password for DB_PASSWORD

2)Create a new database called "blog_app" and create a table called "posts" inside the blog_app database then add these columns: id,title,body,createdAt to the "posts" table.Make sure id column is auto incemented,not null,unique and primary key,check the image below

<img width="325" alt="image" src="https://user-images.githubusercontent.com/40856827/194728812-d15e9ad5-f646-4394-a885-d02a06bccafc.png">


3)Run: npm start

4)You can make POST request to path: localhost:5000/posts/ like this:

{
    "title":"some joke",
    "body":"Another body"
}

5)You can make GET request to path: localhost:5000/posts/

6)You can make GET request to path: localhost:5000/posts/2

or change 2 to another id in db

**What is MVC model?**

To implement MCV we need to create 3 folders/directories, these are:<br />
**routes**: In the routes folder we simply create a route,eg a 'user' router where we define user related functions,like delete user,update user,add user.<br />
**models**:Where we define the structure of database schema. we could use no sql or sql databases and define the ORM(Object-Relational Mapping) using sequelize or mongoose(form mongo DB) in models.<br />
**controllers**: Where we manage the data by making a request to the database and retrieve the data through the controller using middlewares, remember these middlewares are imported from the routes.<br />
