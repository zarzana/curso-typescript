import { Request, Response } from "express";
import musicService from "../services/music-service";
import { Music } from "protocols";

function getMusics(req: Request, res: Response) {
  const musics = musicService.getMusics();
  res.send(musics);
}

function createMusic(req: Request, res: Response) {
  const music: Music = req.body;
  musicService.createMusic(music);
  res.sendStatus(201);
}

const musicController = {
  getMusics,
  createMusic
}

export default musicController;