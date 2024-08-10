const myCollection = {
    data: [10, 20, 30],
    currentIndex: 0,
    next() {
        if(this.currentIndex < this.data.length){
            return { value: this.data[this.currentIndex++], done: false };
        }else{
            return { done: true };
        }
    }
}


let result = myCollection.next();
while(!result.done){
    console.log(result.value);
    result = myCollection.next();
}