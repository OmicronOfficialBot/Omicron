const mongoose = require("mongoose");
module.exports = function(connectionString) {
    mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser   : true,
    });
}
