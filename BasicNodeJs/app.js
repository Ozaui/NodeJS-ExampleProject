import http from "http";
import { routeHandler } from "./routes.js";

const server = http.createServer(
  (req, res) => {
    routeHandler(req, res);
  }
  // --------------------- İlk Hali -----------
  // console.log(req.url, req.method);
  // console.log(res.statusCode);
  // res.setHeader("Content-Type", "text/html");
  // res.statusCode = 200;
  // res.statusMessage = "OK";
  // res.write("<h1>Main Page</h1>");
  // --------------------- İkinci Hali -----------
);

server.listen(3000);

console.log("Node.JS server working at port 3000");
