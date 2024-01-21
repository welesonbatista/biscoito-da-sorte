const screenOne = document.querySelector(".screenOne")
const screenTwo = document.querySelector(".screenTwo")
const btnOpen = document.querySelector("#btnOpen")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 6)

let array = [
    'Se estiverem esperando que eu desista, é bom esperarem sentados.',
    'Nunca torne-se um monstro para derrotar outro.',
    'A escalada é longa, mas a vista vale a pena!',
    '⁠Raiva dá motivação sem propósito.',
    'As pessoas buscam por uma força que já existe dentro delas.',
    'Somos feitos por nossas escolhas',
    'Eu prefiro errar do que não fazer nada'
]

btnOpen.addEventListener('click', handleClick)
btnReset.addEventListener('click', handleResetClick)


function handleClick() {
    screenOne.classList.add("hide")
    screenTwo.classList.remove("hide")

    document.querySelector(".phraseOpenedCookie").innerText = array[randomNumber]
    alert(array[randomNumber])

}

function handleResetClick() {
    screenOne.classList.remove("hide")
    screenTwo.classList.add("hide")
    randomNumber = Math.round(Math.random() * 6)
}