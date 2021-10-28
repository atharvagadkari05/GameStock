const mongoose = require('mongoose')

const schema = new mongoose.Schema({ 
    post: { type: String, required: true}
 },
 { collection: 'postDB' }
 );


 const model = mongoose.model('schema', schema)
 module.exports=model;