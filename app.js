console.log("hello");


// ### 2. Take it Easy

// 1. Make an array that holds all of the colors of the rainbow.
// 2. Write code that will access "blue" from the rainbow array.
// 3. Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
// 4. Write code that will access your hobby from the object that you just created.


const rainbow = {
    colors: ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
}

console.log(rainbow);
console.log(rainbow.colors[4]);


const crazyObject = {
    taco: [
        {
            meat: 'steak',
            cheese: ['panela', 'queso', 'chihuahua']
        },
        {
            meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
        },
    ],
    larry: {
        nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
        quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
        characters: [
            {
                name: "Jeff",
                occupation: "manager"
            },
            {
                name: "funkhauser",
                occupation: "tv dude"
            },
            {
                name: "susie",
                occupation: "jeffs wife",
                favourtieHobby: "Swearing at Larry and Jeff"
            },
        ]
    }
}
   
console.log(crazyObject.taco[1].salsa[5]); 
console.log(crazyObject.larry.quotes[0]);
console.log(crazyObject.larry.nicknames[1]);
console.log(crazyObject.larry.characters[1]);

// Use crazyObject to log the following.

//   * "omg my mouth is burning"
//     * "Pretty pretty prettayyyyy good"
//     * "Swearing at Larry and Jeff"
//     * "Chicken Teriyaki Boyyyyyy"
//     * The object the contains the name`funkhauser`

const inception = {
    reality: {
        dreamLayer1: {
            dreamLayer2: {
                dreamLayer3: {
                    dreamLayer4: {
                        dreamLayer5: {
                            dreamLayer6: {
                                limbo: "Joseph Gordon Levitt"
                            }
                        }
                    }
                }
            }
        }
    }
}

// Change the value of`limbo` to`null`.

console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);
inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);