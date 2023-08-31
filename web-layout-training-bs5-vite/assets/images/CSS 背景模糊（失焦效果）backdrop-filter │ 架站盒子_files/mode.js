// Popup
$(".ok").click(function(){
$(".window").hide();
});

// Popup Img
$('img').attr("onclick","pupop(this)");
var pupopImgBox = document.getElementById('pupopImgBox');
var pupopImg = document.getElementById('pupopImg');
function pupop(e) {
	pupopImgBox.style.display = 'block';
	pupopImg.src = e.src;
	}
	pupopImgBox.onclick = function() {
	pupopImgBox.style.display = 'none';
}

// Menu -> fade
$('#categoryBox div').css({'opacity': '0'});
$("#categoryBtn").click(function(){
		$("#categoryBox").fadeIn();
		$('#categoryBox div').animate({top: '0',opacity:'1'},0);
	});
$("#CloseCategoryBox,#categoryBox").click(function(){
	$("#categoryBox").fadeOut();
	$('#categoryBox div').animate({top: '50px',opacity:'0'},0);
});

// Menu -> effect
$(function(){
	$('.lay1').on('mouseover',function(){
		fol = $(this).attr("id");
		lay2 = '.'+fol;
		$('.lay2').css('display','none');
		$(lay2).css('display','block');
		$('#categoryBox nav').css('background','rgb(0 20 38 / 97%)');
		$('#note_icon').css('display','block');
	});
	$('#cata_smallBox').on('mouseleave',function(){
		$('.lay2').css('display','none');
		$('#categoryBox nav').css('background','#00000000');
		$('#note_icon').css('display','none');
	});
});

// Google Search
var gscClose = true;
function search(){
		if(gscClose == true){
				$("#search").css("display","inline-block");
				$("#searchIcon").toggleClass("fa-search fa-times");
				gscClose = false;
		}else{
				$("#search").css("display","none");
				$("#searchIcon").toggleClass("fa-times fa-search");
				gscClose = true;
		}
}
	
// Liker && AD
var show = true;
$(window).scroll(function(){
	var pro = $("footer").offset().top;
	if (pro >= 100 && show == true){
		// $("#liker").html('<iframe data-v-b66e9a5a="" src="https://button.like.co/in/embed/kumo-tw/button?referrer=https://kumo.tw'+location.pathname+location.search+'" class="lc-margin-top-64 lc-margin-bottom-32 lc-mobile" frameborder="0" scrolling="no"></iframe>');
		// $('#liker').fadeIn('fast');

		show = false;
		$('#gad').html('<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2969778954609193" crossorigin="anonymous"></script>');
	}
});


// Code Style
var openCodeStyle  = false;
var showCode = true;
$(window).scroll(function(){
	if($("code").length>0){
		var codeBox = $("code").offset().top;
		var codeScro = $(document).scrollTop();
		var codeWin = $(window).height();
		if (Math.ceil(codeWin+codeScro)>=codeBox&&showCode==true){
		var timestamp = new Date().getTime();
		$('#script').html('<script src="/js/code.js?' + timestamp + '"><' + '/script>');
		showCode = false;
		openCodeStyle  = true;
	}
}});

// GotoTop
$(function(){
  $('#GotoTop').click(function() {
		$('html,body').animate({
			scrollTop: 0
		}, 333);
	});
    var docHeight = $(document.body).height();
  $('#GotoBottom').click(function() {
		$('html,body').animate({
			scrollTop:docHeight
		}, 333);
	});
  $(window).scroll(function() {
		if ($(this).scrollTop() > 50) {
			$('#Goto').fadeIn('fast');
		} else {
			$('#Goto').stop().fadeOut('fast');
		}
	});
});



// My word （完全隨機版）
// var sentence = [
// '每一個無私分享的背後，都有一段嘔心瀝血的旅程。',
// '寫程式的樂趣在於，當你說要有光，於是就有了光。',
// '我會燃燒自己，直到化為灰燼。',
// '每一個專家，都是從菜鳥開始。',
// '沒有人看也要寫，寫到不能動為止。',
// '我是時光的旅人，正與未來的你對話。',
// '前往巔峰的路上，誰不曾失望過。',
// '因為自己淋過雨，才懂得為別人撐傘。',
// '喧囂的城市，寂寞的王國。',
// '用拙劣的手，畫出理想的光。',
// '你會不會和我一樣，有理想卻看不見希望。',
// ];
// function getRandomInt(max) {
// 	return Math.floor(Math.random() * max);
// }
// var ranNum = getRandomInt(sentence.length);
// $('#sentence').html(sentence[ranNum]);
// var NumLog = ranNum;
// function runST() {
// 	ranNum = getRandomInt(sentence.length);
// 	if(ranNum == NumLog){
// 		runST();
// 	}else{
// 		NumLog = ranNum;
// 	}
// 	$('#sentence').html(sentence[ranNum]);
// }

// My word （首次隨機，之後按順序出現）
var sentence = [
'每一個無私分享的背後，都有一段嘔心瀝血的旅程。',
'寫程式的樂趣在於，當你說要有光，於是就有了光。',
'我會燃燒自己，直到化為灰燼。',
'每一個專家，都是從菜鳥開始。',
'沒有人看也要寫，寫到不能動為止。',
'我是時光的旅人，正與未來的你對話。',
'前往巔峰的路上，誰不曾失望過。',
'因為自己淋過雨，才懂得為別人撐傘。',
'喧囂的城市，寂寞的王國。',
'用拙劣的手，畫出理想的光。',
'你會不會和我一樣，有理想卻看不見希望。',
'如果可以萬人愛，誰喜歡萬人敵。',
];
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
var ranNum = getRandomInt(sentence.length);
$('#sentence').html(sentence[ranNum]);

function runST() {
	ranNum = ranNum+1;
	if(ranNum<sentence.length){
		$('#sentence').html(sentence[ranNum]);
	}else{
		ranNum = 0;
		$('#sentence').html(sentence[ranNum]);
	}
}


