import express, {json} from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(json());

const users=[];
const tweets=[];

app.post("/sign-up",(req,res)=>{
    const {username,avatar}= req.body;
    users.push({
        username,
        avatar
    });
    res.send("OK");
});

app.post("/tweets",(req,res)=>{
    const {username,tweet}= req.body;
    const {avatar} = users.find(user=>user.username==username);
    tweets.push({
        username, 
        avatar,
        tweet 
    });
    res.send("OK");
});

app.get("/tweets",(req,res)=>{
    if (tweets.length<=10){
        res.send([...tweets].reverse());
    }
    else{
        res.send([...tweets].reverse().splice(0,10));
    }
});

app.listen(5000,()=>{
    console.log("Porta 5000 funcionando!")
});
