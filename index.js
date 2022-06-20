import express, {json} from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(json());

const users=[];
const tweets=[];



// const tweet = {
// 	username: "bobesponja",
//   tweet: "eu amo o hub",
// };

// const tweets = [
// 	{
// 		username: "bobesponja",
// 		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
// 	  tweet: "eu amo o hub"
// 	}
// ];

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
        res.send(tweets);
    }
    else{
        res.send({
            username:"Day", 
            avatar:"https://uploads.spiritfanfiction.com/historias/capas/202107/feliz-aniversario-nami-22601723-030720212110.jpg",
            tweet:"Tweet chumbado", 
        });
    }
});

app.listen(5000,()=>{
    console.log("Porta 5000 funcionando!")
});
