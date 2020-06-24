import { openDB } from 'idb';
import { initReceiveData } from './idb/receiveData';
export let db = undefined
export let start = async () => {
    if (window.indexedDB) {
        db = await openDB('b10b11bd-ab56-46e2-99b3-58d4be94a882', 1, {
            upgrade(db) {
                initReceiveData(db)
            },
        });
    }
}


