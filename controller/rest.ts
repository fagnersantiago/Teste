import { Request, Response } from "express";

export function rest(request: Request, response: Response) {
  const { fisrtNumber, secondNumber } = request.body;
  const restBinary = parseInt(fisrtNumber, 2) % parseInt(secondNumber, 2);
  return response.json(restBinary);
}
