var express=require("express");
var exphbs=require("express-handlebars");

var PORT = process.env.PORT || 5050;

var app = express();

app.use(express.static(__dirname + "/public"));
app.use(express({extended:true}));
app.use(express.json());


app.engine("handlebars",exphbs({defaultLayout : "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgersController.js");

app.use(routes);

app.listen(PORT,function(){
console.log("Server listening on: http://localhost:" + PORT);
});
