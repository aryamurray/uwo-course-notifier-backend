import { error } from "console"
import { course } from "../types.js"
import fs from "fs/promises"


export async function storeCourse(course:course[], subject:string){
    fs.writeFile(`/store/${subject}.json`,JSON.stringify(course, null, 2))
}

export async function readStore(subject:string):Promise<course[]>{
    const data = await fs.readFile(`/store/${subject}.json`, "utf-8")
    return JSON.parse(data) as course[]
}