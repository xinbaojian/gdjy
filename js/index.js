$(function(){
	//导航
	$(".nav li").hover(
	  function () {
	    $(this).find(".menu_nav,.survey_menu_nav").stop().slideDown(500);
	  },
	  function () {
	    $(this).find(".menu_nav,.survey_menu_nav").stop().slideUp(10);
	}); 
	//协会领导选项卡区域
	$(".nav_leader_slide").slide({ 
		titCell:".hd li" , 
		mainCell:".bd" , 
		autoPage:false,
	});
	$(".nav_leader_list").slide({
		mainCell:"ul",
		autoPlay:true,
		interTime:6000,
	});
	$(".survey_menu_nav").hide();
	//banner
	var swiper = new Swiper('.banner .swiper-container', {
        watchSlidesProgress: true,
        spaceBetween: 10, 
        slidesPerView: "auto",
        centeredSlides: true,
		loop: true,
		loopedSlides:3,
        speed:700,
        autoplay: {
            delay: 9000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.banner .swiper-button-next',
            prevEl: '.banner .swiper-button-prev',
		},
		pagination: {
			el: '.banner .swiper-pagination',
			clickable: true,
		},
		on: {
			progress: function(progress) {
				for (i = 0; i < this.slides.length; i++) {
					var slide = this.slides.eq(i);
					var slideProgress = this.slides[i].progress;
					modify = 1;
					if (Math.abs(slideProgress) > 1) {
						modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
					}
					translate = slideProgress * modify * 260 + 'px';
					scale = 1 - Math.abs(slideProgress) / 5;
					zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
					slide.transform('translateX(' + translate + ') scale(' + scale + ')');
					slide.css('zIndex', zIndex);
					slide.css('opacity', 1);
					if (Math.abs(slideProgress) > 3) {
						slide.css('opacity', 0);
					}
				}
			},
			setTransition: function(transition) {
				for (var i = 0; i < this.slides.length; i++) {
					var slide = this.slides.eq(i)
					slide.transition(transition);
				}
	
			}
		}	
	});
	//首页新闻选项卡
	$(".news_tab").slide({ 
		titCell:".hd li" , 
		mainCell:".bd" , 
		autoPage:false,
		effect:"left",
	});
	//友情链接
	$(".link_section").slide({ 
		titCell:".hd li" , 
		mainCell:".bd" , 
		autoPage:false,
		effect:"left",
	});
	$(".link_list").slide({
		mainCell:"ul",
		autoPlay:true,
		effect:"left",
		interTime:6000,
	});
	//国际交流轮播
	$(".international_slide").slide({ 
		mainCell:".bd ul", 
		effect:"fade", 
		autoPlay:true, 
		easing:"easeOutCirc",
		interTime:3000,
	});
	//合作
	$(".cooperation_section").slide({ 
		titCell:".hd li" , 
		mainCell:".bd" , 
		autoPage:false,
	});
	//会刊
	var swiper = new Swiper('.proceedings_slide .swiper-container', {
		slidesPerView: 4,
		spaceBetween: 89,
		speed:700,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
		navigation: {
		  nextEl: '.proceedings_slide .swiper-button-next',
		  prevEl: '.proceedings_slide .swiper-button-prev',
		},
	});
	//副会长
	var swiper = new Swiper('.page_leader_slide .swiper-container', {
		slidesPerView: 5,
		spaceBetween: 27,
		speed:700,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
		navigation: {
		  nextEl: '.page_leader_slide .swiper-button-next',
		  prevEl: '.page_leader_slide .swiper-button-prev',
		},
	});
	
});