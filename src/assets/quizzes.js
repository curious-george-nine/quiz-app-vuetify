let qs = [
  {
    question: "What's 1 + 2?",
    options: ["1", "3", "5"],
    answer: "3",
  },
  {
    question: "What's 9 x 7?",
    options: ["36", "72", "63"],
    answer: "63",
  },
  {
    question: "What's current capital of japan?",
    options: ["Osaka", "uwu town", "Tokyo"],
    answer: "Tokyo",
  },
  {
    question: "Which continent is biggest?",
    options: ["Asia", "Africa", "South America"],
    answer: "Asia",
  },
  {
    question: "Which continent is smallest?",
    options: ["Australia", "Europe", "North America"],
    answer: "Australia",
  },
  {
    question: 'How do you say "Thank you" in french?',
    options: ["merci", "arigato", "gracias"],
    answer: "merci",
  },
  {
    question: "Which browser is the best?",
    options: ["chrome", "firefox", "edge"],
    answer: "firefox",
  },
  {
    question: "How far can you jump over in Minecraft?",
    options: ["3 blocks", "4 blocks", "5 blocks"],
    answer: "4 blocks",
  },
  {
    question: "Ah, I'm trying to foreach object but it doesnt' work.",
    options: ["I'm gonna give up", "Object.keys()?", "Try Map Object!"],
    answer: "Try Map Object!",
  },
];

qs = shuffle(qs);

let emptyArr = [];

for (let i = 0; i < 7; i++) {
  emptyArr.push(qs[i]);
}

qs = emptyArr;

export default qs;

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  const random = Math.floor(Math.random() * array.length);

  array = array.filter((element) => {
    return element != element[random];
  });

  return array.filter((element) => {
    return element != element[random];
  });
}
