const { model,Schema }=require('../connection');

const user_entity=new Schema({
    name: String,
    email: String,
    password: String,
    dateOfBirth: String,
})

module.exports=model('users',user_entity);