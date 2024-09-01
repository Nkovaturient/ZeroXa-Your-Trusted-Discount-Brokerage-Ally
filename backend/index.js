require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors')
const { holdingModel } = require('./model/HoldingsModel');
const { positionModel } = require('./model/PositionsModel');
const bodyParser = require('body-parser');
const cookieParser=require("cookie-parser");
const userRouter=require("./routes/userRoutes.js");
const dashboardRouter=require("./routes/dashboardRoutes.js");
const { authUser } = require('./middlewares/authMiddleware.js');

const PORT=process.env.PORT || 7000;
const DB_URL=process.env.DB_URL;

const app=express();
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174", "https://zeroxa-your-trusted-discount-brokerage.onrender.com", "https://zeroxa.onrender.com" ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use(bodyParser.json());
app.use(cookieParser()); //manages cookies based sessions+extract data from cookies

app.use("/user", userRouter);
app.use('/api', dashboardRouter)

// app.get("/load", async(req,res)=>{
//     const temppositions=[
//         {
//           product: "CNC",
//           name: "EVEREADY",
//           qty: 2,
//           avg: 316.27,
//           price: 312.35,
//           net: "+0.58%",
//           day: "-1.24%",
//           isLoss: true,
//         },
//         {
//           product: "CNC",
//           name: "JUBLFOOD",
//           qty: 1,
//           avg: 3124.75,
//           price: 3082.65,
//           net: "+10.04%",
//           day: "-1.35%",
//           isLoss: true,
//         },
//       ];

//       try{
//         temppositions.forEach(async(item)=>{
//             const newpositions= await new positionModel({
//                 product: item.product,
//                 name: item.name,
//                 qty: item.qty,
//                 avg: item.avg,
//                 price: item.price,
//                 net: item.net,
//                 day: item.day,
//                 isLoss: item.isLoss,
//             });
//              newpositions.save();
//           })
//     res.send("done positions!!");

//       }catch(err){
//         console.log(`${err.message}`);
//       }
// });


app.get('/home', (req,res)=>{
    res.send("Zerodha Xerox ZeroXa-iykyk!");
})

app.listen(PORT, ()=>{
    console.log(`Listening on Port= ${PORT}`);
    mongoose.connect(DB_URL);
    console.log(`Pinged to DB, Connected successfully!`);
});

