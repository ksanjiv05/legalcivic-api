require("dotenv").config();
const express = require("express");
const cors = require("cors");


const app = express();
app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true, limit: "100mb" }));


app.get("/test", (req, res) => {
  console.log("i am call ");
  return res.send("hii bro").end();
});

app.use(express.static(__dirname+'/legalcivic/build'));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/legalcivic/build/index.html")
})

app.listen(3001, () => {
  console.log("server lesten on 4000");
});

app.post("/query",(req,res)=>{
    console.log("request for query ",req.body);
    sendMail({...req.body,res})
})

function sendMail({subject="",fname="",lname="",number="",email="",message="",res}){

const axios=require("axios")

axios.post("https://api.sendgrid.com/v3/mail/send",{"personalizations": [{"to": [{"email":"pradeepmr411@gmail.com"}]}],"from": {"email": "support@legalcivic.com"},
"subject":subject,"content": [{"type": "text/plain", "value":"Name "+fname+" "+lname+"    Numbe "+number+"   Email "+email +"  query "+message}]},

{headers:{
  Authorization:"Bearer "+process.env.KEY,
  "Content-Type":"application/json"
}}).then(resx=>{
  console.log("mail sended successfully",resx.data)
  return res.status(200).json({msg:"query successfully submited"})

}).catch(err=>{
  console.log("err",err)
  return res.status(501).json({msg:"query unable to submited"})

})
}

