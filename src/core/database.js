const mongoose = require("mongoose");
const logger = new (require("./logger"))("Database");
const config = require("../config");

try {
    mongoose.connect(config.mongo.uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    logger.main("Database Connected.")
    } catch(err) {
        logger.error(err);
}
