import 'dotenv/config'
import getProxies, { changeProxy } from './proxy.js';
import * as cron from 'cron';
import { getCourses, parseCourse } from './scrape.js';
import { parse } from 'path';
import fs from 'fs';

console.log(`[Info] Pocketbase URL is ${process.env.POCKETBASE_URL}`);

let proxyList = await getProxies();
let proxy = proxyList[0]

const updateProxy = () => {
	proxy = changeProxy(proxyList);
}

const cronProxy = new cron.CronJob(
	'0 * * * *', // cronTime
	async function () {
    proxyList = await getProxies();
		console.log('[Info] Fetched a new ProxyList');
	}, // onTick
	null, // onComplete
	true, // start
	'America/Toronto' // timeZone
);

try{
	const course = await getCourses(proxy, "COMPSCI");
	const parsed = parseCourse(course)

	fs.writeFile('test.json', JSON.stringify(parsed, null, 2), (err) => {
		if (err) throw err;
		console.log('Data written to file');
	  });
	  fs.writeFile('test.html', course.data, (err) => {
		if (err) throw err;
		console.log('Data written to file');
	  });
}
catch{
	console.log("An error occured.")
}
finally{
	
}



// const newJob = new cron.CronJob(
// 	'0 * * * *', // cronTime
// 	async function () {
//     proxyList = await getProxies();
// 		console.log('[Info] Fetched a new ProxyList');
// 	}, // onTick
// 	null, // onComplete
// 	true, // start
// 	'America/Toronto' // timeZone
// );

