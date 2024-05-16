# Typescript: The Ultimate Bootcamp

This repository contains the code of the [Typescript: The Ultimate Bootcamp](https://angular-university.io/course/typescript-bootcamp) video course.

![Typescript: The Ultimate Bootcamp](https://angular-university.s3-us-west-1.amazonaws.com/course-images/typescript-bootcamp-2.jpg)

You can find the starting point of the course in the [1-start branch](https://github.com/angular-university/typescript-bootcamp/tree/1-start).

This master branch contains the *final version of the course code*, that you can use as a reference if you choose to code along.

# Installation pre-requisites

IMPORTANT: Please install Node 16 LST (Long Term Support version).

# Request for this course 

/**
 * 
 * curl -X PATCH  http://localhost:9000/api/courses/76 -H "Content-Type:application/json" -d '{"title": "Typescript Bootcamp v2"}' 
 * curl -X POST  http://localhost:9000/api/courses -H "Content-Type:application/json" -d '{"url": "rafael-bootcamp",
 * "title": "Rafael Bootcamp v2",
 * "iconUrl": "https://angular-university.s3-us-west-1.amazonaws.com/course-images/typescript-bootcamp-2.jpg",
 * "longDescription": "Learn in depth the Typescript language, build practical real-world projects",
 * "category": "BEGINNER"}' 
 * curl -X DELETE http://localhost:9000/api/courses/77 -H "Content-Type:application/json" 
 *  
 * curl -X POST  http://localhost:9000/api/users -H "Content-Type:application/json" -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImVtYWlsIjoiYWRtaW5AYW5ndWxhci11bml2ZXJzaXR5LmlvIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNzE1ODkyNjMwfQ.0WPJfNiixXFZIk6k3XkS1kCesHomKm-7XXXxvV72q64" -d '{"email": "autorizado@rafael.com", "pictureUrl":"https://avatars.githubusercontent.com/u/5454709", "password":"123", "isAdmin": false}'
 * 
 * curl -X GET  http://localhost:9000/api/courses;
 * 
 * curl -X POST  http://localhost:9000/api/login -H "Content-Type:application/json" -d '{"email": "test@angular-university.io", "password":"test"}'
 * curl -X POST  http://localhost:9000/api/login -H "Content-Type:application/json" -d '{"email": "admin@angular-university.io", "password":"admin"}'
 * curl -X POST  http://localhost:9000/api/login -H "Content-Type:application/json" -d '{"email": "rafael@rafael.com", "password":"123"}'
 * 
 * curl -X GET  http://localhost:9000/api/courses -H "Authorization:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoidGVzdEBhbmd1bGFyLXVuaXZlcnNpdHkuaW8iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNzE1ODkxNzMzfQ.dIaaatfphFCchUknXKbHtjmFZ-0OG68-0Jxym7OQ2bc"
 */
