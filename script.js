let left = document.querySelector('input[left]')
let right = document.querySelector('input[right]')
let mover = document.querySelector('.fixed-container')
let imageScroller=document.querySelector('.image-scroller')
let images=document.querySelectorAll('.image-scroller img')
let menu =document.querySelector('#menu')

const watcher=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            console.log('elem is visible')
        }else{
            return false
            console.log('elem is not visible')
        }
    })
})
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
// for(let i=0;i<images.length;i++){
//     images[i].style.transform=`translateX(${i*100}%)` 
//     watcher.observe(images[i])
// }
document.onscroll=()=>{
    menu.style.boxShadow=`1px 1px 5px #c0c0c0`
}
document.onscrollend=()=>{
    menu.style.boxShadow='none'
}