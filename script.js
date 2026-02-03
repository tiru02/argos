let left = document.querySelector('input[left]')
let right = document.querySelector('input[right]')
let mover = document.querySelector('.fixed-container')
let imageScroller = document.querySelector('.image-scroller')
let images = document.querySelectorAll('.image-scroller img')
let menu = document.querySelector('#menu')
const scroller = document.querySelectorAll('.scroller-xd')

let length = 0
left.onclick = () => {
    length -= 25
    mover.style.transform = `translateX(${length}%)`
    if (length <= -50) {
        left.style.display = 'none'
        right.style.display = 'flex'
        length = 0
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

for (const i of scroller) {
  const left = i.childNodes[1], right = i.childNodes[3], scrl = i.childNodes[5]

  const maxScroll = scrl.scrollWidth - scrl.clientWidth;
  const STEP = 600;

  left.addEventListener('click', () => {
    scrl.scrollBy({
      left: -STEP,
      behavior: 'smooth'
    });
  });

  right.addEventListener('click', () => {
    scrl.scrollBy({
      left: STEP,
      behavior: 'smooth'
    });
  });

}


document.onscroll = () => {
    menu.style.boxShadow = `1px 1px 5px #c0c0c0`
}
document.onscrollend = () => {
    menu.style.boxShadow = 'none'
}