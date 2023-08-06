const mongoose = require("mongoose");

module.exports = function(client, config) {
    try {
    mongoose.connect(config.mongo.uri, {
        useUnifiedTopology: true,
        useNewUrlParser   : true,
    });
    } catch(err) {
        client.logger.error(err);
    }
}
