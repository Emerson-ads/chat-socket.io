import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";
import { CreateMessageService } from "../services/CreateMessageService";


class CreateMessageController {
  async handle(resquet: Request, response: Response) {
    const { message } = resquet.body;
    const { user_id } = resquet;

    const service = new CreateMessageService();
    const result = await service.execute(message, user_id);

    return response.json(result);
  }
}

export { CreateMessageController };
