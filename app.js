import express from "express";

const app = express();

app.set("port", 8080);

app.get("/", (req, res, next) => {
    res.send("connect");
});

app.listen(app.get("port"), () => {
    console.log(app.get("port") + "연결 성공");
});
