let title = document.getElementById('title');
let Moun = document.getElementById('Moun');
let sakuraL = document.getElementById('sakuraL');
let sakuraR = document.getElementById('sakuraR');
let ckw = document.getElementById('ckw');
let home = document.getElementById('home');
// 根据元素的ID属性来选取页面上的元素

window.addEventListener('scroll', () => {
    // console.log( window.scrollY)
    if(window.scrollY > 250) return
    let value = window.scrollY;

    title.style.marginTop = value * 0.4 + 'px';
    home.style.marginTop = value * 0.35 + 'px';
// marginTop属性设置为其值乘以1.5的结果，随着滚动，text 元素的顶部外边距会逐渐增加
    sakuraR.style.top = value * -0.4 + 'px';
    sakuraR.style.left = value * 0.4 + 'px';
    //分别设置为其值乘以-1.5和1.5的结果—— 沿着垂直和水平方向做相对移动
//left 属性设置为其值乘以1.5的结——沿水平方向移动
    sakuraL.style.left = value * -0.4 + 'px';
//left 属性设置为其值乘以-1.5的结果——沿水平方向反向移动
    Moun.style.top = value * -0.5 + 'px';
//top 属性设置为其值乘以0.5的结果——沿垂直方向移动
    ckw.style.top = value * 0.35 + 'px';
});

