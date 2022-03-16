import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRoutes from "./routes/index";

dotenv.config();

const server = express();

// configurar o template engine
server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

// configurar a pasta pública
server.use(express.static(path.join(__dirname, "../public")));

// rotas
server.use(mainRoutes);

// página não encontrada
server.use((req, res) => {
	res.render("pages/404");
});

// rodar o servidor (a linha abaixo deve ser a última deste módulo)
server.listen(process.env.PORT);
