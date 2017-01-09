var guideTpl = require("../templates/guide.string");

SPA.defineView("guide",{
	html:guideTpl,
	//引入安装插件——delegated事件代理
	plugins:["delegated"],
	
	//绑定点击事件
	bindActions:{		
		"goto.index":function(){
			SPA.open("index");
		}
	},
	//视图生命周期事件绑定
	bindEvents:{
		//视图展示完成之后触发的事件
		show:function(){
			//测试console.log(Swiper)
			var mySwiper = new Swiper('.swiper-container', {
				loop:false,//禁止循环
			});
		}
	}
});
