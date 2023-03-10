import express from "express";
import CharactersRoutes from "./routes/Characters.routes.js";
import userRoutes from "./routes/usuario.routes.js"
import salesRoutes from "./routes/sales.routes.js"
import fileupload from "express-fileupload";

const app = express();

app.use(express.json());
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "./files",
  })
);

app.use(CharactersRoutes);
app.use(userRoutes);
app.use(salesRoutes);



export default app;
