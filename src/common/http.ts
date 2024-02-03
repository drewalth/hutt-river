type HttpMethod = "GET" | "PATCH" | "POST" | "PUT" | "DELETE"

const baseUrl = process.env.BASE_API_URL ?? "https://flowrate.co.nz"

const getConfig = () => ({
  headers: { "Content-Type": "application/json", credentials: "include" },
})

const request = (method: HttpMethod, url: string, options?: RequestInit) =>
  fetch(baseUrl + url, {
    method,
    ...getConfig(),
    ...options,
  } as RequestInit)

const http = {
  get: (url: string, options?: RequestInit) => request("GET", url, options),
  patch: (url: string, options?: RequestInit) => request("PATCH", url, options),
  post: (url: string, options?: RequestInit) => request("POST", url, options),
  put: (url: string, options?: RequestInit) => request("PUT", url, options),
  delete: (url: string, options?: RequestInit) =>
    request("DELETE", url, options),
}

export const checkResponse = (res: Response) => {
  if (!res.ok) {
    console.error(res)
    throw new Error(res.statusText)
  } else {
    return res.json()
  }
}

export default http
