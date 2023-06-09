import { MongoClient } from 'mongodb';
import conf from "../../../config.json" assert { type : 'json' }

const url = conf.data.databaseUrl;
const dbName = conf.data.databaseName;

const uri = url+dbName

const client = new MongoClient(uri);

export const connectTodB = async() => {
    try {
        console.log('Trying to access the db...');
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();

        // Establish and verify connection
        await client.db('admin').command({ ping: 1 });
        console.log('Connected successfully to server');
    } catch (e) {
        // Ensures that the client will close when you finish/error
        console.log(JSON.stringify(err));
        await client.close();
        throw e;
    }
}

export const getCollection = (collectionName) => {
    return client.db(dbName).collection(collectionName);
}