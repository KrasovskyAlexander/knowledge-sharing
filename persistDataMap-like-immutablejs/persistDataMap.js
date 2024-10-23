"use strict";
class PersistDataMap {
    constructor(map = new Map()) {
        this.map = new Map(map);
    }
    set(key, value) {
        const newMap = new Map(this.map);
        newMap.set(key, value);
        return new PersistDataMap(newMap);
    }
    get(key) {
        return this.map.get(key);
    }
    delete(key) {
        const newMap = new Map(this.map);
        newMap.delete(key);
        return new PersistDataMap(newMap);
    }
    clear() {
        return new PersistDataMap(new Map());
    }
    has(key) {
        return this.map.has(key);
    }
    keys() {
        return this.map.keys();
    }
    values() {
        return this.map.values();
    }
    entries() {
        return this.map.entries();
    }
    size() {
        return this.map.size;
    }
}
const myDataMap = new PersistDataMap();
const updatedMap1 = myDataMap.set('user1', { name: 'Oleg', age: 30 });
const updatedMap2 = updatedMap1.set('user2', { name: 'Vlad', age: 25 });
console.log(myDataMap.get('user1'));
console.log(updatedMap1.get('user2'), updatedMap1.keys());
console.log(updatedMap2.get('user1'), updatedMap2.keys());
console.log(updatedMap1.has('user2'));
console.log(updatedMap2.has('user2'));
console.log(updatedMap2 === updatedMap1);
const updatedMap3 = updatedMap2.clear();
console.log(updatedMap2, updatedMap3);
console.log(updatedMap2.size() === updatedMap3.size());
