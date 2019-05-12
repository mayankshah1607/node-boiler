module.exports = {
    modelsContent: function(item){
        const header = `
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
        
const ${item}Schema = new Schema({}); //Write your schema here
        
const ${item} = mongoose.model('${item}', ${item}Schema); 
     
module.exports = ${item};
       `
        return header;
    }
}