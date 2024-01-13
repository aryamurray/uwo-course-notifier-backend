import axios from "axios"
import qs from "qs";
import { parse } from "node-html-parser";



let newCourses = [];
  let data = qs.stringify({
    'subject': 'CALCULUS',
    'Designation': 'Any',
    'catalognbr': '',
    'CourseTime': 'All',
    'Component': 'All',
    'LocationCode': 'King',
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
  
  const res = await axios.request(config)

//   console.log(res.data)
  
  const root = parse(res.data);
  
  const courseTitles = root.querySelectorAll('.span12 h4').map((title) => {
      return title.text
  })
  const courseDescriptions = root.querySelectorAll('.span12 p').map((desc) => {
      return desc.structuredText
  })
  
  const courseTables = root.querySelectorAll(".span12 table")

  courseTables.forEach((course) => {
    const components = course.querySelectorAll('tbody tr')
    components.map((component) =>{
        
    })
  })

  console.log(courseTables.text)





