'use strict';

// ハンバーガーメニューの開閉設定
document.getElementById('menuButton').addEventListener('click', function (evt) {
    evt.preventDefault();
    this.classList.toggle('active');
    document.getElementById('spNavi').classList.toggle('active');
    document.getElementById('mask').classList.toggle('active');
});

// スマートフォン版メニュー領域以外の設定
document.getElementById('mask').addEventListener('click', function (evt) {
    evt.preventDefault();
    this.classList.remove('active');
    document.getElementById('spNavi').classList.remove('active');
    document.getElementById('menuButton').classList.remove('active');
});

// スマートフォンメニュークリック時の設定
document.getElementById('spNavi').addEventListener('click', function (evt) {
  evt.preventDefault();
  this.classList.remove('active');
  document.getElementById('mask').classList.remove('active');
  document.getElementById('menuButton').classList.remove('active');
});


// 画面スクロール時のheadarの設定
window.addEventListener('scroll', function (evt) {
    evt.preventDefault();
    if (window.scrollY <= 50) {
        document.getElementById('header').classList.remove('scroll');
        document.getElementById('spNavi').classList.remove('scroll');
        document.getElementById('js-button').classList.remove('active');
    } else {
        document.getElementById('header').classList.add('scroll');
        document.getElementById('spNavi').classList.add('scroll');
        document.getElementById('js-button').classList.add('active');
    }
});

// ページ内リンククリック時のスムーズスクロールの設定
const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const linkId = link.getAttribute('href');
    const linkDom = document.querySelector(linkId);
    const linkPosition = linkDom.getBoundingClientRect().top;
    const currentPosition = window.pageYOffset;
    const position = linkPosition + currentPosition;
    window.scroll({
      top: position,
      behavior: 'smooth',
    });
  });
});

// スクロールトップボタン
scrollTop('js-button', 500);

function scrollTop(elem,duration) {
  let target = document.getElementById(elem);
  target.addEventListener('click', function() {
    let currentY = window.pageYOffset; 
    let step = duration/currentY > 1 ? 10 : 100;
    let timeStep = duration/currentY * step;
    let intervalID = setInterval(scrollUp, timeStep);

    function scrollUp(){
      currentY = window.pageYOffset;
      if(currentY === 0) {
          clearInterval(intervalID);
      } else {
          scrollBy( 0, -step );
      }
    }
  });
}