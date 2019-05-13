const contentMaker = require('../lib/helpers/contentMaker');
const assert = require('chai').assert;

describe('Testing functions in helpers/contentMaker', function(){
    it('Testing models content', function(){
        assert(contentMaker.modelsContent('hello'))
    })

    it('Testing views content', function(){
        assert.isString(contentMaker.modelsContent('hello'))
    })

    it('Testing controllers content', function(){
        assert.isString(contentMaker.modelsContent(['function1','function2']))
    })

    it('Testing routes content', function(){
        assert.isString(contentMaker.modelsContent({post: ['/r1','/r2'], get: ['/r3','/r4']}))
    })
})