/**
 * Created by Administrator on 2017/3/11.
 */

//part1
(function () {
    var $content = $('#maincon');
    var $mainc1 =$content.find('.maincon-m1');
    $(window).resize(part1H);
    part1H();
    function part1H(){
        var winH = $(window).height();
        $mainc1.height(winH - parseFloat($content.css('margin')));
    }
})();

//part5
(function(){
    var $maincon = $("#maincon"),
        $lis = $maincon.find(".maincon-m5 .m5-itemlist li"),
        $bgBox =$maincon.find(".maincon-m5 .m5-itemlist .bgimg")
        index = 0,
        timer = null,
        length = $lis.length,
        timer1 = null;
        change();
        $(window).resize(function(){
            clearInterval(timer1);
            timer1 = setTimeout(function(){
                $bgBox.css("backgroundPositionY",-index*$bgBox.width()+"px");
            },100)
        })
        function change(){
            $lis.eq(index).addClass("active").siblings().removeClass("active");
            $bgBox.css("backgroundPositionY",-index*$bgBox.width()+"px");
        }
        $lis.click(function(){
            index = $(this).index();
            change();
        })
        timer = setInterval(function(){
            index++;
            index = index%length;
            change();
        },4000)
})();
//点击运动
(function(){
    var $part = $("#maincon").find(".maincon-m");
    $part.find(".nav-arrow").click(function(){
        var index = $(this).parents(".maincon-m").index(".maincon-m");
        var scrollTop = $part.eq(index+2).offset().top -
         ($(window).height()-$part.eq(index+2).height()+72)/2;
        $("body,html").animate({
            scrollTop : scrollTop
        },800);
    })
})()
/*
//part按钮点击事件
(function () {
    var $part = $("#content .part");
    $part.find(".btn").click(function () {
        var index = $(this).parents('.part').index('.part');
        var scrollTop = $part.eq(index+1).offset().top - ($(window).height()-$part.eq(index+1).height()+71)/2;
        $("body,html").animate({
            scrollTop : scrollTop
        },800);
    });
})();*/
