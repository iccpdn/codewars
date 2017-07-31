//my version
function order(words) {
    const collection = [];
    const array = [];
    words.split(' ').forEach(word => {
        const number = Number(word.match(/\d/g));
        collection.push({ word, id: number });
    });
    const sortedCollection = collection.sort((a, b) => a.id - b.id);
    sortedCollection.forEach(a => array.push(a.word));
    
    return array.join(' ');
} 

//codewars best practice
function order(words) {
    return words.split(' ')
                .sort((a, b) => a.match(/\d/) - b.match(/\d/))
                .join(' ');
}  

console.log(order('is2 Thi1s T4est 3a'));
