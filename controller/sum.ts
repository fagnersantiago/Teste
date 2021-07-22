import { Request, Response } from "express";

export default function sum(request: Request, response: Response) {
  const { firstNumber, secondNumber } = request.body;
  const sumBinary = parseInt(firstNumber, 2) + parseInt(secondNumber, 2);

  return response.json(sumBinary);
}
