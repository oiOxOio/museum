/*
 * 首页脚本文件
 */

/* 轮播图开始 */
let slides = document.querySelectorAll('.banner .slides div');
let banner = 0

document.querySelector('.banner .left').addEventListener('click', function () {
	bannerTo('previous');
})
document.querySelector('.banner .right').addEventListener('click', function () {
	bannerTo('next');
})

//轮播图切换
function bannerTo(operation) {
	slides.forEach(function (element) {
		element.className = '';
	});

	//切换方向
	if (operation === 'previous') {
		banner--
	} else {
		banner++
	}

	//边界检测
	if (banner >= slides.length) {
		banner = 0;
	} else if (banner < 0) {
		banner = slides.length - 1;
	}

	slides[banner].className = 'active';
}

/* 轮播图结束 */