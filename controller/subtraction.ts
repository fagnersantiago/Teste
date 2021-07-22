import { Request, Response } from "express";

export default function subtraction(request: Request, response: Response) {
  const { fisrtNumber, secondNumber } = request.body;
  const subtractionBinary =
    parseInt(fisrtNumber, 2) - parseInt(secondNumber, 2);
  return response.json(subtractionBinary);
}
