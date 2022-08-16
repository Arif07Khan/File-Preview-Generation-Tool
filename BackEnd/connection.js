const mongoose=require('mongoose');
const filepreview='mini-project';
const url=`mongodb+srv://arifkhan:9839808024@cluster0.kfgunhn.mongodb.net/${filepreview}?retryWrites=true&w=majority`;

mongoose.connect(url).then((result) => {
    console.log("Database Connected");
}).catch((err) => {
    console.log(err);
})

module.exports=mongoose;