import Pocketbase from "pocketbase";
import 'dotenv/config'
import { course } from "../types";


const pb = new Pocketbase(process.env.POCKETBASE_URL)



export async function pbCheckCourse(course:course) {
    const record = await pb
        .collection<course>('courses')
        .getFirstListItem(`Name="${course.name}"`);

    


    return record
}