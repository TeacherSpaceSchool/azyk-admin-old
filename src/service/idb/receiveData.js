import { db } from '../idb'

export let initReceiveData = (db) => {
    try {
        db.deleteObjectStore('receiveData');
    }
    catch (error){
        console.log(error)
    }
    const store = db.createObjectStore('receiveData', {
        keyPath: 'id',
        autoIncrement: true,
    });
    store.createIndex('name', 'name', { unique: true });
}

export let getReceiveDataByKey = async(key) => {
    if(db!==undefined){
        return await db.get('receiveData', key)
    }
}

export let putReceiveDataByKey = async(key, data) => {
    if(db!==undefined){
        let res = await db.get('receiveData', key)
        if(res===undefined){
            await db.add('receiveData', {
                data
            });
        } else {
            res.data = data
            await db.put('receiveData', {
                res
            });
        }
    }
}

export let getReceiveDataByIndex = async(index) => {
    if(db!==undefined){
        console.log(await db.getFromIndex('receiveData', 'name', index))
        return await db.getFromIndex('receiveData', 'name', index)
    }
}

export let putReceiveDataByIndex = async(index,  data) => {
    if(db!==undefined){
        let res = await db.getFromIndex('receiveData', 'name', index)
        console.log(res)
        if(res===undefined){
            await db.add('receiveData', {
                name: index,
                data: data
            });
        } else {
            res.data = data
            await db.put('receiveData', res);
        }
    }
}
