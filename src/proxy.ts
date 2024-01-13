import axios, { Axios, AxiosProxyConfig } from "axios";

export default async function getProxies(): Promise<AxiosProxyConfig[]> {
  const URL =
    "https://api.proxyscrape.com/v2/?request=displayproxies&timeout=1000";
  console.log("[Info] Fetching new Proxies");
  const response = await axios.get(URL);

  if (response.status != 200) {
    throw "[Error] There was an error fetching new proxies";
  }

  let ipArray: string[] = response.data.split("\n");

  let ipObjectArray: AxiosProxyConfig[] = [];

  ipArray.forEach((string) => {
    string = string.replace(/\r/g, "");
    const [ip, port] = string.split(":");
    ipObjectArray.push({ protocol: "http", host: ip, port: Number(port) });
  });
  return ipObjectArray;
}

export async function testValidProxy(
  proxy: AxiosProxyConfig
): Promise<boolean> {
  const res = await axios.get("https://httpbin.org/get", { proxy: proxy });

  if (res.status != 200) return false;
  return true;
}

export function changeProxy(proxyList: AxiosProxyConfig[]): AxiosProxyConfig {
  return proxyList[Math.floor(Math.random() * proxyList.length)];
}
