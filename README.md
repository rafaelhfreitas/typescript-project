# Typescript: The Ultimate Bootcamp

This repository contains the code of the [Typescript: The Ultimate Bootcamp](https://angular-university.io/course/typescript-bootcamp) video course.

![Typescript: The Ultimate Bootcamp](https://angular-university.s3-us-west-1.amazonaws.com/course-images/typescript-bootcamp-2.jpg)

You can find the starting point of the course in the [1-start branch](https://github.com/angular-university/typescript-bootcamp/tree/1-start).

This master branch contains the *final version of the course code*, that you can use as a reference if you choose to code along.

# Installation pre-requisites

IMPORTANT: Please install Node 16 LST (Long Term Support version).

# Summary
  ## covered all features of typescript language
  ### classes
  ### fundamentals
  ### decoratos
  ### generics
  ### rest-api

# Requests for this api course created

 Use: `cd rest-api` to enter the folder with api

 Use: `npm install` to install de project

 Use: `npm run dev` to run dev enviroment
 
 Use:  `curl -X PATCH  http://localhost:9000/api/courses/76 -H "Content-Type:application/json" -d '{"title": "Typescript Bootcamp v2"}'` for update a course;
 
 
 Use: `curl -X POST  http://localhost:9000/api/courses -H "Content-Type:application/json" -d '{"url": "rafael-bootcamp",
   "title": "Rafael Bootcamp v2",
   "iconUrl": "https://angular-university.s3-us-west-1.amazonaws.com/course-images/typescript-bootcamp-2.jpg",
   "longDescription": "Learn in depth the Typescript language, build practical real-world projects",
   "category": "BEGINNER"}' `  for create a course

 Use: `curl -X DELETE http://localhost:9000/api/courses/77 -H "Content-Type:application/json"` for delete a course 
   
 Use: `curl -X POST  http://localhost:9000/api/users -H "Content-Type:application/json" -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.      eyJ1c2VySWQiOjIsImVtYWlsIjoiYWRtaW5AYW5ndWxhci11bml2ZXJzaXR5LmlvIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNzE1ODkyNjMwfQ.0WPJfNiixXFZIk6k3XkS1kCesHomKm-7XXXxvV72q64" -d '{"email": "autorizado@rafael.com", "pictureUrl":"https://avatars.githubusercontent.com/u/5454709", "password":"123", "isAdmin": false}'` for create a user, the authorization token has need be a user Admin

 Use: `curl -X POST  http://localhost:9000/api/login -H "Content-Type:application/json" -d '{"email": "test@angular-university.io", "password":"test"}'` to login with normal user


 Use: `curl -X POST  http://localhost:9000/api/login -H "Content-Type:application/json" -d '{"email": "admin@angular-university.io", "password":"admin"}'` to login with admin user

 Use: `curl -X GET  http://localhost:9000/api/courses -H "Authorization:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoidGVzdEBhbmd1bGFyLXVuaXZlcnNpdHkuaW8iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNzE1ODkxNzMzfQ.dIaaatfphFCchUknXKbHtjmFZ-0OG68-0Jxym7OQ2bc"` to get all courses
 
