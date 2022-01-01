const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")

const connectDB = async () => {
    try{        
        const con = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useFindAndModify: false
            
        })
        console.log(`MongoDB connected : ${con.connection.host}`);
        
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

connectDB()
app.use(express.json())
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)

app.listen(8800,()=>{
    console.log("backend running")
})