interface FetchOptionsInterface {
  method: "GET" | "POST";
  headers: {
    "Content-Type": string;
  };
  body?: string;
}

export async function fetchHelper<T>(
  url: string,
  method: "GET" | "POST",
  body?: Record<string, string | number | string[]>
) {
  const fetchOptions: FetchOptionsInterface = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (method === "POST") {
    fetchOptions.body = JSON.stringify(body);
  }

  try {
    const rsp = await fetch(url, fetchOptions);
    if (!rsp.ok) {
      console.error(rsp);
      throw new Error("Something went wrong with the response");
    }

    return rsp.json() as T;
  } catch (err: unknown) {
    console.error(err);
    throw new Error("Something went wrong in fetchHelper");
  }
}
