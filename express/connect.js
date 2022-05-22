const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);


const dbName = 'Ganesh';

async function connect() {
    return new Promise(async(resolve, reject) =>{
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);

        resolve(db)
    })
}

async function findAllCourses(){
    return new Promise(async(resolve, reject)=>{
        const db = await connect();
        const collection = db.collection('courses');
        const findResult = await collection.find({}).toArray();
        console.log('Found documents =>', findResult);
        resolve(findResult)
    })  
}

async function insertCourses(cou){
    return new Promise(async(resolve, reject)=>{
        const db = await connect();
        const collection = db.collection('courses');
        const findResult = await collection.insertOne(cou);
        console.log('Found documents =>', findResult);
        resolve()
    })  
}

module.exports = {findAllCourses, insertCourses}

//main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());