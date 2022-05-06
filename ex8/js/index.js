var selected = '1';
var pic = 0;
var num = 0;

$(document).ready(function(){
    // $('.pic').hide();
    // $(".u-tl").click(function(){
    //     $("p").hide();
    // });
    $('body').on('click', '.u-tl', function(e){
        let t = e.currentTarget;
        let next = $(t).attr('data_id');
        console.log(next);
        // tab 颜色变换
        $(t).parent().find('.focus').removeClass('focus');
        $(t).addClass('focus');
        // 对应内容切换
        let contentList = $(t).parent().next().children();
        contentList.map((index,item)=>{
            let id = $(item).attr('data_id');
            if ( id === selected) {
                $(item).addClass('hide'); 
            }
            if ( id === next) {
                $(item).removeClass('hide'); 
            }
        })
        // 当前所处位置变化
        selected = next;
    });
    $('body').click(function(e) {
        if(selected === '1' || selected === '2' || selected === '3' ||  selected === '4'){
        if(pic==1){
            $('.pic').fadeOut(1000).ready(function(){
                pic = 0;
            });
        }
        }
    });
    $('body').on('click', '.bl', function(e){
        if(selected === '1' || selected === '2' || selected === '3' ||  selected === '4'){
        $('.pic.hide').removeClass('hide');
        let t = e.currentTarget;
        let next = $(t).attr('data_id');
        $('.txt').html(next);
        $('.pic').fadeIn(1000).ready(function(){
            pic = 1;
        })
        }
    });

    var index=1;
    $(".m-l").find("li").ready(function (){
        num = 0;
        $("li").each(function (){
            $(this).find(".m-l-index").text(index);
            if($(this).find(".m-l-index").length){
                num++;
            }
            index++
        });
        console.log(num);
        index = 1;
        $("li").each(function (){
            // $(this).find(".m-l-index1").text(index - num);
            ++index;
        });
    });
     $(".m-fun").click(function (){
        $(".m-l").append("<li class=\"m-bd\">\n" +
            "        <div class=\"m-l-index\"></div>\n" +
            "        <div class=\"m-l-fun\">Delete</div>\n" +
            "    </li>")
        $(".m-l").children().last().find(".m-l-index").text(index);
        index = 1;
        num = 0;
        $("li").each(function (){
            $(this).find(".m-l-index").text(index);
            if($(this).find(".m-l-index").length){
                num++;
            }
            index++
        });
        console.log(num);
        index = 1;
        $("li").each(function (){
            // $(this).find(".m-l-index1").text(index - num);
            ++index;
        });
    });

     $(".m-fun1").click(function (){
        $(".m-l").append("<li class=\"m-bd1\">\n" +
            "        <div class=\"m-l-index1\"></div>\n" +
            "        <div class=\"m-l-fun\">Delete</div>\n" +
            "    </li>")
        // $(".m-l").children().last().find(".m-l-index1").text(index);
        index = 1;
        num = 0;
        $("li").each(function (){
            $(this).find(".m-l-index").text(index);
            if($(this).find(".m-l-index").length){
                num++;
            }
            index++
        });
        console.log(num);
        index = 1;
        $("li").each(function (){
            // $(this).find(".m-l-index1").text(index - num);
            ++index;
        });
    });

    $(".m-l").on("click",".m-l-fun",function (){
        $(this).each(function (){
            $(this).parent().remove();
        });
        index = 1;
        num = 0;
        $("li").each(function (){
            $(this).find(".m-l-index").text(index);
            if($(this).find(".m-l-index").length){
                num++;
            }
            index++
        });
        console.log(num);
        index = 1;
        $("li").each(function (){
            // $(this).find(".m-l-index1").text(index - num);
            ++index;
        });
    });

});
