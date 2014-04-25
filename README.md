CRUD WS
=======

## REST API for persisting any JSON data in RethinkDB

More details [here](http://www.frontendjournal.com/crud-webservice-for-your-json-data-in-node-js-and-rethinkdb/)

### Setting Up
Run the folowing command within the project folder.
This will download the dependencies for the project.

    $ npm install

### Start up the server
Open a terminal and start rethinkdb service

    $ rethinkdb

In another terminal, start the crud_ws server

    $ node server.js

### Testing the CRUD

Creating

    $ curl -X POST -H "Content-Type: application/json" -d '{"title":"Hey, I'm using crud_ws", "slides": [{"1":"test"}, {"2": "Another test"}]}' http://localhost:3000/cruds

Retrieving

    $ curl -i -H "Accept: application/json" http://localhost:3000/cruds
 
Updating

    $ curl X PUT -i -H "Accept: application/json" -d 'title'='This is the updated title' http://localhost:3000/cruds/23cd6e44-d2b4-47d0-ba87-b788c496c82c
 
Deleting

    $ curl -X DELETE -i -H "Accept: application/json" http://localhost:3000/cruds/446a7bc3-d54c-4f1b-812f-b8daa9bc2016
