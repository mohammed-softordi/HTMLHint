/**
 * Copyright (c) 2015, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'inline-style-disabled',
    description: 'Inline style cannot be use.',
    init: function(parser, reporter){
        var self = this;
        parser.addListener('tagstart', function(event){
            var attrs = event.attrs;
            var attr;
            var col = event.col + event.tagName.length + 1;
            for(var i=0, l=attrs.length;i<l;i++){
                attr = attrs[i];
                if(attr.name.toLowerCase() === 'style'){
                    reporter.warn('Inline style [ '+attr.raw+' ] cannot be use.', event.line, col + attr.index, self, attr.raw);
                }
            }
        });
    }
});
