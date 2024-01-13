import Pocketbase from "pocketbase";
import 'dotenv/config'

console.log(POCKET)

const pb = new Pocketbase(process.env.POCKETBASE_URL)