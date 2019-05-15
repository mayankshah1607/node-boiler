const fs = require("fs");
const contetMaker = require("./contentMaker");

const util = require("util");

const fsWritePromisified = util.promisify(fs.writeFile);

const errorHandler = err => console.log("\x1b[31m", err);
const successHandler = fileName => () =>
  console.log("\x1b[32m", `Generated file ${fileName}`);

module.exports = {
  //********This function generates all the files for declaring Mongoose Models */
  makeModels: function(models) {
    return models.map(item =>
      fsWritePromisified(`./models/${item}.js`, contetMaker.modelsContent(item))
        .then(successHandler(`${item}.js`))
        .catch(errorHandler)
    );
  },

  //*********This function generates html views********/
  makeViews: function(views) {
    return views.map(item =>
      fsWritePromisified(`./views/${item}.html`, contetMaker.viewsContent(item))
        .then(successHandler(`${item}.html`))
        .catch(errorHandler)
    );
  },

  //**********This function generates the code for declaring controllers */
  makeControllers: function(controllers) {
    return Object.entries(controllers).map(([fileName, methods]) =>
      fsWritePromisified(
        `./controllers/${fileName}.js`,
        contetMaker.controllerContent(methods)
      )
        .then(successHandler(`${fileName}.js`))
        .catch(errorHandler)
    );
  },

  //**********This function writes the basic route declaration**********/

  makeRoutes: function(routes) {
    return Object.entries(routes).map(([fileName, methods]) =>
      fsWritePromisified(
        `./routes/${fileName}.js`,
        contetMaker.routesContent(methods)
      )
        .then(successHandler(`${fileName}.js`))
        .catch(errorHandler)
    );
  }
};
