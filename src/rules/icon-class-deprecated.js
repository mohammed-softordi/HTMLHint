/**
 *  Created by maya5j on 2015-11-30 (Mohammed Ayowa) <mohammed.ayowa@scania.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'icon-class-deprecated',
    description: 'Class icon-* is deprecated. Use fa-* instead',
    init: function(parser, reporter){
        var self = this;
        parser.addListener('tagstart', function(event){
            var attrs = event.attrs;
            var attr;
            var col = event.col + event.tagName.length + 1;
            for(var i=0, l=attrs.length;i<l;i++){
                attr = attrs[i];
                if(attr.name.toLowerCase() === 'class' && (attr.value.indexOf('icon') > -1)){
                    reporter.warn('Class icon-* in [ '+attr.raw+' ] is deprecated and will be soon removed. Corporate ' +
                    'icons e.g. icon-truck can still be used. For other icons use fa fa-* instead.', event.line, col + attr.index, self, attr.raw);
                }
            }
        });
    }
});
