var slides = document.querySelectorAll("#slides > img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

//슬라이드 이미지 중 하나가 보이면 나머지 감추기
//현재 표시되는 이미지에 index current 변수를 부여하자.



//version01. 직접 이미지 넘기는 경우
var current = 0;
showSlides(current); //현재 이미지를 표시해라.
prev.onclick = prevSlide; // prev버튼에 이벤트 발생 시 prevSlide 호출 
next.onclick = nextSlide;


function showSlides(n) {
  for(var i=0; i < slides.length; i++) {
    slides[i].style.display = "none"; //hidden과 달리 공간도 차지 안함
  }
  slides[n].style.display = "block"; //블럭요소로 보여줌
  console.log("이미지 번호" + n);
}

function prevSlide() {
  //0 1 2 (current 값이 0보다 크면 -1 ㅇㅋ)
  // 1 2 -> -1
  // 0 -> 2(=length-1)

  if(current > 0)
    current -= 1;
  else 
    current = slides.length -1;
  
    showSlides(current);
    console.log("prev호출");
}


function nextSlide() {
  //0 1 2(length-1) => 2보다 작을 때는 + 1, 2일때는 0으로
  if(current < slides.length-1) 
    current += 1;
  else 
    current = 0;
  
    showSlides(current);

}


