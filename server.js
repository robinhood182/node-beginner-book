const http = require('http');
const url = require('url');

function start(route, handle) {
    http.createServer((request, response) => {
        let postData = '';
        const pathname = url.parse(request.url).pathname;
        console.log(`Request for ${pathname} received`);

        request.setEncoding('utf8');

        request.addListener('data', postDataChunk => {
            postData += postDataChunk;
            console.log(`Received POST data chunk '${postDataChunk}'.`);
        });

        request.addListener('end', () => {
            route(handle, pathname, response, postData);
        });
  
    }).listen(8888);

    console.log('Server has started');
}

exports.start = start;