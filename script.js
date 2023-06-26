const asa = document.querySelector(".slider-container");
const asab = asa.querySelector(".slider-background");

let appMove = gsap.timeline({
  scrollTrigger: {
    trigger: ".slider-move",
    pin: true,
    start: "top top",
    end: "+=2000",
    scrub: 1
  }
})

appMove
.from(".slider-container", {
  scale: 4,
  duration: 1.6
}, 0)
.from("p.copy", {
  opacity: 0
}, 2)


/* */

var interval;
document.addEventListener('DOMContentLoaded', ()=>{
    // 롤링 초기화 
    interval = window.setInterval(rollingCallback, 3000);

    //마우스 호버시 롤링이 멈추었다 벗어나면 다시 롤링이 되도록 처리
    document.querySelector('.rollingbanner').addEventListener('mouseover',function(){
        window.clearInterval(interval);
    })
    document.querySelector('.rollingbanner').addEventListener('mouseout',function(){
        interval = window.setInterval(rollingCallback, 3000);
    })
})

function rollingCallback(){
    //.prev 클래스 삭제
    document.querySelector('.rollingbanner .prev').classList.remove('prev');

    //.current -> .prev
    let current = document.querySelector('.rollingbanner .current');
    current.classList.remove('current');
    current.classList.add('prev');

    //.next -> .current
    let next = document.querySelector('.rollingbanner .next');
    //다음 목록 요소가 널인지 체크
    if(next.nextElementSibling == null){
        document.querySelector('.rollingbanner ul li:first-child').classList.add('next');
    }else{
        //목록 처음 요소를 다음 요소로 선택
        next.nextElementSibling.classList.add('next');
    }
    next.classList.remove('next');
    next.classList.add('current');
}