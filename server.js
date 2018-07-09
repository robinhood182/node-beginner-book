const http = require('http');
const url = require('url');

function start(route, handle) {
    http.createServer((request, response) => {
        const pathname = url.parse(request.url).pathname;
        console.log(`Request for ${pathname} received`);

        
        response.writeHead(200, {'Content-Type': 'text/plain'});
        const content = route(handle, pathname);
        response.write(content);
        response.end();
    }).listen(8888);
    console.log('Server has started');
}

exports.start = start;