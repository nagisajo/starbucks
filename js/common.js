// 클릭시 검색아이콘 삭제후 검색창 키움
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// 연도 계산후 문자 삽입
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 해당 년도 계산하고 삽입