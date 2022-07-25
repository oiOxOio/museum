/*
 * 公共脚本文件
 */
window.onload = function (){
    feather.replace();
}

/* 顶部动画开始 */
let topbar = document.querySelector('.header-box');
let header = document.querySelector('header');

window.onscroll = function () {
	let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

	//页面向下滚动
	if (scrollTop >= 80) {
		topbar.style.display = 'block';
		header.style.position = 'fixed';
		header.style.animation = 'scroll .5s';
		//页面回到顶部
	} else {
		topbar.style.display = 'none';
		header.style.position = '';
		header.style.animation = '';
	}

}
/* 顶部动画结束 */