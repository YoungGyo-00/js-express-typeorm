import express, { Request, Response, NextFunction } from "express";

const app = express();

app.set("port", 8080);

app.get("/", (req, res: Response, next: NextFunction) => {
    res.send("connect");
});

app.listen(app.get("port"), () => {
    console.log(app.get("port") + "연결 성공");
});
