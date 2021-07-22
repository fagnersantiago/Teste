import { Request, Response } from "express";

export default function split(request: Request, response: Response) {
  const { fisrtNumber, secondNumber } = request.body;
  const splitBinary = parseInt(fisrtNumber, 2) / parseInt(secondNumber, 2);
  return response.json(splitBinary);
}
