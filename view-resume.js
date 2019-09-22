var connect = require('connect');
var serveStatic = require('serve-static');

var server = connect().use(serveStatic('.')).listen(8000, function(){
    console.log('Server running on 8000...');
    console.log('View resume on http://localhost:8000');
});