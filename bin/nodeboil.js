#!/usr/bin/env node

const yaml = require('js-yaml');
const fs   = require('fs');
const utils = require('../lib/helpers/utils');

console.log();

try {
    var json_config = yaml.safeLoad(fs.readFileSync(`${process.cwd()}/make.yml`, 'utf8'));

    var folders = Object.keys(json_config);
    utils.makeFolders(folders)
    .then(res => {
        if (res.success) {
            utils.generateFiles(json_config)
            .then(data => {
              if (data.success){
                console.log(data.message);
              }
            })
        }
    })
    
    .catch(err => console.log("\x1b[31m",err));
    
  } catch (e) {
    console.log(e);
}