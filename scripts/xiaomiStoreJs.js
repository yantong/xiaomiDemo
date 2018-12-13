$(function () {

    $("div.container").hover(function (e) {
        var shoppingCartTipContent =  $(this).find(".shoppingCartTip");

        if(!shoppingCartTipContent.is(':animated'))
            shoppingCartTipContent.slideDown(250);
    },function (e) {
        var shoppingCartTipContent =  $(this).find(".shoppingCartTip");

        if(!shoppingCartTipContent.is(':animated'))
            shoppingCartTipContent.stop(true);

            shoppingCartTipContent.slideUp(250);
        });

    $("input.searchContent").focus(function () {
        var searchInput =  $("input.search");
        var searchList = $("div.searchList");
        var searchKeyWord = $("div.searchKeyWord");

        $(this).toggleClass("inputFoucus");
        searchInput.toggleClass("inputFoucus");
        searchList.show();
        searchKeyWord.fadeOut('fast');
    });

    $("input.searchContent").blur(function () {
        var searchInput =  $("input.search");
        var searchList = $("div.searchList");
        var searchKeyWord = $("div.searchKeyWord");

        $(this).toggleClass("inputFoucus");
        searchInput.toggleClass("inputFoucus");
        searchList.hide();
        searchKeyWord.fadeIn('fast');
    });


    $("div.commodity").hover(function (e) {
        var commodityBar =  $('div.commodityBar');

        commodityBar.stop(true);
        if(!commodityBar.is(':animated'))
            commodityBar.slideDown(200);
    },function (e) {
        var commodityBar =  $('div.commodityBar');

        if(!commodityBar.is(':animated'))
            commodityBar.stop(true);

        commodityBar.slideUp(200);
    });


    $("div.commodityBar").hover(function (e) {
        $(this).stop(true);
        $(this).slideDown(200);
    },function (e) {
        if(!$(this).is(':animated'))
            $(this).stop(true);

        $(this).slideUp(200);
    });



    var commodityJson = {"commoditys":[
            [
                {
                    "tip":"新品",
                    "img":"https://i1.mifile.cn/f/i/g/2015/cn-index/qingchun-320.png",
                    "name":"小米8 青春版",
                    "price":"1399起"
                },
                {
                    "tip":"新品",
                    "img":"https://i1.mifile.cn/f/i/g/2015/cn-index/pingmu-320.png",
                    "name":"小米8 屏幕指纹版",
                    "price":"3199起"
                },
                {
                    "img":"https://i1.mifile.cn/f/i/g/2015/cn-index/pc-320-220-mi8.png",
                    "name":"小米8",
                    "price":"2499起"
                },
                {
                "img":"https://i1.mifile.cn/f/i/g/2015/cn-index/pc-320-220-mi8se.png",
                "name":"小米8 SE",
                "price":"1799起"
                },{
                    "img":"https://i1.mifile.cn/f/i/g/2015/cn-index/max3-320-220.png",
                    "name":"小米 MAX3",
                    "price":"1699起"
                },{
                    "img":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2s320-220white.png",
                    "name":"小米 MIX2S",
                    "price":"3299起"
                },
            ],
            [
                {
                    "tip":"新品",
                    "img":"https://i1.mifile.cn/f/i/g/2015/cn-index/6pro320-220.png",
                    "name":"红米6 Pro",
                    "price":"999起"
                },
                {
                    "tip":"新品",
                    "img":"https://i1.mifile.cn/f/i/g/2015/cn-index/666320.png",
                    "name":"红米6",
                    "price":"799起"
                },
                {
                    "tip":"新品",
                    "img":"https://i1.mifile.cn/f/i/g/2015/cn-index/6A320.png",
                    "name":"红米6A",
                    "price":"599起"
                },
                {
                "img":"https://i1.mifile.cn/f/i/g/2015/cn-index/note5-320-220.png",
                "name":"红米Note 5",
                "price":"1099起"
                },
                {
                    "img":"https://i1.mifile.cn/f/i/g/2015/cn-index/s2-320-220.png",
                    "name":"红米S 2",
                    "price":"999起"
                },{
                    "img":"https://i1.mifile.cn/f/i/g/2015/cn-index/5P-320-220.png",
                    "name":"红米5 Plus",
                    "price":"999起"
                },
            ],
            [
                {
                    "tip":"新品",
                    "img":"https://i1.mifile.cn/f/i/g/2015/cn-index/75.png",
                    "name":"小米电视4 75英寸",
                    "price":"8999起"
                },
                {
                    "tip":"热卖",
                    "img":"https://i1.mifile.cn/f/i/g/2015/cn-index/32.png",
                    "name":"小米电视4A 32英寸",
                    "price":"879起"
                },
                {
                    "tip":"新品",
                    "img":"https://i1.mifile.cn/f/i/g/2015/cn-index/4a43.png",
                    "name":"小米电视4A 43英寸青春版",
                    "price":"1399起"
                },
            ]
        ]};


    $("div.commodity ul li").hover(function (e) {
        $("div.commodity ul li").removeClass('selCommodity');
        $(this).addClass('selCommodity');

        var index = $(this).index();
        var commodityLi =  $("div.commodityBar ul li");

        if(index < commodityJson['commoditys'].length)
        {
            for(var i = 0;i < 6;i ++)
            {
                if(i < commodityJson['commoditys'][index].length)
                {
                    var tip = commodityJson['commoditys'][index][i]["tip"];
                    var img = commodityJson['commoditys'][index][i]["img"];
                    var name = commodityJson['commoditys'][index][i]["name"];
                    var price = commodityJson['commoditys'][index][i]["price"];

                    $(commodityLi[i]).css("display","list-item");

                    if(tip)
                        $(commodityLi[i]).find(".commodityTip").html(tip);
                    $(commodityLi[i]).find(".commodityImg img").attr("src",img);
                    $(commodityLi[i]).find(".commodityName a").html(name);
                    $(commodityLi[i]).find(".commodityPrice").html(price);
                }
                else
                {
                    $(commodityLi[i]).css("display","none");
                }

            }
        }
    },function (e) {
        $(this).removeClass('selCommodity');
    });

    $(".commodityVerList ul.galleryIndexUl li").hover(function () {
        $(".galleryIndexUl .commodityTable").css("display","none");
        $(this).find(".commodityTable").css("display","block");
    },function () {
        $(this).find(".commodityTable").css("display","none");
    });

    var gallery = ["https://i1.mifile.cn/a4/xmad_15378467732264_teNrT.jpg","https://i1.mifile.cn/a4/xmad_15375484770035_SxAhy.jpg",
    "https://i1.mifile.cn/a4/xmad_15375140108369_uWNiF.jpg","https://i1.mifile.cn/a4/xmad_15338982727289_EhONt.jpg",
        "https://i1.mifile.cn/a4/xmad_15378443895565_OKGhS.jpg"];
    var showImg = 0;
    var galleryTimer;
    var backA = $(".commodityGallery .backA");
    var fontA = $(".commodityGallery .fontA");
    var backImg = $(".commodityGallery .backA img");
    var fontImg = $(".commodityGallery .fontA img");
    var gallaryIndicators = $(".commodityGallery li.galleryIndex");

    var toNextOrForwardImg = function (nextOrFor) {
        if(nextOrFor == "next")
            showImg == 9 ? showImg = 0 : showImg ++;
        else
            showImg == 0 ? showImg = 9 : showImg --;

        if(showImg%2 == 0)
        {
            fontImg.attr("src",gallery[showImg%5]);
            fontA.fadeIn();
            backA.fadeOut();
        }
        else
        {
            backImg.attr("src",gallery[showImg%5]);
            fontA.fadeOut();
            backA.fadeIn();
        }

        gallaryIndicators.removeClass("currentLi");
        $(gallaryIndicators[showImg%5]).addClass("currentLi");
    }
    var startGalleryAni = function(){
        galleryTimer = setInterval(function () {
            toNextOrForwardImg("next");
        },3000);
    };

    startGalleryAni();

    $(".commodityGallery .leftDir").hover(function () {
        clearInterval(galleryTimer);
    },function () {
        startGalleryAni();
    }).click(function () {
        if(!backA.is(':animated') && !fontA.is(':animated'))
            toNextOrForwardImg("forward");
    });

    $(".commodityGallery .rightDir").hover(function () {
        clearInterval(galleryTimer);
    },function () {
        startGalleryAni();
    }).click(function () {
        if(!backA.is(':animated') && !fontA.is(':animated'))
            toNextOrForwardImg("next");
    });


    var time = $(".xiaomiBuy .bottomBar span.endTag");
    var timeHour = $(time[0]);
    var timeMin = $(time[1]);
    var timeSec = $(time[2]);

    setInterval(function () {
        var hour = parseInt(timeHour.text());
        var min = parseInt(timeMin.text());
        var sec = parseInt(timeSec.text());

        sec ++;
        if(sec == 60)
        {
            sec = 0;
            min ++;

            if(min == 60)
            {
                min = 0;
                hour ++;
            }

            if(hour == 24)
                hour = 0;
        }

        timeHour.text((hour < 10 ? '0' : '') + hour);
        timeMin.text((min < 10 ? '0' : '')  + min);
        timeSec.text((sec < 10 ? '0' : '')  + sec);
    },1000);

    $(".xiaomiBuy .scrollR").click(function () {
        var ul = $(".scrollBar ul");
        var ulW = (Math.floor(ul.find('li').length/4 - 1) * 4 + ul.find('li').length%4) * (234 + 14);
        var x = getTransformTranslate(ul);
        var transX = 992;

        if(x - transX < -ulW)
        {
            transX = x + ulW;
            $('.topBar .buttonDiv button.scrollR').addClass('disabledBt');
        }
        else
            $('.topBar .buttonDiv button.scrollR').removeClass('disabledBt');

        $('.topBar .buttonDiv button.scrollL').removeClass('disabledBt');

        ul.css({'transform':'translateX(' + (x - transX) + 'px)'});

    });

    $(".xiaomiBuy .scrollL").click(function () {
        var ul = $(".scrollBar ul");
        var x = getTransformTranslate(ul);
        var transX = 992;

        if(x + transX >= 0)
        {
            transX = -x;
            $('.topBar .buttonDiv button.scrollL').addClass('disabledBt');
        }
        else
            $('.topBar .buttonDiv button.scrollL').removeClass('disabledBt');

        $('.topBar .buttonDiv button.scrollR').removeClass('disabledBt');

        ul.css({'transform':'translateX(' + (x + transX) + 'px)'});
    });

    function getTransformTranslate(ctr) {
        var reg=/matrix.(((-)?([0-9]+.)?\d+([, ]+)?){6})./g;
        var str= ctr.css("transform");
        var arr=reg.exec(str);
        if(arr)
        {
            var newarr = arr[0].split(/[, ]+/g);
            return parseInt(newarr[4]);
        }
        else
            return 0;
    }
});