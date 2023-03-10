function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}


function fiveHeads() {
    return new Promise( (resolve, reject) => {
        // tu código aquí!
        let headsCount = 0;
        let attempts = 0;
        while(headsCount < 5) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if(result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
            if(attempts === 20) reject(`5 consecutive "heads" were not reached`);
        }
        //la cantidad de veces que salió cara
        resolve(`It took ${attempts} tries to flip five "heads"`);
        
    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );
