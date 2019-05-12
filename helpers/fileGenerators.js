const fs   = require('fs');
const contetMaker = require('./contentMaker');

module.exports = {
    makeModels: function(model_list){
        
        model_list.map((item, index) => {
            const content = contetMaker.modelsContent(item);
            fs.writeFile(`./models/${item}.js`, content, (err) => {
                if (err) {
                    console.log(err);
                }
            })
        })
    }
}