import express from "express";
const app = express();
const port = 4000;

app.get("/",(req,res) =>{
    res.send(("Hello,World!"))
})

app.get("/about",(req,res) =>{
    res.send(("<h1>About Me</h1><p>Hi,It's Me Amrit Sarki</p>"))
})

app.get("/contact",(req,res) =>{
    res.send(("<h1>Contact</h1><p>+977983424</p>"))
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`); // Use backticks here
});