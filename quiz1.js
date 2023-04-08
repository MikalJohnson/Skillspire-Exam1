//1
const arrayOfNames = ["Mikal", 'Julinda', 'Taylor', 'Kiavid']

function randomStudent () {
  let randomNum = Math.floor(Math.random() * arrayOfNames.length)
  console.log(randomNum, arrayOfNames[randomNum])
}

randomStudent(arrayOfNames)

//2
function fizzBuzz(){
  if (num % 3 === 0 && num % 5 === 0) {
    console.log(`FizzBuzz`);
  } 
  else if (num % 3 === 0) {
    console.log(`Fizz`);
  } 
  else if (num % 5 === 0) {
    console.log(`Buzz`);
  }
}


//3
let userInput = prompt(`Enter your score from the exam: `)

if (userInput > 80) {
  console.log(`You passed with excellent score`);
}
else if (userInput >= 60 && userInput <= 80) {
  console.log(`You passed with a good score`);
}
else if (userInput < 60){
  console.log(`You failed the exam`);
}

//4
const daysSpent = prompt(`How many lectures have you completed so far?`);
const lectureWeeks = 16

function lectureRemaining (daysSpent) {
  let lectureDays = lectureWeeks * 3;
  let remainingDays = lectureDays - parseInt(daysSpent)
  return remainingDays
}

//5
function buyTomato(money) {
  let amountOfTomatoes = money / 2
  return amountOfTomatoes
}