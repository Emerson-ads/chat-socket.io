import { Request, Response } from "express";
import { GetLast3MessesServices } from "../services/GetLast3MessagesService";
import { ProfileUserService } from "../services/ProfileUserService";


class ProfileUserController {
  async handle(resquet: Request, response: Response) {
    const { user_id } = resquet;

    const service = new  ProfileUserService();
    const result = await service.execute(user_id);

    return response.json(result)
  }
}

export { ProfileUserController };
