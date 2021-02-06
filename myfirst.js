let http = require("http");
let dt = require("./myfirstmodule");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      "<div>The date and time are currently: " + dt.myDateTime() + "</div>"
    );
    res.write(req.url + "\n");
    res.end("Hello World!");
  })
  .listen(8080);
