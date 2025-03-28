export const DecodingTimeExp = (token: string): Date | null => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const decodedPayload = JSON.parse(atob(base64));

    if (!decodedPayload.exp) {
      return null;
    }

    return new Date(decodedPayload.exp * 1000);
  } catch (error) {
    console.error("Erro ao decodificar o token:", error);
    return null;
  }
};
