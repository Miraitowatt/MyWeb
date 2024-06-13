/*———————— HOME SWIPER ————————*/
const swiperHome = new Swiper('.home__swiper', {
  loop: true, // 轮播循环
  spaceBetween: -24,// 间距
  grabCursor: true,
  slidesPerView: 'auto',// 根据容器宽度自动确定每个视图显示的滑块数量
  centeredSlides: 'auto', // 居中显示滑块

  autoplay: {
    delay: 3000, // 滑块自动切换的时间间隔为3s
    disableOnInteraction: false // 用户与Swiper交互后，仍自动播放
  },

  breakpoints: { //根据不同的屏幕宽度设置响应式断点，调整轮播效果以适应不同设备尺寸
    1220: { // 屏幕宽度达到或小于1220像素时生效
      spaceBetween: -32,
    }
  }
});

/*——————————Volume SWIPER ————————*/

const swiperVolume = new Swiper('.Volume__swiper', {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',

  breakpoints: {
    1150: {
      slidesPerView: 4,
      centeredSlides: false
    }
  },

   // Navigation arrows
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// 指定上一张和下一张按钮的选择器 swiper自动在页面中寻找元素并绑定点击事件


/*———————— NEW SWIPER ——————-*/

const swiperNew = new Swiper('.new__swiper', {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',

  breakpoints: {
    1150: {
      slidesPerView: 3,
    }
  }
});





