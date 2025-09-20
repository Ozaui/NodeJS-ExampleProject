import fs from "fs";

export const routeHandler = (req, res) => {
  if (req.url == "/") {
    fs.readFile("index.html", (err, html) => {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(html);
      res.end();
    });
  } else if (req.url == "/blogs") {
    fs.readFile("blogs.html", (err, html) => {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(html);
      res.end();
    });
  } else if (req.url == "/create" && req.method == "POST") {
    const data = [];

    req.on("data", (chunk) => {
      data.push(chunk);
    });

    req.on("end", () => {
      const result = Buffer.concat(data).toString();
      const parsedData = result.split("=")[1];
      console.log(parsedData);

      fs.appendFile("dosya.txt", "test", (err) => {
        if (err) {
          console.log(err.message);
        } else {
          res.statusCode = 302;
          res.setHeader("Location", "/");
          res.end();
        }
      });
    });
  } else if (req.url == "/create") {
    fs.readFile("create.html", (err, html) => {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(html);
      res.end();
    });
  } else {
    fs.readFile("404.html", (err, html) => {
      res.writeHead(404, { "content-type": "text/html" });
      res.write(html);
      res.end();
    });
  }
};
