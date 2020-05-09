var days = 3;
var hrs = 23;
var mins =59;
var secs =59;
let ch =100;
let sideBarWidth = $(".side-bar").innerWidth();
let menuBarWidth = $(".menu-bar").innerWidth();
let allWidth = menuBarWidth - sideBarWidth;
let openWidth = $(".open").innerWidth();
let divWidth = allWidth-openWidth;
$(".open").click(function(){
    $(".menu-bar").animate({left:divWidth},1000)
})
$(".side-bar i").click(function () {
    $(".menu-bar").animate({left:'-237px'},1000)
});
let singer =$(".singer");
singer.click(function(){
    $(this).find('p').slideToggle(1000).end().siblings().find('p').slideUp(1000);
    
})
function clockCounter()
{
    secs--;
    if(secs < 0)
    {
        mins--;
        secs=59;
        if(mins < 0)
        {
            hrs--;
            mins=59;
            if(hrs < 0)
            {
                days--;
                hrs=23;
                clearInterval(x);
                // setInterval(clockCounter,200)
            }
        }
    }
    
    $("#sec").html(secs);
    $("#min").html(mins);
    $("#hrs").html(hrs);
    $("#days").html(days);
}
let x = setInterval(clockCounter , 1000);
$("#msg").keypress(function(){
    ch--;
    if(ch <= 0)
    {
        $(".char-count").html("your available character finished ");
        $("#msg").addClass("is-invalid");
        $("#msg").removeClass("is-valid");
    }
    else
    {
        $(".char-count").html(ch);
        $("#msg").addClass("is-valid");
        $("#msg").removeClass("is-invalid");
    }
})
$("a").click(function(){
    let aHref = $(this).attr("href");
    let sectionOffset = $(aHref).offset().top;
    $("body,html").animate({scrollTop: sectionOffset},1000);
})