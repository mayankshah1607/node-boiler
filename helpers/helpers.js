const fs   = require('fs');
var exec = require('child_process').exec;


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
                        exec(`sudo chmod -R 777 ${folder}`)
                    }
                }
            })           
            //*****return promise */
            resolve(1);
        })
    }
}