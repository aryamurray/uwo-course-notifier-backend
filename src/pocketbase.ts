import Pocketbase, { AdminAuthResponse } from "pocketbase";
import 'dotenv/config'
import { course, courseComponent } from "../types";



export async function pbCheckCourse(pb:Pocketbase,course:course) {
    const record = await pb
        .collection('courses')
        .getFirstListItem(`Name="${course.name}"`);
    if (record?.items[0]?.id == course.name) return true;
    return false;
}

export async function pbCheckComponent(pb:Pocketbase,courseComponent:courseComponent) {
    const record = await pb
        .collection('Course_Component)')
        .getFirstListItem(`nbr="1"`);
    console.log(record)
    if (record.items[0].nbr == courseComponent.nbr) return true;
    return false;
}

export async function pbAuth(pb:Pocketbase){
    const authData = await pb.admins.authWithPassword(process.env.POCKETBASE_EMAIL!, process.env.POCKETBASE_PASS!)
    console.log(authData)
    return authData;
}