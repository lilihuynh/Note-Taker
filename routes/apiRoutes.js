const fs = require("fs");

// var db = require("../db/db.json");

//Routing
module.exports = function (app) {
    //API GET request
    app.get("/api/notes", function (req, res) {
        // db.json gives a string, have to open this file
        // and convert the string into a json object that we can push new notes to db array
        fs.readFile("./db/db.json", (err, data) => {
            if (err) throw err;

            res.json(JSON.parse(data))
        });


    })
}