document.addEventListener('DOMContentLoaded', function() {
 // 确保只在页面的DOM结构完全加载后才执行
let searchForm = document.querySelector('.search-form');
let cart = document.querySelector('.shopping-cart');
let love = document.querySelector('.loving');
// 通过querySelector方法选取了页面中class为'shopping-cart'的第一个元素
// 赋值给变量cart，用于获取DOM元素

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    cart.classList.remove('active');
    love.classList.remove('active');
}
// 当点击'search-btn'时，这些元素的'active'状态会被关闭
document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    love.classList.remove('active');
}

document.querySelector('#love-btn').onclick = () =>{
    love.classList.toggle('active');
    cart.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    love.classList.remove('active');
}

});
