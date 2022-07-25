let oBox = document.getElementById('box');
let oDiv = document.getElementsByClassName('show')[0];
let oShow = document.getElementsByClassName('show-select')[0];
let oUl = document.getElementsByClassName('list')[0];
let aLi = document.getElementsByClassName('list-in');
let zhuangtai = 1;
//点击oDiv时，三角向上，增加一个show-selectAdd类名(有写对应的样式),oUl从隐藏变成显示;再次点击则恢复默认样式
oDiv.onclick = function (e) {
	if (zhuangtai === 1) {
		e.cancelBubble = true;
		oShow.className = 'show-select show-selectAdd';
		oUl.style.display = 'block';
		document.getElementsByName("textarea")[0].cols = 64;
		zhuangtai = 2;
	} else {
		e.cancelBubble = false;
		oShow.className = 'show-select';
		oUl.style.display = 'none';

		document.getElementsByName("textarea")[0].cols = 100;
		zhuangtai = 1;
	}

}
//点击oUl的li时，oUl从隐藏变成显示，文字和三角恢复到黑色和向上的默认样式,并且文字内容变成当前点击的li的内容
for (let i = 0, len = aLi.length; i < len; i++) {
	aLi[i].onclick = function () {
		oShow.innerHTML = this.innerHTML + '<i></i>';
	}
}
//点击box以外的其他部分时，oUl从隐藏变成显示，文字和三角恢复到黑色和向上的默认样式
document.onclick = function () {
	this.getElementsByTagName('span')[0].className = 'show-select';
	oUl.style.display = 'none';
	document.getElementsByName("textarea")[0].cols = 100;
	zhuangtai = 1;
}