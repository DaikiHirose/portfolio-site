'use strict';

const menu = document.getElementById('menuButton');
const navi = document.getElementById('spNavi');
const mask = document.getElementById('mask');
const header = document.getElementById('header');
const btn = document.getElementById('js-button');


// スマートフォン版：ハンバーガーメニューの開閉設定
menu.addEventListener('click', function (evt) {
    evt.preventDefault();
    this.classList.toggle('active');
    navi.classList.toggle('active');
    mask.classList.toggle('active');
});

// スマートフォン版：メニュー領域以外をクリックした時の設定
mask.addEventListener('click', function (evt) {
    evt.preventDefault();
    this.classList.remove('active');
    navi.classList.remove('active');
    menu.classList.remove('active');
});

// スマートフォン版：メニュークリック時の設定
navi.addEventListener('click', function (evt) {
  evt.preventDefault();
  this.classList.remove('active');
  mask.classList.remove('active');
  menu.classList.remove('active');
});


// 画面スクロール時のheadarの表示設定
window.addEventListener('scroll', function (evt) {
    evt.preventDefault();
    if (window.scrollY <= 50) {
        header.classList.remove('scroll');
        navi.classList.remove('scroll');
        btn.classList.remove('active');
    } else {
        header.classList.add('scroll');
        navi.classList.add('scroll');
        btn.classList.add('active');
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

// スクロール時トップへ戻るボタンの設定
scrollTop('js-button', 300);

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