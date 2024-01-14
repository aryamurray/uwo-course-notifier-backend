import axios, { AxiosProxyConfig, AxiosResponse } from "axios";
import { course, courseComponent } from "../types.js";
import qs from "qs";
import { parse } from "node-html-parser";

export async function getCourses(
  proxyConfig: AxiosProxyConfig,
  subject: string
): Promise<AxiosResponse> {
  let data = qs.stringify({
    subject: subject,
    Designation: "Any",
    catalognbr: "",
    CourseTime: "All",
    Component: "All",
    LocationCode: "King",
    command: "search",
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://studentservices.uwo.ca/secure/timetables/mastertt/ttindex.cfm",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
    proxyConfig,
  };

  console.log(
    `[Info] About to Scrape ${subject} with the proxy ${proxyConfig.host}:${proxyConfig.port}`
  );
  const res = await axios.request(config);

  if (res.status == 400) throw new Error("[Error] The Proxy is Broken")
  if (res.status == 429) throw new Error("[Error] Rate Limit Reached")
  if (res.status != 200) throw new Error("[Error] General Request Error")
  
  return res;
}

export function parseCourse(page: AxiosResponse): course[] {
  let coursesArray: course[] = [];

  const root = parse(page.data);

  const courseTitles = root.querySelectorAll(".span12 h4").map((title) => {
    return title.text;
  });
  const courseDescriptions = root.querySelectorAll(".span12 p").map((desc) => {
    return desc.structuredText;
  });

  const courseTables = root.querySelectorAll(".span12 table").map((table) => {
    return table.querySelector("tbody");
  });

  for (let i = 0; i < courseTitles.length; i++) {
    let addCourse = {
      name: courseTitles[i],
      description: courseDescriptions[i],
      components: (courseTables[i]?.querySelectorAll("tr") ?? []).map((component) => {
        const info = component.querySelectorAll("td");
        const innerComponent: courseComponent = {
          section: info[0].structuredText,
          component: info[1].structuredText,
          nbr: info[2].structuredText,
          status: info[4].structuredText,
          campus: info[5].structuredText,
          delivery: info[6].structuredText,
        };
        return innerComponent;
      }),
    };
    coursesArray.push(addCourse);
  }

  return coursesArray;
}
