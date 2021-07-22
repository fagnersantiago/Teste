import { Response, Request, NextFunction } from "express";

function checksIsBinary(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { firstNumber, secondNumber } = request.body;
  const firstnumberIsBinary = firstNumber.toString();
  const secondNumberIsBinary = secondNumber.toString();
  //verify if is binary numbee
  if (
    firstnumberIsBinary.search(/[^0-1]/g) !== -1 ||
    secondNumberIsBinary.search(/[^0-1]/g) !== -1
  ) {
    return response.status(404).json({
      message:
        "It's only allowed binary number, please input a valid number and try again",
    });
  }
  //parsing to decimal
  const firstNumberToDecimal = parseInt(firstNumber, 2);
  const secondNumberToDecimal = parseInt(secondNumber, 2);

  if (firstNumberToDecimal || secondNumberToDecimal > 255) {
    return response
      .status(404)
      .json({ message: "number 1 or 2 to need be between 0 to 255" });
  }

  return next();
}

export default checksIsBinary;
