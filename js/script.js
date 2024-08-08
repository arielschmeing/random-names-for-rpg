const btn_gen = document.querySelector('#btn_Gen_Name')

btn_gen.addEventListener('click', () => {
    getRandomLetter()
})

function getRandomLetter() {
    for(let i =0; i < 100 ;i++) {
        console.table(Math.floor(Math.random() * 25 + 1))
    }
}