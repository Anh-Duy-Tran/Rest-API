# Rest-API

# Query all friend(s) in the database
GET http://localhost:3000/friends

###

# Query a friend using id
GET http://localhost:3000/friends/63507da078d0670ea06c5769

###

# Add a new friend to the database
POST http://localhost:3000/friends
Content-Type: application/json

{
    "name": "Duy",
    "age": 18,
    "gender": "Male"
}

###

# Delete a friend from the database using id
DELETE http://localhost:3000/friends/63507da078d0670ea06c5769

###

# Update the attribute(s) of a friend and update to the database
PATCH http://localhost:3000/friends/63507da078d0670ea06c5769
Content-Type: application/json

{
    "name": "New Name",
    "age": 19,
    "gender": "Male"
}
