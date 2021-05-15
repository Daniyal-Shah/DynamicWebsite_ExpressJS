const express= require("express");
const app = express();
const path = require('path');
const hbs = require("hbs");

const port = process.env.PORT || 3000;


const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialsPath =path.join(__dirname,"../templates/partials")

//Render static website (bulitin midleware)
app.use(express.static(staticPath));

//To set the view engine
app.set('view engine','hbs');
//Set the views directory
app.set("views",templatePath);

//Register partials path to use
hbs.registerPartials(partialsPath);


app.get("/",(req,res)=>
{
res.status(200).render("index.hbs");
});


app.get("/about",(req,res)=>
{
res.status(200).render("about");
});

app.get("/api",(req,res)=>
{

});


app.get("*",(req,res)=>
{
res.status(404).render("404");
});


app.listen(port,()=>{console.log(`Running at port ${port}`); });


