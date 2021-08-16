// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const lastCat = [...cats, name];
    return lastCat;
}

function prependCat(name) {
    const newCat = [name, ...cats];
    return newCat;
}

function removeLastCat() {
    const removeLast = cats.slice(0, cats.length - 1);
    return removeLast;
}

function removeFirstCat() {
    const removeFirst = cats.slice(1);
    return removeFirst;
}