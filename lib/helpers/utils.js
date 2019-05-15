const fs = require("fs");
var exec = require("child_process").exec;
const fileGenerators = require("./fileGenerators");

module.exports = {
  //*********A helper function that generates desired folders given an array list */

  makeFolders: function(array_list) {
    const supported = ["models", "views", "controllers", "routes"];
    return new Promise((resolve, reject) => {
      array_list.map((folder, index) => {
        //********* Make the desired directory */
        if (supported.indexOf(folder) > -1) {
          if (!fs.existsSync(`./${folder}`)) {
            fs.mkdirSync(`./${folder}`);

            //*********Change permissions******/
            if (process.platform === "linux") {
              exec(`sudo chmod -R 777 ${folder}`, (err, stdout, stderr) => {
                if (err) {
                  reject({ success: false, message: err });
                }

                if (stderr) {
                  reject({ success: false, message: stderr });
                }
              });
            }
            console.log("\x1b[32m", `MADE DIRECTORY ./${folder}`);
          }
        } else {
          console.log("\x1b[31m", `NO SUPPORT FOR DIRECTORY ./${folder}`);
          reject({
            success: false,
            message: "No support for entered directory!"
          });
        }
      });

      //*****return promise */
      resolve({ success: true, message: "Created folders successfully" });
    });
  },

  //************This helper function generates all the files */
  generateFiles: function(json_config) {
    const folders = Object.keys(json_config);

    const tasks = [];

    if (folders.includes("models")) {
      tasks.push(...fileGenerators.makeModels(json_config.models));
    }
    if (folders.includes("views")) {
      tasks.push(...fileGenerators.makeViews(json_config.views));
    }
    if (folders.includes("controllers")) {
      tasks.push(...fileGenerators.makeControllers(json_config.controllers));
    }
    if (folders.includes("routes")) {
      tasks.push(...fileGenerators.makeRoutes(json_config.routes));
    }

    return Promise.all(tasks).then(_ => ({
      success: true,
      message: "*******GENERATED ALL FILES*******"
    }));
  }
};
