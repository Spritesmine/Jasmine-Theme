// 作者：祁三岁
// 版本：2.2.0
// 时间：2022.5.5
// 网址：http://qisansui.cn
// 邮箱：admin@china-heike.cn

$(function() {
	//scroll 事件适用于所有可滚动的元素和 window 对象（浏览器窗口）。
	$(window).scroll(function() {
		var scroHei = $(window).scrollTop(); //滚动的高度
		if (scroHei > 500) {
			$('.back-to-top').css('top', '-300px');
			// $('.back-to-top').fadeIn();
		} else {
			$('.back-to-top').css('top', '-999px');
			// $('.back-to-top').fadeOut();
		}
	})
	/*点击返回顶部*/
	$('.back-to-top').click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 600);
	})
})


$(function() {
	$('.elena-options .icon').on('click', function(event) {
		event.preventDefault();
		// console.log($(".elena-options").css("right"))
		if ($(this).hasClass('inOut')) {
			$('.elena-options').stop().animate({
				right: '0px'
			}, 500);
		} else {
			$('.elena-options').stop().animate({
				right: '-200px'
			}, 500);
		}
		$(this).toggleClass('inOut');
		return false;
	});

})

function show(id) {
	var aiin = document.getElementById(id);
	var inp = document.getElementById('owo');
	if (aiin.style.display != 'block') {
		aiin.style.display = 'block';
		inp.value = '访客信息';
	} else {
		aiin.style.display = 'none';
		inp.value = '访客信息';
	}
}

function showHide() {
	var oDiv = document.getElementById('Q-background');
	var ooDiv = document.getElementById('Q-x');
	if (oDiv.style.backgroundColor != 'white') {
		oDiv.style.backgroundColor = 'white';
		oDiv.style.filter = 'brightness()';
		ooDiv.value = '白天模式';
		// oDiv.style.filter = 'invert(0%)';
		// ooDiv.style.filter = 'invert(0%)';
	} else {
		oDiv.style.backgroundColor = 'black';
		oDiv.style.filter = 'brightness(40%)';
		ooDiv.value = '黑夜模式'
		// oDiv.style.filter = 'invert(100%)';
		// ooDiv.style.filter = 'invert(100%)';
	}
}




var imgArr = [
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/72881079-9eaf-47fd-91d6-b145a579e5f9.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/7db2c853-50d1-40e0-bbff-f8a8e7a715b5.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/c0579235-5a15-4f22-b337-a567fc6fe047.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/460d4472-5814-4753-acb4-7f662a10da62.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/6c21c9b5-2b20-45ce-bda8-a58a5cd16ad3.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/bbdd42b8-1b83-46e3-b260-2900aeca6b51.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/a1eb59cf-7ef4-436c-8bcb-adfd8915b0c8.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/7344f284-97b6-4483-b434-0987b051b21f.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/5d86d435-a90b-42d4-a364-e4d83fcb933e.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/5d86d435-a90b-42d4-a364-e4d83fcb933e.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/6a2dd307-719a-443b-8f91-7c96c56d435e.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/e2b7a0f5-509f-4f3a-a44d-534bde4ca963.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/0daeac08-4fa6-4fde-bfc8-4aa68e19f5f5.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/f16a9d97-e4b4-40e8-b0b2-c2232a05fc91.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/3ace3f1c-d390-49a2-9789-45160cd196ea.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/ba2ec9a3-93e0-4f69-8492-381c146f9b3e.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/1e11ef54-6625-451a-88fb-6789b37f3532.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/a5ce7b54-fa01-49d1-8095-38150c7c7bad.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/421ab461-c1be-4edd-8ebf-7527efaa9c14.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/179a2456-0e94-48d0-a6bc-767e96b948b3.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/20ccb48a-f01b-40e2-b3e7-068be5f6527e.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/d42a8d1a-b295-4941-b52c-d3f37f26450a.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/d42a8d1a-b295-4941-b52c-d3f37f26450a.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/c2666bc4-551e-4534-bd3a-c2e261c06e7b.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/c2666bc4-551e-4534-bd3a-c2e261c06e7b.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/c2666bc4-551e-4534-bd3a-c2e261c06e7b.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/545d8766-f122-40db-b33f-a5fd26bc2c82.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/57b73f3f-2f7f-4b8f-95fa-6dbe5f8933fd.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/43984777-f0fe-4ebc-9c98-fbddc9419d90.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/7ef02de7-3fd7-4e3b-8eb0-10d0014ff4a2.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/b217680a-3437-4c29-86e2-c202e7118682.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/c4f21394-752b-423d-8244-f65b301e55f7.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/0e8c8aa6-67a8-4187-b5b8-f2727336ecfc.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/3d5f40b7-4413-418c-b4c5-64955233d962.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/05cee7dc-aefe-4770-b4ae-cb27cdcdfed8.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/970b36cc-cbcc-405c-a976-4e88f56fe26a.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/962de062-a6a2-4889-86c1-ae3e8207bd4f.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/d0a3e31f-e37d-4965-a52e-51b19b1092c3.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/d6e40925-a396-4582-819e-5553772876cf.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/e841e0ae-08f5-4fcf-a66d-b1493e2860f9.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/51d14816-89c5-42f2-9d5a-f8f91804d9a8.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/4203caa0-3b3a-4eec-801b-ea34504bd19f.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/4203caa0-3b3a-4eec-801b-ea34504bd19f.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/eab416d1-942c-4f5e-98bb-e00212eaf1a1.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/c36c7426-a85b-4173-a555-116e023785c6.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/78ecc46c-9346-4b2d-8735-871eff664693.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/1c831b9d-37b8-4cb9-b04b-1ab2e222b15a.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/5942ec41-969e-4c42-b136-a05e7febb388.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/5e29b208-579d-42ab-a867-15adf70aefe8.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/9c38369a-07df-409f-96e5-34cb8ac30c04.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/d8ea2d92-a385-49d9-96f5-5c093f5d60c6.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/c7c4b8a7-7759-4678-9ca7-506571542b3c.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/963f38e7-2b11-487e-a869-15f9afddb479.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/ec085aa8-5d82-4add-85d4-455d3de71c00.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/b7e113cb-ec19-4b77-a6d1-9bc0f92b6769.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/9e57e538-d064-4b18-866a-79e550ef51c7.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/d1124778-1e9d-4637-a702-dcb09594d636.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/35d5c57f-9717-458e-9d09-6b0eeec85067.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/2061cb58-ce03-488b-b342-bc09bc4f08e3.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/cf6541db-9e7c-4065-98ba-cebd7206cf41.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/864929f3-2765-4306-a8b2-9f26abe23d3e.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/a6f1b25e-5418-4427-b628-7ba5928a1c61.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/c8307b9e-1332-4b63-8f38-7eb95066ca17.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/abd961d5-27da-4b0d-b155-3bc84ba23972.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/e2a3d279-7fa7-4491-85e9-8de5f85c735b.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/e2a3d279-7fa7-4491-85e9-8de5f85c735b.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/a6068e5b-84a5-4a95-953f-4b593c777639.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/1a1cc135-85aa-4d0e-80ca-5d1f6e05a8cc.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/57d2adb4-eb74-4580-9b53-b7b8bb94bdd7.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/49b3447d-c328-4535-b91e-7748870868c3.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/49b3447d-c328-4535-b91e-7748870868c3.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/e8a3202b-bbf6-472c-bf91-b3ff18a7cb2c.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/ae1f7534-d992-4f9a-a781-07cf48b9627c.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/5df82153-4b85-4d91-bcc2-3caebbffe0bd.jpg',
	'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ae88783a-9348-4c8c-8cd9-f66873cddc08/2dc397f1-d649-4db8-91dc-acfd1576d40f.jpg'
]
bgImg = imgArr[Math.floor(Math.random() * imgArr.length)];
$('.img').css('background-image', 'url(' + bgImg + ')');

$(function() {
	document.addEventListener('keydown', function(e) {
		e = window.event || e;
		var keycode = e.keyCode || e.which;
		if (e.ctrlKey && keycode == 83) { //屏蔽Ctrl+s 保存页面
			e.preventDefault();
			window.event.returnValue = false;
		}
		if (e.ctrlKey && keycode == 85) { //屏蔽Ctrl+u  查看页面的源代码
			e.preventDefault();
			window.event.returnValue = false;
		}
		if (keycode == 123) { //屏蔽F12
			e.preventDefault();
			window.event.returnValue = false;
		}
		if (e.ctrlKey && e.shiftKey && keycode == 73) { //屏蔽Ctrl+shift+i   屏蔽调出控制台 和F12一样
			e.preventDefault();
			window.event.returnValue = false;
		}
	});
});

$((function() {
	var callbacks = [],
		timeLimit = 50,
		open = false;
	setInterval(loop, 1);
	return {
		addListener: function(fn) {
			callbacks.push(fn);
		},
		cancleListenr: function(fn) {
			callbacks = callbacks.filter(function(v) {
				return v !== fn;
			});
		}
	}

	function loop() {
		var startTime = new Date();
		debugger;
		if (new Date() - startTime > timeLimit) {
			if (!open) {
				callbacks.forEach(function(fn) {
					fn.call(null);
				});
			}
			open = true;
			window.stop();
			alert('警告：请不要打开浏览器调试模式，否则网页无法正常工作！');
			document.body.innerHTML = "";
		} else {
			open = false;
		}
	}
})()).addListener(function() {
	window.location.reload();
});

$(function() {
	window.console && window.console.log(
		"%c\u004a\u0061\u0073\u006d\u0069\u006e\u0065\u0020\u4e3b\u9898%c",
		"color:#15c377; text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em",
		"font-size:12px;color:#15c377;");
	console.log("%c%c\u4e3b\u9898\u4f5c\u8005%c\u0051\u0049\u0053\u0041\u004e\u0053\u0055\u0049",
		"line-height:28px;",
		"line-height:28px;padding:4px;background:#222;color:#fff;font-size:16px;margin-right:15px",
		"color:#3fa9f5;line-height:28px;font-size:16px;");
	console.log(
		"%c%c\u7f51\u7ad9\u5730\u5740%c\u0057\u0057\u0057\u002e\u0051\u0049\u0053\u0041\u004e\u0053\u0055\u0049\u002e\u0043\u004e",
		"line-height:28px;",
		"line-height:28px;padding:4px;background:#222;color:#fff;font-size:16px;margin-right:15px",
		"color:#ff9900;line-height:28px;font-size:16px;");
	console.log(
		"%c%c\u4f01\u9e45\u53f7\u7801%c\u0031\u0030\u0037\u0033\u0031\u0039\u0037\u0038\u0030\u0038",
		"line-height:28px;",
		"line-height:28px;padding:4px;background:#222;color:#fff;font-size:16px;margin-right:15px",
		"color:#008000;line-height:28px;font-size:16px;");
	window.console && window.console.log(
		"%c\u5f53\u524d\u7248\u672c%c\u0056\u0032\u002e\u0032\u002e\u0030",
		"line-height:28px;padding:4px;background:#222;color:#fff;font-size:16px;margin-right:15px",
		"color:#ffaaff;line-height:28px;font-size:16px;");
	console.log(
		"%c \u6e29\u99a8\u63d0\u793a\uff1a\u53d1\u73b0\u0042\u0075\u0067\u8bf7\u53ca\u65f6\u8ddf\u6211\u53cd\u9988\u54e6\uff01\u0020\u0020\u8c22\u8c22\u0020\u0021",
		"font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;color:#c00;line-height: 28px;font-size: 14px;"
	);
	console.log(
		"%c \u0053\u0065\u0072\u0076\u0065\u0072\u0053\u0074\u0061\u0074\u0075\u0073\u0020\u002d\u0020\u004a\u0061\u0073\u006d\u0069\u006e\u0065\u0020\u4e3b\u9898\u6a21\u677f\u7531\u7941\u4e09\u5c81\u0028\u0051\u0049\u0053\u0041\u004e\u0053\u0055\u0049\u0029\u7ef4\u62a4\u0020\u0020\u0020\u0068\u0074\u0074\u0070\u003a\u002f\u002f\u0077\u0077\u0077\u002e\u0071\u0069\u0073\u0061\u006e\u0073\u0075\u0069\u002e\u0063\u006e\u002f",
		"font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;color:#c00;line-height: 28px;font-size: 14px;"
	);
});
