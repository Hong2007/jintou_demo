/**
 * Created by Administrator on 2016/9/12.
 */

$(function(){
    $('header nav ul li a:last').css('padding-right','0');      //nav导航
    //菜单栏显示隐藏
    $('.menu ul li').mouseover(function(){
       $(this).find('dl').show();
    });
    $('.menu ul li').mouseout(function(){
        $(this).find('dl').hide();
    });
});

/*首页左上角小banner滚动*/
jQuery(".s-banner").slide({titCell:".s-banner-hd ul li",mainCell:".s-banner-bd ul",effect:"left",autoPlay:true});

//首页热门问答
jQuery(".moveCut").slide({titCell:".title a",mainCell:".moveCut-bd",delayTime:0 });
jQuery(".moveCut-bd-list").slide({titCell:"h3",targetCell:"dl",trigger:"mouseover"});

//左侧大的图片滚动
jQuery(".left-banner").slide({ titCell:".left-banner-hd ul li",mainCell:".left-banner-bd ul",effect:"left",autoPlay:true});

//右侧排行榜
jQuery(".r-new-rank").slide({ titCell:".title3 a", mainCell:".new-rank-bd",delayTime:0 });

//2个标签的标签切换
jQuery(".tag-cut2").slide({titCell:".title2 a",mainCell:".tag-cut2-bd",delayTime:0 });

//右侧热门话题 左右切换
jQuery(".aboutSwitching").slide({mainCell:".aboutSwitching-bd .ulWrap",autoPage:true,effect:"left",autoPlay:true});



