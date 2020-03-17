import * as express from "express";
import * as path from "path";
import * as serveStatic from "serveStatic";

const app = express();
app.use(serveStatic(path.join(__dirname, "dist")));

const port = process.env.PORT || 5000;
app.listen(port);
console.log("server started " + port);
