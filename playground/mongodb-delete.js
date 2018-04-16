const {
	MongoClient,
	ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');

	// db.collection('Todos').deleteMany({
	// 	text: 'Something to do'
	// }).then((result) => {
	// 	console.log(result);
	// });

	// db.collection('Todos').deleteOne({
	// 	text: 'Walk the dog'
	// }).then((result) => {
	// 	console.log(result);
	// });

	// db.collection('Todos').findOneAndDelete({text: 'Walk the dog'}).then((result) => {
	// 	console.log(result);
	// });

	// db.collection('Users').deleteMany({name: 'Andre'}).then((result) => {
	// 	console.log(result);
	// }, (err) => {
	// 	console.log('Unable to delete documents: ', err);
	// });

	db.collection('Users').findOneAndDelete({_id: new ObjectID('5ad52373d2097f01b48d4a69')}).then((result) => {
		console.log(result);
	}, (err) => {
		console.log('Unable to find and delete document: ', err);
	});

	//client.close();
});