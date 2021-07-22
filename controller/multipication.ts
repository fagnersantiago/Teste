import { Request, Response } from "express";

export default function multiplication(request: Request, response: Response) {
  const { fisrtNumber, secondNumber } = request.body;
  const multiplicationBinary =
    parseInt(fisrtNumber, 2) * parseInt(secondNumber, 2);
  return response.json(multiplicationBinary);
}
