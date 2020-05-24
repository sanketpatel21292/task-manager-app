// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database.');
    }

    const db = client.db(databaseName)

    //// INSERT data
    // db.collection('tasks').insertMany([{
    //     description: 'Learn Node.js',
    //     isCompleted: true
    // }, {
    //     description: 'Learn AWS',
    //     isCompleted: false
    // }, {
    //     description: 'Learn MySQL',
    //     isCompleted: false
    // }], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks!')
    //     }

    //     console.log(result.ops);
    // })

    //// FETCH data
    // db.collection('users').findOne({
    //     _id: new ObjectID("5ebbe5ed1dc38940dc569e7f"),
    //     name: 'Sanket'
    // }, (error, result) => {
    //     if (error) {
    //         return console.log(error)
    //     }

    //     console.log(result)
    // })

    db.collection('tasks').find({ isCompleted: false }).toArray((error, result) => {
        console.log(result)
    })

    //// UPDATE data
    // db.collection('users').updateOne({ name: 'Sanket Patel' }, {
    //     $set: {
    //         name: 'Sanket Patel'
    //     },
    //     $inc: {
    //         age: -1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({ isCompleted: false }, {
    //     $set: {
    //         isCompleted: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    //// DELETE data
    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
})
