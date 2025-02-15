type ErrorObject = {
  _errors?: string[];
  [key: string]: string[] | ErrorObject | undefined;
};

export const formatErrorMessage = (error: ErrorObject): string => {
  if (!error || typeof error !== "object") {
    return "Erro inválido";
  }

  const messages: string[] = [];

  for (const key in error) {
    if (
      key === "_errors" &&
      Array.isArray(error[key]) &&
      error[key]!.length > 0
    ) {
      messages.push(...error[key]!);
    } else if (
      typeof error[key] === "object" &&
      error[key] !== null &&
      !Array.isArray(error[key]) &&
      "_errors" in error[key]!
    ) {
      messages.push(
        `${key}: ${(error[key] as ErrorObject)._errors!.join(", ")}`
      );
    }
  }

  return messages.join("; ");
};
