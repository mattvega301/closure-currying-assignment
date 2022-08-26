// closureChance()

function closureChance(){
    let invokes = 0;
    return function() {
        invokes = invokes + 1;
        if (invokes <= 5){
            console.log("Congrats you earn the chance!");
        } else {
            console.log("Sorry you missed the chance");
        }
    }
}

// invoke five times with invokerFunction

let invokerFunction = closureChance();




// longerThan()

function longerThan(minimumLength){
    return function(str){
        return str.length > minimumLength;
    }
}

// const arr = ["aaaaa", "bb", "cccccc", "ddddddddddd"];
// const filteredArray = arr.filter(longerThan(5));
// console.log(filteredArray);