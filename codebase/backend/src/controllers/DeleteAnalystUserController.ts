import { Request, Response, NextFunction } from "express";
import { UsuarioService } from "../services/UsuarioService.js";
import { ApiErrors } from "../errors/apiErrors.js";

class DeleteAnalystUserController {
  static async handler(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
		const usuarioService = new UsuarioService();

    const { id } = request.params;

    try {
      const user = await usuarioService.findUsuarioById(id);

      if (!user) {
        throw new ApiErrors(400, "invalid id");
      }

      if (user.role === "ADMIN")
        throw new ApiErrors(401, "not allowed to delete an amdin user");

      await usuarioService.deleteUsuario(id);

      return response
        .status(200)
        .json({ message: "analyst user successfully deleted" });
    } catch (err) {
      next(err);
    }
  }
}

export { DeleteAnalystUserController };

