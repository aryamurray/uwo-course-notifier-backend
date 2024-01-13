<!--
*** Shout out to cbaron3 @ https://github.com/cbaron3
*** for this README template. Most of this is from his repository over at https://github.com/cbaron3/uwo-tt-api
***
-->


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/aryamurray/uwo-course-notifier-backend">
    <img src="assets/uwo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">UNOFFICIAL Western Course Notifier</h3>
  <p align="center">
    Backend that scrapes courses from the <a href="https://studentservices.uwo.ca/secure/timetables/mastertt/ttindex.cfm"><strong>Western Undergraduate Timetable. </strong></a>
    <br />
    The goal of this website is to allow students to select full courses 
    <br />
    <br />
    <a href="">View Website</a>
    ·
    <a href="https://github.com/aryamurray/uwo-course-notifier-backend/issues">Report Bug</a>
    ·
    <a href="https://github.com/aryamurray/uwo-course-notifier-backend/pulls">Request Feature</a>
  </p>
</p>


<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
* [Getting Started](#about-the-project)
* [Prerequisites](#prerequisites)
* [Installation & Setup](#installation--setup)

<!-- ABOUT THE PROJECT -->
## About The Project

For current Western students, there is no possible way to be notifier when a full course develops an opening and lacks a waitlist. The current best alternative is to persistantly check student centre for an opening and hope you can enroll before someone else does. This platform seeks to remedy the stress of course enrollment by automatically checking for you and notifing you via email when a spot arises. 


<!-- GETTING STARTED -->
## Getting Started

To run a local version of the course notifier yourself, you will need to have this repository, as well as a copy of a pocketbase binary.

### Prerequisites

You'll need to ensure that you have the following downloaded:

* [pocketbase](https://github.com/pocketbase/pocketbase/releases)
* [nodejs](https://nodejs.org/en/download)

### Installation & Setup
 
1. Clone the repository
```sh
git clone https://github.com/aryamurray/uwo-course-notifier-backend
```
2. Navigate to the directory and initiate the dependancies
```
npm install
```
3. Create your .env file and set the enviroment variables
```
POCKETBASE_URL = 'URL TO YOUR SERVER RUNNING POCKETBASE'
```


