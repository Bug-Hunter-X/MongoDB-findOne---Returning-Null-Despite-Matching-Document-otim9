```javascript
const { MongoClient } = require('mongodb');

const uri = "YOUR_MONGODB_URI"; // Replace with your MongoDB connection string
const client = new MongoClient(uri);

async function findUser(name) {
  try {
    await client.connect();
    const db = client.db('yourDatabaseName'); // Replace with your database name
    const collection = db.collection('users');
    const query = { name: name };

    const user = await collection.findOne(query);

    if (user) {
      console.log('User found:', user);
    } else {
      console.log('No user found.');
    }
  } finally {
    await client.close();
  }
}

findUser('John Doe');
```