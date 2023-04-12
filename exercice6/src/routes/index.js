import express  from 'express';
import { router as users } from './users.js';
import mongoSanitize from 'express-mongo-sanitize';
import pug from 'pug'

const app = express();

app.engine('pug', pug.__express)
app.set("views",process.cwd()+"/src/views");
app.set("view engine","pug");

app.use(mongoSanitize())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/',(req,res) => {
    res.render('index');
})


app.use(users)

export {app};


