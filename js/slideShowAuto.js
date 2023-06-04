// var slides = document.querySelectorAll("#slides > img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

//슬라이드 이미지 중 하나가 보이면 나머지 감추기
//현재 표시되는 이미지에 index current 변수를 부여하자.


//version2. 이미지 자동으로 넘기기
var current = 0; //처음 페이지 0번째 이미지.
showSlide();

function showSlide() {
  var slides = document.querySelectorAll("#slides > img");
  for(let i=0; i <slides.length; i++) {
    slides[i].style.display = "none"; //모든 이미지 감추기.영역도 차지안함
  }
  
  current++;
  if(current > slides.length) //마지막 이미지면
    current = 1; //처음으로
  slides[current -1].style.display = "block";
  setTimeout(showSlide,2000); // 2초 간격으로 showSlide 함수 호출
   
}