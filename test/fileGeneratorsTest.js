const utils = require('../lib/helpers/utils');
const fileGenerators = require('../lib/helpers/fileGenerators');
const fs = require('fs');
const fsext = require('fs-extra')
const yaml = require('js-yaml');

describe('Testing functions in helpers/fileGenerators', function () {
    var json_config = yaml.safeLoad(fs.readFileSync('./.test.yml', 'utf8'));
    var folders = Object.keys(json_config);
    utils.makeFolders(folders);

    it('Should generate specified model files', function (done) {
        try {
            fileGenerators.makeModels(json_config.models);
            done()
        } catch (err) {
            done(err.message)
        }
    })

    it('Should generate specified controller files', function (done) {
        try {
            fileGenerators.makeControllers(json_config.controllers);
            done()
        } catch (err) {
            done(err.message)
        }
    })

    it('Should generate specified route files', function (done) {
        try {
            fileGenerators.makeRoutes(json_config.routes);
            done()
        } catch (err) {
            done(err.message)
        }
    })

    it('Should generate specified view files', function (done) {
        try {
            fileGenerators.makeViews(json_config.views);
            done()
        } catch (err) {
            done(err.message)
        }
    })

    fsext.removeSync('./models');
    fsext.removeSync('./views');
    fsext.removeSync('./routes');
    fsext.removeSync('./controllers');
})