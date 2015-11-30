/**
 * Created by maya5j on 2015-11-30 (Mohammed Ayowa) <mohammed.ayowa@scania.com>
 * MIT Licensed
 */

var expect  = require("expect.js");

var HTMLHint  = require("../../index").HTMLHint;

var ruldId = 'icon-class-deprecated',
    ruleOptions = {};

ruleOptions[ruldId] = true;

describe('Rules: '+ruldId, function(){

    it('class icon should result in an error', function(){
        var code = '<body><div class="icon-danger"></div></body>';
        var messages = HTMLHint.verify(code, ruleOptions);
		
        expect(messages.length).to.be(1);
        expect(messages[0].rule.id).to.be(ruldId);
        expect(messages[0].line).to.be(1);
        expect(messages[0].col).to.be(11);
        expect(messages[0].type).to.be('warning');
    });

});
