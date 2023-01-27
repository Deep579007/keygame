const mongoose=require('mongoose');
const dbConnect=()=>{
    return mongoose.connect(`mongodb+srv://dapzz:Sumasoft007@cluster0.vavg9dw.mongodb.net/GAME?retryWrites=true&w=majority`)
}
module.exports=dbConnect;