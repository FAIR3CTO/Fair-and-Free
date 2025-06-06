export const baseUrl = process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_DEV_URL : process.env.NEXT_PUBLIC_BASE_URL;

export const fetcher = async (url: string, params?: Record<string, string>) => {
  const fullUrl = new URL(url, baseUrl)

  if (params) {
    Object.keys(params).forEach(key => fullUrl.searchParams.append(key, params[key]));
  }

  const res = await fetch(fullUrl);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return await res.json();
};