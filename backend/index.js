import express from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";
const app = express('/',);

app.get('/',(request,response)=> {
  console.log(request)
  return response.status(234,send('welcome'))

});


app.listen(PORT,()=> {
    console.log ('App is listening to port: $( PORT }');

})
mongoose
   .connect(mongodbURL)
   .then(()=>{
    console.log('APP connected to database');
    app.listen(PORT, () =>{

    console.log('App is listenning to port:${PORT}')});


   })
   .catch((error)=>{
     console.log(error);
   });