# json-server multiple fake json

# Add all library for all function json-server
npm install

# Make JSON fake in src folder
  example :
  > create file name profile.json
  > add this json
  {
    "company": "PT. Nyaman Abadi",
    "username": "Hanafi Desar",
    "email": "hanafi.desar@gmail.com",
    "firstname": "Hanafi",
    "lastname": "Desar",
    "address": "Jl. Sukajadi no 14",
    "city": "Bandung",
    "country": "Indonesia",
    "postalCode": "40162",
    "aboutMe": "I experianced as Web Programmer Angular 2"
  }
# Initialize your fake jsn in index.js file
  example :
  const profile = require('./src/profile.json') --> your fake json already created

  module.exports = () => ({
  profile: profile
  });

# Run json-server
npm run start

# URL API has Already
example :
http://localhost:3000/profile
