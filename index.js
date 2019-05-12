const yaml = require('js-yaml');
const fs   = require('fs');
const helpers = require('./helpers/helpers');

try {
    var json_config = yaml.safeLoad(fs.readFileSync('./make.yml', 'utf8'));
    
    var folders = Object.keys(json_config);
    helpers.makeFolders(folders)
    .then(res => console.log(res))
    
  } catch (e) {
    console.log(e);
}