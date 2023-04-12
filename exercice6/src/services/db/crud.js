import { getCollection } from './connection.js';

export const findOne = async(collectionName, query, options = {}) => {
	try {
		const  collection = getCollection(collectionName);
		const  result = await  collection.findOne(query, options);
        return  result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction findOne avec les parametres suivants: ${query}`);
		console.log(e);
		throw  e;
	}
}

export const find = async(collectionName, query, options = {}) => {
    try{
        const collection = getCollection(collectionName);
        const result = await collection.find(query,options).toArray();
        return result;
    } catch (e) {
		console.log(`Erreur lors de l execution de la fonction find avec les parametres suivants: ${query}`);
		console.log(e);
		throw  e;   
    }
}

export const insertOne = async(collectionName,query,options = {}) => {
    try{
        const collection = getCollection(collectionName);
        const result = await collection.insertOne(query,options);
        // return result
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction insertOne avec les parametres suivants: ${query}`);
        console.log(e);
        throw  e;   
    }
}

export const insertMany = async(collectionName,query,options = {}) =>{
    try{
        const collection = getCollection(collectionName);
        const result = await collection.insertMany(query,options);
        // return result
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction insertMany avec les parametres suivants: ${query}`);
        console.log(e);
        throw  e;   
    }
}

export const updateOne = async(collectionName,filter,update,options) => {
    try{
        const collection = getCollection(collectionName);
        const result = await collection.updateOne(filter,update,options);
        return result;
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction updateOne avec les parametres suivants: ${filter}`);
        console.log(e);
        throw  e;   
    }
}

export const updateMany = async(collectionName,filter,update,options) => {
    try{
        const collection = getCollection(collectionName);
        const result = await collection.updateMany(filter,update,options);
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction updateOne avec les parametres suivants: ${filter}`);
        console.log(e);
        throw  e;   
    }
}

export const replace = async(collectionName,query,replacement) => {
    try{
        const collection = getCollection(collectionName);
        const result = await collection.replaceOne(query,replacement);
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction replace avec les parametres suivants: ${query}`);
        console.log(e);
        throw  e;   
    }
}

export const deleteOne = async(collectionName,query) =>{
    try{
        const collection = getCollection(collectionName);
        const result = await collection.deleteOne(query);
        return result;
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction deleteOne avec les parametres suivants: ${query}`);
        console.log(e);
        throw  e;   
    }
}

export const deleteMany = async(collectionName,query) => {
    try{
        const collection = getCollection(collectionName);
        const result = await collection.deleteMany(query);
        return result;
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction deleteMany avec les parametres suivants: ${query}`);
        console.log(e);
        throw  e;   
    }
}
