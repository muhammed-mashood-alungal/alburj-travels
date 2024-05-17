const mongoose = require('mongoose');

module.exports.connect = async function(){
    
        mongoose.connect('mongodb://localhost:27017/alburj-travels-db', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
            .then(() => console.log('MongoDB connected successfully'))
            .catch(err => console.error(err));
   
}