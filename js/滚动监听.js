 $.fn.scrollUnique = function () {
            return $(this).each(function () {
                var eventType = 'mousewheel';
                if (document.mozHidden !== undefined) {
                    eventType = 'DOMMouseScroll';
                }
                $(this).on(eventType, function (event) {
                    // 一些数据
                    var scrollTop = this.scrollTop,
                        scrollHeight = this.scrollHeight,
                        height = this.clientHeight;
                    var delta = (event.originalEvent.wheelDelta) ? event.originalEvent.wheelDelta : -(event.originalEvent.detail || 0);

                    if ((delta > 0 && scrollTop <= delta) || (delta < 0 && scrollHeight - height - scrollTop <= -1 * delta)) {
                        // IE浏览器下滚动会跨越边界直接影响父级滚动，因此，临界时候手动边界滚动定位
                        this.scrollTop = delta > 0 ? 0 : scrollHeight;
                        // 向上滚 || 向下滚
                        event.preventDefault();
                    }
                });
            });
        };
        $('nav').scrollUnique();

        $(window).scroll(function () {
            var scrolltop = $('body').scrollTop();
            var height1 = $('body').get(0).scrollHeight; //内容的总高度
            var cwidth = $('body').get(0).clientWidth;
            var cheight = $('body').get(0).clientHeight;
            var searchheight = $('header').get(0).scrollHeight;
            var h = cwidth / 6;
            if (scrolltop == (height1 - cheight)) {
                alert('到底了');
            }
            // 监听滚动高度改变左边导航栏的高度
            if (scrolltop > h) {
                $('nav').css('margin-top', '-10vw');
            }
            else {
                $('nav').css('margin-top', '0vw');
            }

            if (scrolltop == 0) {
                clean();
                $('nav ul').children('li').eq(0).children('a').addClass('isclicked');
            }
            else {
                var sectionheight = $('section').get(0).scrollHeight;
                var itemnum = $('nav ul').children('li').length;
                var oneheight = (height1) / itemnum;
                var totalheight = sectionheight * 13;

                // 调用样式改变选中的样式
                choose(Math.floor((scrolltop - searchheight) / oneheight));
                // console.log(searchheight + '平均高度' + oneheight + '\n页面高度' + height1 + '\n滚动高度' + scrolltop + '个数:' + itemnum + '\n每个高度' + sectionheight + '\n总高度：' + totalheight);
            }

        });
        // 改变选中样式
        function choose(event) {
            if (event >= 11) {
                var h1 = $('nav').get(0).scrollHeight;
                var h2 = $('nav').get(0).clientHeight;
                $('nav').get(0).scrollTop = h1 - h2;
            }
            else {
                $('nav').get(0).scrollTop = 0;

            }
            clean();
            $('nav ul').children('li').eq(event + 1).children('a').addClass('isclicked');
        }
        // 清除左边被选中项目的样式
        function clean() {
            $('.isclicked').removeClass('isclicked');
        }
        