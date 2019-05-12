const utils = require('../helpers/utils');
const fs   = require('fs');
const fsext = require('fs-extra')
const yaml = require('js-yaml');

describe('Testing functions in helpers/utils', function(){
    var json_config = yaml.safeLoad(fs.readFileSync('./make.yml', 'utf8'));
    var folders = Object.keys(json_config);


    it('Should make folders', function(done){
        utils.makeFolders(folders)
        .then(res => {if (res.success){
            done();
            }
        })
        .catch(err => done(err));
    })

    it('Must generate desired files', function(done){
        utils.generateFiles(json_config)
        .then(res => {
            if (res.success){
                done()
            }
            else {
                done(res.message);
            }
        })
        .catch(err => {
            done(err.message);
        })
        fsext.removeSync('./models');
        fsext.removeSync('./views');
        fsext.removeSync('./routes');
        fsext.removeSync('./controllers');
    })

})