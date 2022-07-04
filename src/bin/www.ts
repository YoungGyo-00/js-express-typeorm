import app from "../app";
import { createConnection } from "typeorm";

createConnection()
    .then(() => {
        console.log("DB Connection");
    })
    .catch(err => {
        console.error(err);
    });

app.listen(app.get("port"), () => {
    console.log(app.get("port") + "연결 성공");
});
