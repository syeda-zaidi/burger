var connection = require("./connection.js");

// selectAll()
// insertOne()
// updateOne()

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??";

        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;

            cb(result);
        });
    },

    // insertOne: function(tableInput, colToSearch, valOfCol, )
}

module.exports = orm;