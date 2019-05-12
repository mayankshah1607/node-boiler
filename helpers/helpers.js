const fs   = require('fs');
var exec = require('child_process').exec;
const fileGenerators = require('./fileGenerators');


module.exports = {

    //*********A helper function that generates desired folders given an array list */

    makeFolders : function(array_list){
        return new Promise((resolve, reject) => {
            array_list.map((folder, index) => {

                //********* Make the desired directory */
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
                }
            })

            //*****return promise */
            resolve({success: true, message: "Created folders successfully"});
        })
    },

    //************This helper function generates all the files */
    generateFiles: function(json_config){
        const models = json_config.models;
        fileGenerators.makeModels(models);

    }
}