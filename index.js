const http = require('http');


// Add your instrumentation key or use the APPLICATIONINSIGHTSKEY environment variable on your production machine to start collecting data.
let appInsights = require('applicationinsights');

appInsights.setup('d24736b1-fdb9-4992-9f03-10320d3f528d').setAutoCollectConsole(true, true).start();

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");
    console.log("hello world")
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);

