import axios from "axios"
import { parse } from 'node-html-parser'
import { course } from "../types"
import qs from "qs";

  

function getCourses(subject: string|null, ): course[] | null{
    const URL = "https://studentservices.uwo.ca/secure/timetables/mastertt/ttindex.cfm"

    let data = qs.stringify({
        'subject': 'HEALTSCI',
        'Designation': 'Any',
        'catalognbr': '',
        'CourseTime': 'All',
        'Component': 'All',
        'LocationCode': 'Any',
        'command': 'search' 
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://studentservices.uwo.ca/secure/timetables/mastertt/ttindex.cfm',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
      };



    axios.post(URL, )

    return null;
}

