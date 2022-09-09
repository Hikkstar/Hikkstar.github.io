const ham = $('#js-hamburger');
const nav = $('#js-nav');
ham.on('click', function () { 
  ham.toggleClass('active'); 
  nav.toggleClass('active'); 
});

$('#page-top').click(function () {
  $('body,html').animate({
      scrollTop: 0
  }, 500);
  return false;
});

particlesJS("particles-js", {
	"particles":{
		"number":{
			"value":500,
			"density":{
				"enable":true,
				"value_area":800
			}
		},
		"color":{
			"value":"#ffffff"
		},
		"shape":{
			"type":"circle",
			"stroke":{
				"width":0
			},
			},
		"opacity":{
			"value":1,
			"random":true,
			"anim":{
				"enable":true,
				"speed":3,
				"opacity_min":0,
				"sync":false
			}
		},
		"size":{
			"value":2,
			"random":true,
			"anim":{
				"enable":false,
				"speed":4,
				"size_min":0.3,
				"sync":false
			}
		},
		"line_linked":{
			"enable":false,
		},
		"move":{
			"enable":true,
			"speed":120,
		"direction":"none",
		"random":true,
		"straight":true,
			"out_mode":"out",
			"bounce":false,
			"attract":{
				"enable":false,
				"rotateX":600,
				"rotateY":600
			}
		}
	},
	"interactivity":{
		"detect_on":"canvas",
		"events":{
			"onhover":{
				"enable":false,
			},
			"onclick":{
				"enable":false,
			},
			"resize":true
		}
	},
	"retina_detect":true
});
