console.log("hello");


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

// Use crazyObject to log the following.

//   * "omg my mouth is burning"
//     * "Pretty pretty prettayyyyy good"
//     * "Swearing at Larry and Jeff"
//     * "Chicken Teriyaki Boyyyyyy"
//     * The object the contains the name`funkhauser`

