import { Router } from "express";
import musicController from "../controllers/music-controller";
import { musicValidator } from "middleware/validators";

const musicRouter = Router();

musicRouter.get("/musics" , musicController.getMusics);
musicRouter.post("/musics", musicValidator, musicController.createMusic);

export default musicRouter;