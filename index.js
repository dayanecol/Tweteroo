import express, {json} from "express";
import cors from "cors";

const app = express();
app.use(json());
app.use(cors());
const users=[];
const tweets=[];

// const user = {
// 	username: 'bobesponja', 
// 	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
// };

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
    const body= req.body;
    users.push(body);
    res.send("OK");
});

app.listen(5000,()=>{
    console.log("Porta 5000 funcionando!")
});
