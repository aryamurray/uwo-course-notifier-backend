import 'dotenv/config'
import getProxies, { changeProxy } from './proxy.js';
import * as cron from 'cron';
import { getCourses } from './scrape.js';

console.log(`[Info] Pocketbase URL is ${process.env.POCKETBASE_URL}`);

let proxyList = await getProxies();
let proxy = changeProxy(proxyList);

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

