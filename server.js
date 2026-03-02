import express from "express";

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000

app.post('/',(req,res)=>{
    const data= req.body.data

    if(!data) return;

    const sortedArray = data.split("").sort()

    res.status(200).json({
        original:data,
        sorted:sortedArray
    })
})

app.listen(3000, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});