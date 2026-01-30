let left = document.querySelector('input[left]')
let right = document.querySelector('input[right]')
let mover = document.querySelector('.fixed-container')
let leftLength = 0
left.onclick = () => {
    leftLength -= 10
    if (leftLength <= -50) leftLength = 0
    mover.style.transform = `translateX(${leftLength}%)`
    console.log(leftLength)

}
right.onclick = () => {
    leftLength += 10
    if (leftLength >= 50) leftLength = 0
    mover.style.transform = `translateX(${leftLength}%)`
    leftLength += 10
    console.log('right', leftLength)
}