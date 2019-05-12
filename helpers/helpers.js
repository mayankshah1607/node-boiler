const fs   = require('fs');
var exec = require('child_process').exec;
const fileGenerators = require('./fileGenerators');


module.exports = {

    //*********A helper function that generates desired folders given an array list */

    makeFolders : function(array_list){
        const supported = ['models','views','controllers','routes'];
        return new Promise((resolve, reject) => {
            array_list.map((folder, index) => {

                //********* Make the desired directory */
                if (supported.indexOf(folder) > -1){
                    if (!fs.existsSync(`./${folder}`)){
                        fs.mkdirSync(`./${folder}`);
    
                        //*********Change permissions******/
                        if (process.platform === 'linux') {
                            exec(`sudo chmod -R 777 ${folder}`, (err, stdout, stderr) => {
                                if (err) {
                                    reject({success: false, message: err});
                                } 
    
                                if (stderr) {
                                    reject ({success: false, message: stderr});
                                }
                            })
                        }
                        console.log("\x1b[32m",`MADE DIRECTORY ./${folder}`);
                    }
                    
                } else {
                    console.log("\x1b[31m",`NO SUPPORT FOR DIRECTORY ./${folder}`)
                }
            })

            //*****return promise */
            resolve({success: true, message: "Created folders successfully"});
        })
    },

    //************This helper function generates all the files */
    generateFiles: function(json_config){
        const folders = Object.keys(json_config);

        folders.map((folder, index) => {
            if (folder === 'models') {
                fileGenerators.makeModels(json_config.models);
            } 
            
            else if (folder === 'views') {
                fileGenerators.makeViews(json_config.views);
            }

            else if (folder ==='controllers') {
                fileGenerators.makeControllers(json_config.controllers);
            }

            else if (folder ==='routes') {
                fileGenerators.makeRoutes(json_config.routes);
            }
        })
    }
}