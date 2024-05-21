function randomGenerator(ran){
    return Math.floor(Math.random()*3.99)
}

const numbers = ["two","three","four","five"]
const animals = ["snakes", "lions", "cats", "dogs"]
const endings = ["eating their food.", "going to sleep.", "having a fight.", "running at night."]

const sentenceMaker=()=>{
    return `There was ${numbers[randomGenerator()]} ${animals[randomGenerator()]} ${endings[randomGenerator()]}`
}

console.log(sentenceMaker())

