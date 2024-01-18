import { error } from "console"
import { course } from "../types.js"
import fs from "fs/promises"
import path from "path"


export async function storeDepartment(courses:course[], subject:string){
    await fs.mkdir(`store`,{recursive:true})
    await fs.writeFile(`${process.cwd()}/store/${subject}.json`,JSON.stringify(courses, null, 2))
}

export async function readStore(subject:string):Promise<course[]>{
    const data = await fs.readFile(`${process.cwd()}/store/${subject}.json`, "utf-8").catch()
    return JSON.parse(data) as course[]
}

//Returns an array of updated nbrs
export async function compareCourses(department: string, newCourses: course[]): Promise<string[]> {
    try {
        const departmentStore = await readStore(department);
        let updatedNbrs: string[] = [];

        departmentStore.forEach((course) => {
            const matchingCourse = newCourses.find(newCourse => newCourse.name === course.name);
            if (matchingCourse) {
                course.components.forEach((component) => {
                    const matchingComponent = matchingCourse.components.find(newComponent => newComponent.nbr === component.nbr);
                    if (matchingComponent && matchingComponent.status !== component.status) {
                        updatedNbrs.push(matchingComponent.nbr);
                    }
                });
            }
        });

        return updatedNbrs;
    } catch (error) {
        console.error(error);
    }
}
