import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";
import { CreateMessageService } from "../services/CreateMessageService";
import { GetLast3MessesServices } from "../services/GetLast3MessagesService";


class GetLast3MassagesController {
  async handle(resquet: Request, response: Response) {
    const serive = new GetLast3MessesServices();
    const result = await serive.execute();

    return response.json(result);
  }
}

export { GetLast3MassagesController };
