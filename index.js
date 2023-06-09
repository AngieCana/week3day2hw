// class Cats {
//   constructor(names, breed, year) {
//     this.names = names;
//     this.year = year;
//     this.breed = breed;
//   }
// }

// const myCat1 = new Cats('Revali', 'bengal', '2');
// console.log(myCat1);
// const myCat2 = new Cats('Joker', 'bengal', '2');
// console.log(myCat2);

class Pirate{
  constructor(captain, role, personality){
    this.captain = captain;
    this.role = role;
    this.personality = personality;

  }
}

const jollyRoger = [
  new Pirate('Captain Hook', 'Captain', 'Ambitious'),
  new Pirate('Smee', 'First Mate', 'Anxious'),
  new Pirate('Barbossa', 'Navigator', 'reliable'),
];

const blackPearl = [
  new Pirate('Jack Sparrow', 'captain', 'eccentric'),
  new Pirate('Gibbs', 'First Mate', 'knowledgeable'),
  new Pirate('Elizabeth Swan', 'Navigator', 'hard-working'),

];

for(let i = 0; i < jollyRoger.length; i++){
  console.log(jollyRoger);
  break;
}

for(let i = 1; i <blackPearl.length; i++){
  console.log(blackPearl);
  break
}