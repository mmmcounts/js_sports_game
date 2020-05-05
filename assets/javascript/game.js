//const userInput = document.querySelector("#user-input");
//const userInputButton = document.querySelector("#user-input-button");

//console.log(userInputButton)

const resetContainer = document.querySelector("#reset-container");
const numResets = document.querySelector('#num-resets')
const resetButton = document.querySelector("#reset-button");
const teamOneNumShots = document.querySelector('#teamone-numshots')
const teamOneNumGoals = document.querySelector('#teamone-numgoals')
const teamOneShootButton = document.querySelector("#teamone-shoot-button");
const teamTwoShootButton = document.querySelector('#teamtwo-shoot-button')
const teamTwoNumShots = document.querySelector('#teamtwo-numshots')
const teamTwoNumGoals = document.querySelector('#teamtwo-numgoals')

resetButton.addEventListener("click", function () {
    numResets.innerHTML = Number(numResets.innerHTML) + 1
    teamOneNumShots.innerHTML = 0
    teamTwoNumShots.innerHTML = 0
    teamOneNumGoals.innerHTML = 0
    teamTwoNumGoals.innerHTML = 0

})

teamOneShootButton.addEventListener('click', function () {
    teamOneNumShots.innerHTML = Number(teamOneNumShots.innerHTML) + 1
    if (Math.random() < 0.5) {
        teamOneNumGoals.innerHTML = Number(teamOneNumGoals.innerHTML) + 1
    }
})

teamTwoShootButton.addEventListener('click', function () {
    teamTwoNumShots.innerHTML = Number(teamTwoNumShots.innerHTML) + 1
    if (Math.random() < 0.5) {
        teamTwoNumGoals.innerHTML = Number(teamTwoNumGoals.innerHTML) + 1
    }

})


//counterButton.addEventListener("click", function () {

  //  count++
//     console.log(count);
//     countspan.innerText = count;
// })

// const teamtwo-shoot - button = document.querySelector("#teamtwo-shoot-button");
// counterButton.addEventListener("click", function () {

//     count++
//     console.log(count);
//     countspan.innerText = count;
// })

// goals.addEventListener("click", function () {
//     console.log(Math.round.random())
// })
// const evenOrOddButton = document.querySelector("#even-or-odd-button");
// evenOrOddButton.addEventListener("click", function () {
//     if (count % 2 == 0) {
//         alert('Even Number');
//     } else {
//         alert('Odd Number');

//     })

