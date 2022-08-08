import express, { Application,Response,Request} from 'express';
const app: Application = express();


// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.get('/',(req:Request,res:Response) =>{
try {
    return res.send('hello world');
} catch (error) {
    console.log(error)
}
});

app.listen(3000);
console.log('Listening to the server on port', 3000);