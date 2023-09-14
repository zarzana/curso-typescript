import { musicSchema } from "./schemas";
import { Request, Response, NextFunction } from "express";

export function musicValidator(req: Request, res: Response, next: NextFunction) {

    const validation = musicSchema.validate(req.body);

    if (validation.error) return res.sendStatus(422);

    next();

}