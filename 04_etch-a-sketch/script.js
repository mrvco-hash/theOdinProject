const container = document.querySelector(' main > .container');
const buttonForChoice = document.querySelector('.buttonForChoice');

buttonForChoice.addEventListener('click', () => {
    container.innerHTML = ''
    let totalDivsNumber = prompt('Enter the number of square by side.') ** 2;
        let i = 0;
    while(i < totalDivsNumber) {
        const div = document.createElement('div');
        div.addEventListener('mouseover', changeBackground)
        div.addEventListener('mouseout', resetBackground)
        container.appendChild(div)
        i++
    }
})

const changeBackground = function(e) {
    // for a random color in rgb
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)

    // rbg(0, 0, 0)
    e.target.style.backgroundColor = 'rgb(' + randomR + ',' + randomG + ',' + randomB + ')'
}

const resetBackground = function(e) {
    e.target.style.backgroundColor = 'white'
}
