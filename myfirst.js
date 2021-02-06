let http = require("http");
let url = require("url");
let dt = require("./myfirstmodule");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      "<div>The date and time are currently: " + dt.myDateTime() + "</div>"
    );
    let q = url.parse(req.url, true).query;
    let txt = q.year + " " + q.month;
    res.end(`<div>${txt}</div>`);
  })
  .listen(8080);
