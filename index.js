import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Country from './model/Country.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 443;


app

    .all('/', async r=>{
        // await Region('https://gosnomera24.su/poleznaya-informatsiya/340-kody-regionov-na-avtomobilnykh-nomerakh-kirgizii')
        
        let data = await Country.find({country_code:'01'})
        // data[0].region.map((i)=>{
        //     console.log(i.region_name+' '+i.region_code)
        // })
        r.res.send(data)
    })
    .use(r=>r.res.status(404).send('404 Not Found'))

async function start(){
    try {
        const url = process.env.MONGO_URI;
        await mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true});
        app.listen(PORT, ()=>{console.log(`Server is running on port ${PORT}`)});
    } catch (error) {
       console.log(error) 
    }
}
start()

