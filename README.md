## Todo List API
## Details
Todo List JS Application Programming Interface

### Requirements
* Node v14.16.0 7.0 or higher with express and mongoose enabled
* MongoDB 4.4.4 or connecting with a cloud db on Atlas [https://cloud.mongodb.com/]

## Installation

Upload script folder somewhere and run

For local development you may run:

`node index.js`

Test the script by opening the following URL:

`http://localhost:4000/`


### CRUD + List

The example todo has only a a few fields:

```code 
tasks
=======
 id
 description
 deadline
 complete
 ```

The CRUD + List operations below act on this table.

### Create

If you want to create a record the request can be written in URL format as:

`POST /tasks/`

You have to send a body containing:

```json
{
    "id": 1,
    "description": "learn java",
    "deadline": "2021-06-29T09:12:33.001Z",
    "complete": true
 }
```
And it will return the status code 200 And message " Task  Created " :

```json
{
 "status":200,
 "message":"Task  Created"
}
```