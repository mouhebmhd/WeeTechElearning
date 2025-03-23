// creating a new express app 
const express=require("express")
// configuring the dotenv file 
const dotenv=require("dotenv")
dotenv.config()
//importing applications ports 
const primaryPort=process.env.primaryPort
const secondaryPort=process.env.secondaryPort
const tertiaryPort=process.env.tertiaryPort
//creating the server 
const server =express()
// importing and using routes 
const userRoutes=require("./routes/userRoutes")
server.use("/",userRoutes);
//starting the server
const port = primaryPort || secondaryPort || tertiaryPort;
// connect to database 
const connectToDatabase=require("./database/connectDatabase")
connectToDatabase()
server.listen(port, () => {
    console.log(`Server is actually running on port ${3000}`);
});
