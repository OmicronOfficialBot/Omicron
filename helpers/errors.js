const client = require("../index");

// Handle Errors
process.on("unhandledRejection", error => {
	client.error("Unhandled promise rejection:\n" + error);
});
process.on("uncaughtException", error => {
	client.error("UncaughtExceptionError:\n" + error);
}
