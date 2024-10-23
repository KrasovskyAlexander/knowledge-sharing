class PersistDataMap<K, V> {
    private map: Map<K, V>;

    constructor(map: Map<K, V> = new Map<K, V>()) {
        this.map = new Map(map);
    }

    set(key: K, value: V): PersistDataMap<K, V> {
        const newMap = new Map(this.map);
        newMap.set(key, value);

        return new PersistDataMap(newMap);
    }

    get(key: K): V | undefined {
        return this.map.get(key);
    }

    delete(key: K): PersistDataMap<K, V> {
        const newMap = new Map(this.map);
        newMap.delete(key);

        return new PersistDataMap(newMap);
    }

    clear(): PersistDataMap<K, V> {
        return new PersistDataMap(new Map<K, V>());
    }

    has(key: K): boolean {
        return this.map.has(key);
    }

    keys(): IterableIterator<K> {
        return this.map.keys();
    }

    values(): IterableIterator<V> {
        return this.map.values();
    }

    entries(): IterableIterator<[K, V]> {
        return this.map.entries();
    }

    size(): number {
        return this.map.size;
    }
}

interface User {
    name: string;
    age: number;
}

const myDataMap = new PersistDataMap<string, User>();
const updatedMap1 = myDataMap.set('user1', { name: 'Oleg', age: 30 });
const updatedMap2 = updatedMap1.set('user2', { name: 'Vlad', age: 25 });



console.log(myDataMap.get('user1'));
console.log(updatedMap1.get('user2'), updatedMap1.keys());
console.log(updatedMap2.get('user1'), updatedMap2.keys());

console.log(updatedMap1.has('user2'));
console.log(updatedMap2.has('user2'));
console.log(updatedMap2 === updatedMap1)

const updatedMap3 = updatedMap2.clear();

console.log(updatedMap2, updatedMap3);

console.log(updatedMap2.size() === updatedMap3.size());
