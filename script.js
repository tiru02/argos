let left = document.querySelector('input[left]')
let right = document.querySelector('input[right]')
let mover = document.querySelector('.fixed-container')
let length = 0
left.onclick = () => {
    length -= 25
    mover.style.transform = `translateX(${length}%)`
    if (length <= -50) {
        left.style.display = 'none'
        right.style.display = 'flex'
        length=0
    } else {
        left.style.display = 'flex'
        right.style.display = 'none'
    }
}
right.onclick = () => {
    mover.style.transform = 'translateX(0)'
    left.style.display = 'flex'
    right.style.display = 'none'
}