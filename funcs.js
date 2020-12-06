$(document).ready(function(){
    $('.header_burger').click(function(event){
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(window).scroll(function() {
    if($(this).scrollTop() != 0) {
    $('.toTop').fadeIn();
    } else {
    $('.toTop').fadeOut();
    }
});

$(document).ready(function(){
    $('.toTop').click(function(event) {
        $('body,html').animate({scrollTop:0},700);
    });
});

function widget(words){
    (function (w) {
        function start() {
            w.removeEventListener("YaMarketAffiliateLoad", start);
            for (var i = 0; i < words.length; i++){
                w.YaMarketAffiliate.createWidget({
                    containerId: "marketWidget" + (i + 1),
                    type: "models",
                    params: {
                        clid: 2310490,
                        searchText: words[i],
                        themeId: 5,
                        themeBackgroundColor: "rgba(0,0,0,0)"
                    }
                });
            }
        }
        w.YaMarketAffiliate
        ? start()
        : w.addEventListener("YaMarketAffiliateLoad", start);
    })(window);
}
