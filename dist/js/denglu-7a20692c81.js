"use strict";feather.replace();var str1="<p style='font-size:13px;font-family: 微软雅黑;color: red;'>用户名不能为空</p>",str2="<p style='font-size:13px;font-family: 微软雅黑;color: red;'>请输入密码</p>",str3="<p style='font-size:13px;font-family: 微软雅黑;color: red;'>密码长度必须大于等于6位</p>",str4="<p style='font-size:13px;font-family: 微软雅黑;color: red;'>密码不一致</p>";function loginuser(){var e=0,n=" ",t=document.getElementsByClassName("yanzhengtxt")[0],s=document.getElementsByClassName("focus-input")[0].style;return 0===document.getElementsByName("username")[0].value.length?(s.background="red",n+=str1):(s.background="#7f7f7f",n="   ",e=1),t.innerHTML=n,1===e}function loginpass(){var e=0,n=" ",t=document.getElementsByClassName("yanzhengtxt")[0],s=document.getElementsByClassName("focus-input")[1].style;return 0===document.getElementsByName("pass")[0].value.length?(s.background="red",n+=str2):(s.background="#7f7f7f",n="   ",e=1),t.innerHTML=n,1===e}function reguser(){var e=0,n=" ",t=document.getElementsByClassName("yanzhengtxt")[1],s=document.getElementsByClassName("focus-input")[2].style;return 0===document.getElementsByName("username")[1].value.length?(s.background="red",n+=str1):(s.background="#7f7f7f",n="   ",e=1),t.innerHTML=n,1===e}function regpass1(){var e=0,n=" ",t=document.getElementsByClassName("yanzhengtxt")[1],s=document.getElementsByClassName("focus-input")[3].style;return document.getElementsByName("pass")[1].value.length<6?(s.background="red",n+=str3):(s.background="#7f7f7f",n="   ",e=1),t.innerHTML=n,1===e}function regpass2(){var e=0,n=" ",t=document.getElementsByClassName("yanzhengtxt")[1],s=document.getElementsByClassName("focus-input")[4].style;return document.getElementsByName("pass")[1].value!==document.getElementsByName("pass")[2].value?(s.background="red",n+=str4):(s.background="#7f7f7f",n="   ",e=1),t.innerHTML=n,1===e}function login(){return loginuser()&&loginpass()}function fanzhuan(e){var n=document.getElementsByClassName("maindiv1")[0].style,t=document.getElementsByClassName("maindiv2")[0].style;1===e&&(n.animation="donghua1 0.3s linear 1",setTimeout(function(){n.transition="none",t.transition="none",n.zIndex="-1",t.zIndex="1",n.opacity="0",t.opacity="1",t.animation="donghua2 0.3s linear 1"},300)),2===e&&(t.animation="donghua1 0.3s linear 1",setTimeout(function(){n.transition="none",t.transition="none",n.zIndex="1",t.zIndex="-1",n.opacity="1",t.opacity="0",n.animation="donghua2 0.3s linear 1"},300)),n.transition="all 0.3s",t.transition="all 0.3s"}function reg(){if(reguser()&&regpass1()&&regpass2()){fanzhuan(2);var e=document.getElementsByName("username")[1].value,n=document.getElementsByName("pass")[1].value;setTimeout(function(){document.getElementsByName("username")[0].value=e,document.getElementsByName("pass")[0].value=n,document.getElementsByClassName("yanzhengtxt")[0].innerHTML="<p style='font-size:13px;font-family: 微软雅黑;color: black;'>注册成功，已为你自动填充</p>"},800)}return!1}