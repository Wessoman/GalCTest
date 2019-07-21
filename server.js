var express = require("express");
var app = express();
app.use(express.static("WebApplication"));
app.listen(3003);