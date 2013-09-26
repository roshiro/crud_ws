crud_ws
=======

## REST API for persisting any JSON data in RethinkDB

### Install RethinkDB
http://www.rethinkdb.com/docs/install/

### Setting Up

Run the folowing command within the project folder

    $ npm install

### Start up the server
    $ node server.js

### Testing the CRUD

Creating

    $ curl -X POST -H "Content-Type: application/json" -d '{"title":"How to use cUrl", "slides": [{"1":"test"}, {"2": "Another test"}]}' http://localhost:3000/presentations

Retrieving

    $ curl -i -H "Accept: application/json" http://localhost:3000/presentations
 
Updating

    $ curl -X PUT -i -H "Accept: application/json" -d '{"title":"How to use cUrl"}' http://localhost:3000/presentations/c261810b-5e72-4cc5-8de5-31afb035079f
 
Deleting

    $ curl -X DELETE -i -H "Accept: application/json" http://localhost:3000/presentations/446a7bc3-d54c-4f1b-812f-b8daa9bc2016
