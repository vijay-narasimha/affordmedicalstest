const express=require('express')
const axios=require('axios')
const app=express()
const data=async(req,res)=>{
try{
    
    const urls=req.query.url
    for(i in urls){
        
        const values=axios.get(urls[i]).then(data=>res.json(data))
        console.log(values)
    }
}catch(err){
    console.log(err);
}
}
app.get('/numbers',data)
app.listen(8000,console.log('listening'))