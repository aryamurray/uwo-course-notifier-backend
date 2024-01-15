import axios, { Axios, AxiosProxyConfig } from "axios";

export default async function getProxies(): Promise<AxiosProxyConfig[]> {
  const URL =
    "https://api.proxyscrape.com/v2/?request=displayproxies&timeout=300";
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

  console.log("[Info] Testing Proxies for Validity")
  let validProxyArray = await Promise.all(ipObjectArray.map(async (proxy) => {
    if (await testValidProxy(proxy)){
      console.log(`[Info] Found Valid Proxy ${proxy.host}:${proxy.port}`)
      return proxy
    }
    else{
      return null;
    }
  }));
  validProxyArray = validProxyArray.filter(Boolean).filter(value => value !== undefined); // remove null values
  console.log(`[Info] Found ${validProxyArray.length} valid proxies out of ${ipObjectArray.length}`)
  return validProxyArray as AxiosProxyConfig[]
}

export async function testValidProxy(
  proxy: AxiosProxyConfig
): Promise<boolean> {
  try{
    const res = await axios.get("https://httpbin.org/get", { proxy: proxy });
  }
  catch{
    return false
  }
  return true;
}

export function changeProxy(proxyList: AxiosProxyConfig[]): AxiosProxyConfig {
  return proxyList[Math.floor(Math.random() * proxyList.length)];
}
