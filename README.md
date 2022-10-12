# backend - micron

Steps to run this project:

1. Run `docker-compose up`
2. Run `yarn` command
3. Run `yarn dev` command for running the application
4. Run `yarn test` command for tests

There is a postman collections available in the folder docs in this application.

ROUTES:

CREATE USER

POST localhost:3000/users/new </br>
Body: </br>
{
"firstName": "Ronaldo",
"lastName": "Nazario",
"email": "email@ronaldo.com",
"password": "12345678"

}
Response 201</br>

GET USER BY ID </br>
GET localhost:3000/users/92448a6a-8f4b-488f-bb59-619bdd58d804 </br>

Response: </br>
{
"id": "92448a6a-8f4b-488f-bb59-619bdd58d804",
"firstName": "Thiago",
"lastName": "Passos",
"email": "thiago@email.com"
}</br>

GET ALL USERS </br>
GET localhost:3000/users/ </br>

Response: </br>
[</br>
{</br>
"id": "da7679bc-2f8e-409e-9907-e5ee20f953c1",</br>
"firstName": "Ronaldo",</br>
"lastName": "Nazario",</br>
"email": "email@ronaldo.com"</br>
},</br>
{</br>
"id": "92448a6a-8f4b-488f-bb59-619bdd58d804",</br>
"firstName": "Thiago",</br>
"lastName": "Passos",</br>
"email": "thiago@email.com"</br>
}</br>
]</br>

UPDATE USER</br>
PUT localhost:3000/users/92448a6a-8f4b-488f-bb59-619bdd58d804</br>
Body:</br>
{</br>
"firstName": "Thiago",</br>
"lastName": "Passos",</br>
"email": "thiago@email.com",</br>
"password": "12345678"</br>

}</br>

Response:</br>
{</br>
"id": string</br>
"firstName": "Thiago",</br>
"lastName": "Passos",</br>
"email": "thiago@email.com",</br>
"password": "12345678"</br>

}</br>
</br>
LOGIN</br>
POST localhost:3000/sessions</br>

Body: {</br>
"email": "thiago@email.com",</br>
"password":"12345678"</br>
}</br>

Response:</br>
{</br>
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjU2MDIzNjYsImV4cCI6MTY2NTYwMzI2Niwic3ViIjoiOTI0NDhhNmEtOGY0Yi00ODhmLWJiNTktNjE5YmRkNThkODA0In0.Ao40wUOcI_Ydh1tW7Cpdmh41MLFsRywJRrQJ-Ti8qZ0",</br>
"user": {</br>
"name": "Thiago",</br>
"email": "thiago@email.com"</br>
},</br>
"refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRoaWFnb0BlbWFpbC5jb20iLCJpYXQiOjE2NjU2MDIzNjYsImV4cCI6MTY2ODE5NDM2Niwic3ViIjoiOTI0NDhhNmEtOGY0Yi00ODhmLWJiNTktNjE5YmRkNThkODA0In0.iYuFm24aaAGKFxhxkLKKPMrKmVu9ZW_MguOKqJEtPT8"
}</br>

REFRESH TOKEN</br>
POST localhost:3000/refresh-token</br>

Body: {</br>
"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRoaWFnb0BnbWFpbC5jb20iLCJpYXQiOjE2NjUzOTExNjIsImV4cCI6MTY2Nzk4MzE2Miwic3ViIjoiOTI0NDhhNmEtOGY0Yi00ODhmLWJiNTktNjE5YmRkNThkODA0In0.aZowOPUBzDdQFq9CsTlQkhe45lEtMbVGAr5i7nkNSj8"
}</br>

Response:</br>
{</br>
"refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRoaWFnb0BlbWFpbC5jb20iLCJpYXQiOjE2NjU2MDMwNzYsImV4cCI6MTY2ODE5NTA3Niwic3ViIjoiOTI0NDhhNmEtOGY0Yi00ODhmLWJiNTktNjE5YmRkNThkODA0In0.JSsohK85u9JrIGttgyUpjwpUzjBjMXHwWW2h8PA5DME",</br>
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjU2MDMwNzYsImV4cCI6MTY2NTYwMzk3Niwic3ViIjoiOTI0NDhhNmEtOGY0Yi00ODhmLWJiNTktNjE5YmRkNThkODA0In0.WJUsu3eIQU5K0bYqGSr1mf3DGBQpNfsXBPDsGCrLvc8"
}</br>
