// class HashTable {
//   constructor(size) {
//     this.table = new Array(size);
//     this.size = size;
//   }

//   hash(key) {
//     let hash = "";
//     for (let i = 0; i < key.length; i++) {
//       hash = (hash * 31 + key.charCodeAt(i)) % this.size;
//     }
//     return hash;
//   }

//   insert(key, value) {
//     let hash = this.hash(key);

//     if (!this.table[hash]) {
//       this.table[hash] = [];
//     }

//     this.table[hash].push([key, value]);
//   }

//   search(key) {
//     let hash = this.hash(key);

//     for (let i = 0; i < this.table[hash].length; i++) {
//       if (this.table[hash][i][0] == key) {
//         return this.table[hash][i][1];
//       }
//     }
//   }

//   delete(key) {
//     let hash = this.hash(key);

//     for (let i = 0; i < this.table[hash].length; i++) {
//       if (this.table[hash][i][0] == key) {
//         this.table[hash].splice(i, 1);
//       }
//     }
//   }
// }

// let hashTable = new HashTable(6);
// hashTable.insert("nuts", 20);
// hashTable.insert("bolt", 30);
// hashTable.delete("nuts");

// console.log(hashTable.search("nuts"));







// class HashTable{
//   constructor(size){
//     this.table = new Array(size);
//     this.size = size;
//   }


//   hash(key){
//     let total = 0;

//     for(let i = 0; i < key.length; i++){
//       total += key.charCodeAt(i);
//     }

//     return total % this.size;
//   }


//   set(key, value){
//     const index = this.hash(key);
//     this.table[index] = value;
//   }

//   get(key){
//     const index = this.hash(key);
//     return this.table[index];
//   }

//   remove(key){
//     const index = this.hash(key);
//     this.table[index] = undefined;
//   }

//   display(){
//     for(let i = 0; i < this.table.length; i++){
//       if(this.table[i]){
//         console.log(i, this.table[i]);
//       }
//     }
//   }

// }



// const HT = new HashTable(50);
// HT.set("name",100)
// HT.set("age", 200)
// HT.set("a",300)
// HT.set("b", 400)
// HT.set("c", "500");

// HT.remove("a")

// HT.display();

// // console.log(HT.get("a"));













// // handle collision

// class HashTable{
//   constructor(size){
//    this.table = new Array(size);
//    this.size = size;
//   }

//   hash(key){
//     let total = 0;
//     for(let i = 0; i < key.length; i++){
//       total += key.charCodeAt(i);
//     }

//     return total % this.size;
//   }

//   set(key, value){
//     const index = this.hash(key);
//     const bucket = this.table[index];

//     if(!bucket){
//       this.table[index] = [[key, value]];
//     }else{
//       const sameKEyItem = bucket.find(item => item[0] === key);
//        if(sameKEyItem){
//         sameKEyItem[1] = value;
//        }else{
//         bucket.push([key, value]);
//        }
//     }
//   }


//   get(key){
//     const index = this.hash(key);
//     const bucket  = this.table[index];
//     if(bucket){
//       const sameKeyItem = bucket.find(item => item[0] === key);
//       if(sameKeyItem){
//         return sameKeyItem[1]
//       }
//     }

//     return undefined;
//   }

//   remove(key){
//     const index = this.hash(key);
//     const bucket = this.table[index];

//     if(bucket){
//       const sameKeyItem = bucket.find(item => item[0] ===  key);
//       if(sameKeyItem){
//         bucket.splice(bucket.indexOf(sameKeyItem), 1);
//       }
//     }
//   }

//   display(){
//     for(let i = 0; i < this.table.length; i++){
//       if(this.table[i]){
//         console.log(i, this.table[i]);
//       }
//     }
//   }



// }


// const HT = new HashTable(50);
// HT.set("name",100)
// HT.set("age", 200)
// HT.set("a",300)
// HT.set("b", 400)
// HT.set("c", "500");

// HT.remove("a")

// HT.display();

// // console.log(HT.get("a"));












class HashMap{
  constructor(size){
    this.table = new Array(size);
    this.size = size;
  }
}
