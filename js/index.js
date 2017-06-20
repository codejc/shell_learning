
// 响应首页搜索栏 随着滚动变色
function change() {
    var scolltop = document.body.scrollTop;
    var num = scolltop / 30;
    $('.home_page').css('background-color', 'rgba(255,165,0,' + num * 0.1 + ')');
}
// 响应底部导航栏的点击事件
$('.home').click(function () {
    clicked(this);
    $('iframe').attr("src", "首页.html");
});
$('.classify').click(function () {
    clicked(this);
    $('iframe').attr("src", "分类.html");
});
$('.shopcar').click(function () {
    clicked(this);
    $('iframe').attr("src", "购物车.html");
}); 
$('.mine').click(function () {
    clicked(this);
    $('iframe').attr("src", "我的.html");
});
// 为点击的选项添加样式
function clicked(obj) {
    clean();
    $("." + obj.className + ' div').addClass(obj.className + '_click').removeClass(obj.className + '_img');
    $(obj).css('color', 'orange');
    $('.isclicked').removeClass('isclicked');
    $(obj).addClass('isclicked');
}
// 为没有被点击的选项清除样式
function clean() {
    var a = $('.isclicked').children('div').attr('class');
    var str = a.split('_');
    $('.isclicked').children('div').attr('class', str[0] + '_img');
    $('.isclicked').css('color', 'black');

    console.log(str[0]);
}
