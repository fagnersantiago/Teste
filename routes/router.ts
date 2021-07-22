import express from "express";
import sum from "../controller/sum";
import substraction from "../controller/subtraction";
import checksIsBinary from "../middlewares";
import split from "../controller/split";
import { rest } from "../controller/rest";
import multiplication from "../controller/multipication";

const routes = express.Router();

routes.post("/sum", checksIsBinary, sum);
routes.post("/subtraction", checksIsBinary, substraction);
routes.post("/split", checksIsBinary, split);
routes.post("/rest", checksIsBinary, rest);
routes.post("/multiplication", checksIsBinary, multiplication);
routes.post("/");
export default routes;
