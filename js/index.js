//头部
(function(){
    var $header = $("#header"),
        $moreBtn = $header.find(".top-menu2 .more"),
        $hideCon = $header.find(".top-menu2 .more .hide");
    $moreBtn.click(function(){
        $hideCon.toggle();
    })
})();
//内容区 Banner
(function(){
    var $con = $("#container"),
        $swpList = $con.find(".swplist li"),
        $tabBtns = $con.find(".tab-btn span")
        index = 0,
        length = $swpList.length
        timer=null;
    $tabBtns.click(function(){
        if(index != $(this).index()){
            index = $(this).index();
            $(this).addClass("active").siblings().removeClass("active");
            $swpList.eq(index).fadeIn().siblings().fadeOut();
        }
    }) 
    function autoPlay(){
        index++;
        index%=length;
        $tabBtns.eq(index).addClass("active").siblings().removeClass("active");
        $swpList.eq(index).fadeIn().siblings().fadeOut();
    }
    timer = setInterval(autoPlay,5000);
    $con.hover(function(){
        clearInterval(timer)
    },function(){
        timer = setInterval(autoPlay,5000);
    })
})();
//经典案例
(function(){
    var $classic = $("#classic"),
        $lis = $lis = $classic.find(".classiclist>li"),
        $classicCon = $classic.find(".classic-con")
        $classicUl = $classic.find(".classiclist"),
        $navBtns = $classic.find(".nav-btn"),
        length = $lis.length,
        $tabBtns = $classicCon.find(".tab-btns span");
    var sideIndexL,sideIndexR,timer;
    var midIndex,conWidth,ulMarginL,moveWidth,mid,time = 0,left;
    midIndex = Math.floor(length/2);
    setTimeout(function(){
        classicLoad();
        $classicUl.animate({"opacity":1},300).css("marginLeft",ulMarginL + "px");
        changeClass();
    },300)
    //更改$classicUl的marginLeft
    function classicLoad(){
        conWidth = $classicCon.width();
        moveWidth = conWidth/Math.floor(conWidth/($lis.eq(0).width()/0.8));
        ulMarginL = -2*moveWidth;
        if($(window).width()<=880){
            ulMarginL = -3*moveWidth;
            if($(window).width()<=580){
                ulMarginL = -4*moveWidth;
            }
        }
    }
    //窗口大小改变
    $(window).resize(function(){
        clearInterval(timer);
        timer = setTimeout(function(){
            classicLoad();
            $classicUl.animate({"marginLeft":ulMarginL + "px"},300);
        },300)
    })
    // console.log($classicUl,moveWidth);
     function changeClass(){
            sideIndexL = midIndex-1;
            if(sideIndexL<0)sideIndexL = length-1;
            sideIndexR = midIndex+1;
            if(sideIndexR>=length)sideIndexR = 0;
            $lis.removeClass("mid sidem");
            $lis.eq(sideIndexL).addClass("sidem");
            $lis.eq(sideIndexR).addClass("sidem");
            $lis.eq(midIndex).addClass("mid");
            $tabBtns.removeClass("active");
            $tabBtns.eq(midIndex).addClass("active");
        }
    //点击切换
    $navBtns.click(function(){
        if(new Date() - time>350){
            if($(this).index(".nav-btn")){
                midIndex++;
                midIndex%=length;
                left = ulMarginL - moveWidth;
            }else{
                midIndex--;
                if(midIndex<0)midIndex = length-1;
                left = ulMarginL + moveWidth;
            } 
            change($(this));
            time = new Date();
        }
        //更改li属性和ul margin
       
        function change(that){
            changeClass();
            $classicUl.animate(
                {"marginLeft":left+"px"}
                ,300,function(){
                    if(that.index(".nav-btn")){
                        $classicUl.append($classicUl.children().first());
                    }else{
                        $classicUl.prepend($classicUl.children().last());
                    }
                    $classicUl.css("marginLeft",ulMarginL + "px");
                });
        }
    })
})()