
//*******These functions generate the content inside the files that will be generates */


module.exports = {
    modelsContent: function(item){
        const content = 

`const mongoose = require('mongoose');
const Schema = mongoose.Schema;
        
const ${item}Schema = new Schema({}); //Write your schema here
        
const ${item} = mongoose.model('${item}', ${item}Schema); 
     
module.exports = ${item};
       `
        return content;
    },

    viewsContent: function(item) {
        const content = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${item}</title>
</head>
<body>
    
</body>
</html>
`
        return content;
    },

    controllerContent : function(functions_array){
        var base_content = `module.exports = {\n`
        functions_array.map((item, index) => {
            base_content = base_content + ` ${item}: function(){},// Add function logic here\n`
        })
        base_content = base_content + '}'

        return base_content;
    },

    routesContent : function(config){
        var base_content = `const router = require('express').Router;\n\n`
        const route_types = Object.keys(config);

        route_types.map((type, index) => {
            config[type].map((route, i) => {
                base_content = base_content + 
                `router.${type}('${route}', (req, res) => {}); // Add your route logic here\n`
            })
        })
        base_content = base_content + `\nmodule.exports = router;`
        return base_content;
    }
}