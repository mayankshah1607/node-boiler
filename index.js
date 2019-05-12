const yaml = require('js-yaml');
const fs   = require('fs');
const helpers = require('./helpers/helpers');

try {
    var json_config = yaml.safeLoad(fs.readFileSync('./make.yml', 'utf8'));

    var folders = Object.keys(json_config);
    helpers.makeFolders(folders)
    .then(res => {
        if (res.success) {
            helpers.generateFiles(json_config);
        }
    })
    .catch(err => console.log(err));
    
  } catch (e) {
    console.log(e);
}