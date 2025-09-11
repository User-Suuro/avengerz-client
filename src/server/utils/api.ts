export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

async function handleError(res: Response) {
  let errMsg = `API error: ${res.status}`;
  try {
    const errData = await res.json();
    errMsg = errData.error || errMsg;
  } catch {
    // ignore JSON parsing errors
  }
  throw new Error(errMsg);
}

export async function request<T>(
  url: string,
  method: HttpMethod,
  body?: unknown
): Promise<T> {
  const options: RequestInit = {
    method,
    headers: { "Content-Type": "application/json" },
    ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
  };

  const res = await fetch(url, options);
  if (!res.ok) await handleError(res);

  return res.json() as Promise<T>;
}
