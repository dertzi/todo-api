# Todo API
A simple Todo API created using Node.js, Express, MongoDB, Mongoose (ORM)

Available on Heroku ([ https://calm-reef-61111.herokuapp.com/ ](https://calm-reef-61111.herokuapp.com/))

## REST API

**GET**

Path | Description
---- | -----------
/todos | Get all todos
/todos/:id | Get a todo by ID

**POST**

Path | Description
---- | -----------
/todos | Add new todo `{"text": "A new todo"}`

**DELETE**

Path | Description
---- | -----------
/todos/:id | Delete a todo by ID

**PATCH**

*Not yet implemented*
