// main script

(function($) {
    $(document).ready(function() {

        $('[data-toggle]').on('click', function() {
            $(this).addClass('active').siblings().removeClass('active');
        });

        $('[data-active]').on('click', function() {
            $(this).toggleClass('active');
        });

        $('[data-control]').on('click', function() {
            let target = $(this).data('control');
            $('.' + target).toggleClass('active');
        });

        $('[data-navfor]').on('click', function() {
            let target = $(this).data('navfor');
            let index  = $(this).index();
            $('.' + target).eq(index).addClass('active').siblings().removeClass('active');
        });

        // menu-btn

        $('.menu-btn').on('click', function() {
            $(this).toggleClass('active');
            $('.nav').toggleClass('active');
            $('body').toggleClass('unscroll');
            $('.banner').toggleClass('blur');
        });

        // checkbox

        $('.checkbox').on('click', function() {
            if ( $(this).find('input').is(':checked') ) {
                $(this).find('input').attr('checked', false);
            } else {
                $(this).find('input').attr('checked', true);
            }
            if ( $(this).parent().find('[data-carbrand] input:checked').length > 1 ) {
                $('[data-single-model]').hide();
            } else {
                $('[data-single-model]').show();
            }
        });

        // datepicker

        if ( $('[data-datepicker]').length ) {
            $datepicker = $('[data-datepicker]').datepicker({
                autoClose: true,
                position: 'bottom right',
                onSelect: function (dateText, inst) {
                    let date = dateText;
                    console.log(date);
                }
            });

            $('#date_to').data('datepicker').selectDate(new Date());
        }

        // chart

        var data = [60, 80, 60, 100, 60, 80, 40, 80, 60, 100, 60, 80, 80, 90, 80, 60, 80, 60, 80, 60, 90, 50, 60, 80];
        var $chart = $('.workload__data');
        $.each(data, function(index, value) {
            var $bar = $(document.createElementNS('http://www.w3.org/2000/svg', 'polygon')).attr({
                fill: '#55BC7E',
                points: '140 140 131 ' + (130 - value) + ' 150 ' + (130 - value),
                transform: 'rotate(' + index * 15 + ')'
            });
            $chart.append($bar);
        });

        // graph

        var data = [60, 80, 60, 70, 60, 80, 60, 60, 80, 60, 70, 60, 80];
        var $graph = $('.graph__data');
        $.each(data, function(index, value) {
            if ( data[index + 1] ) {
                let $line = $(document.createElementNS('http://www.w3.org/2000/svg', 'path')).attr({
                    stroke: '#55BC7E',
                    d: 'M' + 60 * index + ',' + (300 - (value * 3)) + ' L' + 60 * (index + 1) + ',' + (300 - (data[index + 1] * 3))
                });
                $graph.append($line);
            }
            let $big_round = $(document.createElementNS('http://www.w3.org/2000/svg', 'circle')).attr({
                class: 'big-round',
                fill: '#55BC7E1a',
                cx: 60 * index,
                cy: (290 - (value * 3)),
                r: 40,
                data: value
            });
            $graph.append($big_round);
            let $round = $(document.createElementNS('http://www.w3.org/2000/svg', 'circle')).attr({
                class: 'small-round',
                fill: '#55BC7E',
                stroke: '#fff',
                cx: 60 * index,
                cy: (300 - (value * 3)),
                r: 8
            });
            $graph.append($round);
            let $value = $(document.createElementNS('http://www.w3.org/2000/svg', 'text')).attr({
                fill: '#333',
                x: 60 * index,
                y: (290 - (value * 3))
            });
            $value.text(value);
            $graph.append($value);
        });

        $('.big-round').hover(function() {
            let value  = $(this).attr('data');
            let scale  = $('.graph__data').innerWidth() / 670;
            let width  = 140 * scale;
            let height = 140 * scale;
            console.log($(this).attr('cx'));
            let top    = $(this).attr('cy') * scale + 'px';
            let left   = $(this).attr('cx') * scale - width + 'px';
            $('.workload__bubble').text(value).css('width', width).css('height', height).css('top', top).css('left', left);
        }, function() {
            // $('.workload__bubble').css('left', -100);
        });

        // filter

        $('[data-carbrand]').on('click', function() {
            $('select[name=model] option').remove();
            $('select[name=model]').append('<option value="">Любая</option>');
            if ( $(this).parent().find('input:checked').length == 1 ) {
                let query = $(this).parent().find('input:checked').next().text();
                $.getJSON('/api/get_models.php?brand=' + query, function(carmodels) {
                    $.each( carmodels, function( index, carmodel ) {
                        $('select[name=model]').append('<option value="' + carmodel.split(' ')[0] + '">' + carmodel + '</option>');
                    });
                });
            }
        });

        $('[data-homebrand]').change( function() {
            $('select[name=model] option').remove();
            $('select[name=model]').append('<option value="">Любая</option>');
            let query = $(this).val();
            $.getJSON('/api/get_models.php?brand=' + query, function(carmodels) {
                $.each( carmodels, function( index, carmodel ) {
                    $('select[name=model]').append('<option value="' + carmodel.split(' ')[0] + '">' + carmodel + '</option>');
                });
            });
        });

        $('.custom-select').on('click', function() {
            $(this).find('select').trigger('change');
        });

        $('[data-filter]').on('click', function() {
            let query = $(this).data('filter');
            $('.auto__content').hide();
            $('.auto__content[data-' + query + ']').show();
        });

        $('.search .checkbox').on('click', function() {
            filter_link();
        });

        $('select[name=model], select[name=cartype]').on('change', function() {
            filter_link();
        });

        $('input[name=price_start]').keyup(function() {
            if ( $(this).val().length > 2 || $(this).val().length == 0 ) {
                filter_link();
            }
        });

        $('input[name=price_end]').keyup(function() {
            if ( $(this).val().length > 2 || $(this).val().length == 0 ) {
                filter_link();
            }
        });

        $('input[name=year_start]').keyup(function() {
            if ( $(this).val().length == 4 ) {
                filter_link();
            }
        });

        $('input[name=year_end]').keyup(function() {
            if ( $(this).val().length == 4 ) {
                filter_link();
            }
        });

        $('.catalog').on('click', '[data-showmore]', function() {
            filter_link( true );
        });

        $('select[name=sort]').on('change', function() {
            filter_link();
        });

        function filter_link( $cars ) {
            if ( $('body').hasClass('home') ) return;
            let base          = '/product/';
            let query_link;
            let brands        = [];
            let transmissions = [];
            let fueltypes     = [];
            $('[data-carbrand] input:checked').each(function() {
                let brand = $(this).next().text().replace(' ', '%20');
                brands.push(brand);
            });
            $('[data-transmission] input:checked').each(function() {
                let transmission = $(this).next().text();
                transmissions.push(transmission);
            });
            $('[data-fueltype] input:checked').each(function() {
                let fueltype = $(this).next().text();
                fueltypes.push(fueltype);
            });
            let model       = $('select[name=model]').val();
            let price_start = $('input[name=price_start]').val();
            let price_end   = $('input[name=price_end]').val();
            let year_start  = $('input[name=year_start]').val();
            let year_end    = $('input[name=year_end]').val();
            let cartype     = $('select[name=cartype]').val();
            let cars        = $('[data-showmore]').data('showmore');
            let ukr         = 0;
            if ( $('[data-ukr] input').prop('checked') ) {
                ukr         = 1;
            }
            if ( $cars != true ) {
                cars        = $('[data-showmore]').data('showmore') - 16;
            }
            let sort        = $('select[name=sort]').val();
            query_link = base;
            if ( brands.length > 0 ) {
                query_link += '?brand=' + brands.join(',');
            }
            if ( model ) {
                query_link += '&model=' + model;
            }
            if ( price_start ) {
                query_link += '&price_start=' + price_start;
            }
            if ( price_end ) {
                query_link += '&price_end=' + price_end;
            }
            if ( year_start ) {
                query_link += '&year_start=' + year_start;
            }
            if ( year_end ) {
                query_link += '&year_end=' + year_end;
            }
            if ( cartype ) {
                query_link += '&cartype=' + cartype;
            }
            if ( transmissions.length > 0 ) {
                query_link += '&transmission=' + transmissions.join(',');
            }
            if ( fueltypes.length > 0 ) {
                query_link += '&fueltype=' + fueltypes.join(',');
            }
            if ( ukr ) {
                query_link += '&ukr=' + ukr;
            }
            if ( sort != 'date' ) {
                query_link += '&sort=' + sort;
            }
            $('.banner').load( query_link + ' .banner > *' );
            $('.page__outro').load( query_link + ' .page__outro > *' );
            $('#catalog').addClass('loading');
            $('#catalog').load( query_link + ' #catalog > *', function() {
                $('#catalog').removeClass('loading');
                $('[data-showmore]').hide();
            });
            window.history.pushState( 'data', 'Title', query_link );
        }

        $('.search__search').on('keyup', function() {
            let query = $(this).val().toLowerCase();
            $(this).next().find('.checkbox').hide();
            $(this).next().find('.checkbox__label').each(function() {
                let checkbox_value = $(this).text().toLowerCase();
                if ( checkbox_value.indexOf(query) >= 0 ) {
                    $(this).closest('.checkbox').show();
                }
            });
        });

        // populate filter

        let queryString = window.location.search;
        let urlParams = new URLSearchParams(queryString);
        let brands = urlParams.getAll('brand') + '';
        brands = brands.split(',');
        $.each( brands, function( index, brand ) {
            $('[data-carbrand] .checkbox__label').each(function() {
                let checkbox_value = $(this).text();
                if ( checkbox_value == brand ) {
                    $(this).prev().attr('checked', true);
                }
            });
        });
        let ukr = urlParams.get('ukr');
        if ( ukr == 1 ) {
            $('[data-ukr] input').attr('checked', true);
        }
        let fueltypes = urlParams.getAll('fueltype') + '';
        fueltypes = fueltypes.split(',');
        $.each( fueltypes, function( index, fueltype ) {
            $('[data-fueltype] .checkbox__label').each(function() {
                let checkbox_value = $(this).text();
                if ( checkbox_value == fueltype ) {
                    $(this).prev().attr('checked', true);
                }
            });
        });

        // faq

        $('.faq__question').on('click', function() {
            $(this).closest('.faq__item').toggleClass('active');
        });

        // homesearch

        $('[data-homesearch] select').on('change', function() {
            homesearch();
        });
        $('[data-homesearch] input').on('keyup', function(e) {
            homesearch();
            console.log(e.key);
            if ( e.key == 'Enter' ) {
                location.href = $('.search__link').attr('href');
            }
        });

        function homesearch() {
            let base        = '/product/?';
            let brand       = $('select[name=brand]').val();
            let model       = $('select[name=model]').val();
            let year_start  = $('input[name=year_start]').val();
            let year_end    = $('input[name=year_end]').val();
            let price_start = $('input[name=price_start]').val();
            let price_end   = $('input[name=price_end]').val();
            let query_link  = base;
            if ( brand ) {
                query_link += 'brand=' + brand;
            }
            if ( model ) {
                query_link += '&model=' + model;
            }
            if ( price_start ) {
                query_link += '&price_start=' + price_start;
            }
            if ( price_end ) {
                query_link += '&price_end=' + price_end;
            }
            if ( year_start ) {
                query_link += '&year_start=' + year_start;
            }
            if ( year_end ) {
                query_link += '&year_end=' + year_end;
            }
            $('.search__link').attr('href', query_link);
        }

        // forms

        $('.form--request').on('submit', function(e) {
            e.preventDefault();
            console.log('Sent');
            $.ajax({
                type: "POST",
                url: '/api/mail-order-call.php',
                data: $(this).serialize()
            }).done(function(result) {
                window.location.href = '/thank-you/';
            }).fail(function() {
                alert('Произошла ошибка');
            });
        });

        $('.form--partner').on('submit', function(e) {
            e.preventDefault();
            console.log('Sent');
            $.ajax({
                type: "POST",
                url: '/api/mail-partner.php',
                data: $(this).serialize()
            }).done(function(result) {
                window.location.href = '/thank-you/';
            }).fail(function() {
                alert('Произошла ошибка');
            });
        });

        // modal

        $('.modal').mousedown( function(e) {
            if (e.target !== this) return;
            $(this).removeClass('active');
        });

        $('.modal__close').on('click', function() {
            $(this).closest('.modal').removeClass('active');
        });

        $('.modal [data-close]').on('click', function() {
            $(this).closest('.modal').removeClass('active');
        });

        // Lazy and counters

        $(window).scroll( function() {
            $('[data-count]').each(function () {
                let target = $(this);
                if ( isOnScreen(target) && !target.hasClass('counted') ) {
                    countUp(target);
                    target.addClass('counted');
                }
            });
            $('[data-width]').each(function () {
                let target = $(this);
                if ( isOnScreen(target) && !target.hasClass('counted') ) {
                    setWidth(target);
                    target.addClass('counted');
                }
            });
            $('[data-src]').each(function () {
                let target = $(this);
                if ( isOnScreen(target) && !target.hasClass('counted') ) {
                    let src = $(this).data('src');
                    $(this).attr('src', src);
                    target.addClass('counted');
                }
            });
        });

        function countUp(target) {
            let defaultCount = parseFloat(target.text());
            let totalCount = target.data('count');
            let increaser = Math.floor(totalCount / 20);
            defaultCount = defaultCount + increaser;
            if ( totalCount >= defaultCount ) {
                target.text(parseFloat(defaultCount).toFixed());
                setTimeout(() => {
                    countUp(target);
                }, 100);
            } else {
                return;
            }
        }

        function isOnScreen(elem) {
            if ( elem.length == 0 ) {
                return;
            }
            var $window = $(window)
            var viewport_top = $window.scrollTop()
            var viewport_height = $window.height()
            var viewport_bottom = ( viewport_top + viewport_height ) * 1.1
            var $elem = $(elem)
            var top = $elem.offset().top
            var height = $elem.height()
            var bottom = top + height
        
            return (top >= viewport_top && top < viewport_bottom) ||
            (bottom > viewport_top && bottom <= viewport_bottom) ||
            (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
        }

        // Tabs

        $('.tab-nav--control .tab-nav__item').on('click', function() {
            $(this).addClass('active').siblings().removeClass('active');
            let index = $(this).index();
            $(this).closest('section').find('.tab-nav__content').removeClass('active');
            $(this).closest('section').find('.tab-nav__content').eq(index).addClass('active');
        });

        // Custom select

        var x, i, j, selElmnt, a, b, c;
        /*look for any elements with the class "custom-select":*/
        x = document.getElementsByClassName("custom-select");
        for (i = 0; i < x.length; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        /*for each element, create a new DIV that will act as the selected item:*/
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        /*for each element, create a new DIV that will contain the option list:*/
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < selElmnt.length; j++) {
            /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function(e) {
                /*when an item is clicked, update the original select box,
                and the selected item:*/
                var y, i, k, s, h;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                h = this.parentNode.previousSibling;
                for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                    y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function(e) {
            /*when the select box is clicked, close any other select boxes,
            and open/close the current select box:*/
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
            });
        }
        function closeAllSelect(elmnt) {
        /*a function that will close all select boxes in the document,
        except the current select box:*/
        var x, y, i, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        for (i = 0; i < y.length; i++) {
            if (elmnt == y[i]) {
            arrNo.push(i)
            } else {
            y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
            }
        }
        }
        /*if the user clicks anywhere outside the select box,
        then close all select boxes:*/
        document.addEventListener("click", closeAllSelect);

    });
})( $ );