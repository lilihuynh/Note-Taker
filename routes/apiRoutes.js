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

    //POST
    app.post("/api/notes", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        var newNote = req.body;
        fs.readFile("./db/db.json", (err, data) => {
            if (err) throw err;
            const dbArray = JSON.parse(data);
            dbArray.push(newNote);
            let idNumber = 0;
            dbArray.forEach((note, id) => {
                note.id = idNumber;
                idNumber++;
                return dbArray;

            })
            //convert object array back to string and post it to db.js
            stringData = JSON.stringify(dbArray);
            fs.readFile("./db/db.json", (err, data) => {
                if (err) throw err;
                fs.writeFile("./db/db.json", stringData, (err, data) => {
                    if (err) throw err;

                })
                return res.json(JSON.parse(data));
            })
        });



    })
}