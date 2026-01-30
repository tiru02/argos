let left = document.querySelector('input[left]')
let right = document.querySelector('input[right]')
let mover = document.querySelector('.fixed-container')
let length = 0
left.onclick = () => {
    length -= 25
    if (length <= -50) {
        left.style.display='none'
        right.style.display='flex'
    }else{
        left.style.display='flex'
        right.style.display='none'
    }
    mover.style.transform = `translateX(${length}%)`
    console.log(length)

}
right.onclick = () => {
    length += 25
    if (length >= 50) {
        left.style.display='flex'
        right.style.display='none'
    }else{
        
        left.style.display='none'
        right.style.display='flex'
    }
    mover.style.transform = `translateX(${length}%)`
    length += 10
    console.log('right', length)
}