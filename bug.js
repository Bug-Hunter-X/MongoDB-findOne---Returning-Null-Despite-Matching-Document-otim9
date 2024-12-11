```javascript
const query = { name: 'John Doe' };

db.collection('users').findOne(query, (err, doc) => {
if (err) {
  console.error('Error finding user:', err);
} else if (doc === null) {
  console.log('No user found.');
} else {
  console.log('User found:', doc);
}
});
```