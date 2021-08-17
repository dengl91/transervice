// main script

(function ($) {
    $(document).ready(function () {

        $('[data-toggle]').on('click', function () {
            $(this).addClass('active').siblings().removeClass('active');
        });

        $('[data-active]').on('click', function () {
            $(this).toggleClass('active');
        });

        $('[data-control]').on('click', function () {
            let target = $(this).data('control');
            $('.' + target).toggleClass('active');
        });

        $('[data-navfor]').on('click', function () {
            let target = $(this).data('navfor');
            let index = $(this).index();
            $('.' + target).eq(index).addClass('active').siblings().removeClass('active');
        });

        $('[data-collapse]').on('click', function () {
            $(this).closest('.collapse').toggleClass('active');
        });

        $('[data-readmore]').on('click', function () {
            $(this).toggleText('Читать дальше', 'Свернуть');
            $(this).closest('.declaration__item').toggleClass('active');
        });

        $('[data-edit]').on('click', function () {
            $(this).closest('[class*=item]').find('.declaration__intro').attr('contentEditable', 'true').focus();
            $(this).closest('[class*=item]').addClass('editable');
            $(this).closest('[class*=item]').next('.btns').addClass('active');
        });

        $('[data-edit-cancel]').on('click', function () {
            $(this).closest('.btns').prev('[class*=item]').find('.declaration__intro').attr('contentEditable', 'false');
            $(this).closest('.btns').prev('[class*=item]').removeClass('editable');
            $(this).closest('.btns').removeClass('active');
        });

        $('.declaration__intro').on('focus', function() {
            var cell = this;
            // select all text in contenteditable
            // see http://stackoverflow.com/a/6150060/145346
            var range, selection;
            if (document.body.createTextRange) {
              range = document.body.createTextRange();
              range.moveToElementText(cell);
              range.select();
            } else if (window.getSelection) {
              selection = window.getSelection();
              range = document.createRange();
              range.selectNodeContents(cell);
              selection.removeAllRanges();
              selection.addRange(range);
            }
        });

        $('[data-delete]').on('click', function () {
            $('.modal--declaration-delete').addClass('active');
        });

        $.fn.extend({
            toggleText: function(a, b){
                return this.text(this.text() == b ? a : b);
            }
        });

        $('textarea[name=declaration]').keyup( function() {
            let height = this.scrollHeight + 'px';
            $(this).css('height', height);
            $('.manager-declaration__input').css('height', height);
        });

        // menu-btn

        $('.menu-btn').on('click', function () {
            $(this).toggleClass('active');
            $('.nav').toggleClass('active');
            $('body').toggleClass('unscroll');
            $('.banner').toggleClass('blur');
        });

        // table menu

        $('body').on('click', function(e) {
            if ( $(e.target).closest('.table__btn').length ) return;
            $('.table__btn').removeClass('active');
            $('.table__menu').removeClass('active');
            if ( $(e.target).closest('.note.active').length ) return;
            $('.note.active').blur().removeClass('active').attr('readonly', true);
        });

        $('.table__btn').on('click', function () {
            $(this).toggleClass('active');
            $(this).find('.table__menu').toggleClass('active');
        });

        $('.table__menu-item').on('click', function () {
            $('.table__btn').removeClass('active');
            $('.table__menu').removeClass('active');
        });

        $('[data-note]').on('click', function() {
            $(this).closest('.table__row').find('.note').addClass('active').attr('readonly', false).focus().select();
        });

        $(document).keyup(function(e) {
            if ( e.key === "Enter" || e.key === "Escape" ) {
                $('.note.active').blur().removeClass('active').attr('readonly', true);
            }
        });

        // header

        if ( $(window).scrollTop() > 0 ) {
            $('.header').addClass('scroll');
        }

        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if ( scroll > 0 ) {
                $('.header').addClass('scroll');
            } else {
                $('.header').removeClass('scroll');
            }
        });

        // checkbox

        $('.checkbox').on('click', function () {
            if ($(this).find('input').is(':checked')) {
                $(this).find('input').attr('checked', false);
            } else {
                $(this).find('input').attr('checked', true);
            }
            if ($(this).parent().find('[data-carbrand] input:checked').length > 1) {
                $('[data-single-model]').hide();
            } else {
                $('[data-single-model]').show();
            }
        });

        // datepicker

        if ($('[data-datepicker]').length) {
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

        var data = [70, 65, 60, 70, 60, 65, 60, 65, 60, 80, 60, 65, 70, 80, 65, 60, 65, 60, 58, 70, 65, 80, 70, 60];
        var $chart = $('.workload__chart');
        $.each(data, function (index, value) {
            var $bar = document.createElement('div');
            $bar.setAttribute('style', 'height: ' + value * 1.2 + 'px; transform: rotate(' + 15 * index + 'deg)');
            $chart.append($bar);
        });

        // graph

        // var data = [80, 78, 65, 70, 72, 74, 78, 72, 64, 60, 62, 68, 64, 62, 60, 58, 56, 54, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 68, 64, 62, 60, 58, 60, 80, 78, 65, 70, 72, 74, 78, 72, 64, 60, 62, 68, 64, 62, 60, 58, 56, 54, 52, 54, 56, 58, 60, 62, 64, 66, 68, 80, 78, 65, 70, 72, 74, 78, 72, 64, 60, 62, 68, 64, 62, 60, 58, 56, 54, 52, 54, 56, 58, 60, 62, 64, 66, 68, 80, 78, 65, 70, 72, 74, 78, 72, 64, 60, 62, 68, 64, 62, 60, 58, 56, 54, 52, 54, 56, 58, 60, 62, 64, 66, 68, 80, 78, 65, 70, 72, 74, 78, 72, 64, 60, 62, 68, 64, 62, 60, 58, 56, 54, 52, 54, 56, 58, 60, 62, 64, 66, 68, 72, 64, 60, 62, 68, 64, 62, 60, 58, 56, 54, 52, 54, 56, 58, 60, 72, 64, 60, 62, 68, 64, 62, 60, 58, 56, 54, 52, 54, 56, 58, 60, 64, 66, 68, 72, 64, 60, 62, 68, 64, 62, 60, 58, 56, 54, 52, 54, 56, 58];
        // var $graph = $('.graph__data');
        // $.each(data, function (index, value) {
        //     if (data[index + 1]) {
        //         let $line = $(document.createElementNS('http://www.w3.org/2000/svg', 'path')).attr({
        //             stroke: '#55BC7E',
        //             d: 'M' + 3.78 * index + ',' + (300 - (value * 3)) + ' L' + 3.78 * (index + 1) + ',' + (300 - (data[index + 1] * 3))
        //         });
        //         $graph.append($line);
        //     }
        //     let $big_round = $(document.createElementNS('http://www.w3.org/2000/svg', 'circle')).attr({
        //         class: 'big-round',
        //         fill: '#55BC7E1a',
        //         cx: 3.78 * index,
        //         cy: (290 - (value * 3)),
        //         r: 10,
        //         data: value
        //     });
        //     $graph.append($big_round);
        //     let $round = $(document.createElementNS('http://www.w3.org/2000/svg', 'circle')).attr({
        //         class: 'small-round',
        //         fill: '#55BC7E',
        //         stroke: '#fff',
        //         cx: 3.78 * index,
        //         cy: (300 - (value * 3)),
        //         r: 8
        //     });
        //     $graph.append($round);
        //     let $value = $(document.createElementNS('http://www.w3.org/2000/svg', 'text')).attr({
        //         fill: '#333',
        //         x: 3.78 * index,
        //         y: (290 - (value * 3))
        //     });
        //     $value.text(value);
        //     $graph.append($value);
        // });

        // $('.big-round').hover(function () {
        //     let value = $(this).attr('data');
        //     let scale = $('.graph__data').innerWidth() / 670;
        //     let width = 140 * scale;
        //     let height = 140 * scale;
        //     console.log($(this).attr('cx'));
        //     let top = $(this).attr('cy') * scale + 'px';
        //     let left = $(this).attr('cx') * scale - width + 'px';
        //     $('.workload__bubble').text(value).css('width', width).css('height', height).css('top', top).css('left', left);
        // }, function () {
        //     $('.workload__bubble').css('left', -100);
        // });

        // chart

        if ( $('#statChart').length ) {
            var ctx = document.getElementById('statChart').getContext('2d');
            const DATA_COUNT = 12;
            const labels = [];
            for (let i = 0; i < DATA_COUNT; ++i) {
                labels.push(i.toString());
            }
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Пн', 'Пн', 'Пн', 'Пн', 'Пн', 'Пн', 'Пн', 'Пн', 'Вт', 'Вт', 'Вт', 'Вт', 'Вт', 'Вт', 'Вт', 'Вт', 'Ср', 'Ср', 'Ср', 'Ср', 'Ср', 'Ср', 'Ср', 'Ср', 'Чт', 'Чт', 'Чт', 'Чт', 'Чт', 'Чт', 'Чт', 'Чт', 'Пт', 'Пт', 'Пт', 'Пт', 'Пт', 'Пт', 'Пт', 'Пт', 'Сб', 'Сб', 'Сб', 'Сб', 'Сб', 'Сб', 'Сб', 'Сб', 'Вс', 'Вс', 'Вс', 'Вс', 'Вс', 'Вс', 'Вс', 'Вс'],
                    datasets: [{
                        data: [80, 78, 65, 70, 72, 74, 78, 72, 64, 60, 62, 68, 64, 62, 60, 58, 56, 54, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 68, 64, 62, 60, 58, 60, 80, 78, 65, 70, 72, 74, 78, 72, 64, 60, 62, 68, 64, 62, 60, 58, 56, 54, 52, 54, 56, 58, 60, 62, 64, 66, 68, 80, 78, 65, 70, 72, 74, 78, 72, 64, 60, 62, 68, 64, 62, 60, 58, 56, 54, 52, 54, 56, 58, 60, 62, 64, 66, 68, 80, 78, 65, 70, 72, 74, 78, 72, 64, 60, 62, 68, 64, 62, 60, 58, 56, 54, 52, 54, 56, 58, 60, 62, 64, 66, 68, 80, 78, 65, 70, 72, 74, 78, 72, 64, 60, 62, 68, 64, 62, 60, 58, 56, 54, 52, 54, 56, 58, 60, 62, 64, 66, 68, 72, 64, 60, 62, 68, 64, 62, 60, 58, 56, 54, 52, 54, 56, 58, 60, 72, 64, 60, 62, 68, 64, 62, 60, 58, 56, 54, 52, 54, 56, 58, 60, 64, 66, 68, 72, 64, 60, 62, 68, 64, 62, 60, 58, 56, 54, 52, 54, 56, 58],
                        label: 'Регистраций в очереди',
                        backgroundColor: '#55BC7E',
                        borderColor: '#55BC7E',
                        borderWidth: 3,
                        borderRadius: 24,
                        tension: 0.4,
                        fill: false,
                        pointStyle: 'circle',
                        pointRadius: 2,
                    }]
                },
                options: {
                    responsive: true,
                    interaction: {
                        intersect: false,
                        mode: 'index',
                    },
                    scales: {
                        x: {
                            ticks: {
                                callback: function (val, index) {
                                    // Hide the label of every 8nd dataset
                                    return index % 4 === 0 ? this.getLabelForValue(val) : '';
                                }
                            }
                        },
                        y: {
                            beginAtZero: true,
                            suggestedMin: 0,
                            suggestedMax: 100
                        }
                    },
                    plugins: {
                        tooltip: {
                            titleColor: '#1a1a1a',
                            bodyColor: '#1a1a1a',
                            backgroundColor: '#fff',
                            usePointStyle: true,
                        },
                        legend: {
                            display: false
                        }
                    },
                }
            });
        }

        // phonemask

        var user_phone = document.querySelector('[name=userphone]');
        var maskOptions = {
            mask: '+7 (000) 000-00-00',
            lazy: false
        } 
        if ( user_phone ) {
            var mask = new IMask(user_phone, maskOptions);
        }

        // populate filter

        let queryString = window.location.search;
        let urlParams = new URLSearchParams(queryString);
        let brands = urlParams.getAll('brand') + '';
        brands = brands.split(',');
        $.each(brands, function (index, brand) {
            $('[data-carbrand] .checkbox__label').each(function () {
                let checkbox_value = $(this).text();
                if (checkbox_value == brand) {
                    $(this).prev().attr('checked', true);
                }
            });
        });
        let ukr = urlParams.get('ukr');
        if (ukr == 1) {
            $('[data-ukr] input').attr('checked', true);
        }
        let fueltypes = urlParams.getAll('fueltype') + '';
        fueltypes = fueltypes.split(',');
        $.each(fueltypes, function (index, fueltype) {
            $('[data-fueltype] .checkbox__label').each(function () {
                let checkbox_value = $(this).text();
                if (checkbox_value == fueltype) {
                    $(this).prev().attr('checked', true);
                }
            });
        });

        // faq

        $('.faq__question').on('click', function () {
            $(this).closest('.faq__item').toggleClass('active');
        });

        // homesearch

        $('[data-homesearch] select').on('change', function () {
            homesearch();
        });
        $('[data-homesearch] input').on('keyup', function (e) {
            homesearch();
            console.log(e.key);
            if (e.key == 'Enter') {
                location.href = $('.search__link').attr('href');
            }
        });

        function homesearch() {
            let base = '/product/?';
            let brand = $('select[name=brand]').val();
            let model = $('select[name=model]').val();
            let year_start = $('input[name=year_start]').val();
            let year_end = $('input[name=year_end]').val();
            let price_start = $('input[name=price_start]').val();
            let price_end = $('input[name=price_end]').val();
            let query_link = base;
            if (brand) {
                query_link += 'brand=' + brand;
            }
            if (model) {
                query_link += '&model=' + model;
            }
            if (price_start) {
                query_link += '&price_start=' + price_start;
            }
            if (price_end) {
                query_link += '&price_end=' + price_end;
            }
            if (year_start) {
                query_link += '&year_start=' + year_start;
            }
            if (year_end) {
                query_link += '&year_end=' + year_end;
            }
            $('.search__link').attr('href', query_link);
        }

        // forms

        $('.form--request').on('submit', function (e) {
            e.preventDefault();
            console.log('Sent');
            $.ajax({
                type: "POST",
                url: '/api/mail-order-call.php',
                data: $(this).serialize()
            }).done(function (result) {
                window.location.href = '/thank-you/';
            }).fail(function () {
                alert('Произошла ошибка');
            });
        });

        $('.form--partner').on('submit', function (e) {
            e.preventDefault();
            console.log('Sent');
            $.ajax({
                type: "POST",
                url: '/api/mail-partner.php',
                data: $(this).serialize()
            }).done(function (result) {
                window.location.href = '/thank-you/';
            }).fail(function () {
                alert('Произошла ошибка');
            });
        });

        // modal

        $('.modal').mousedown(function (e) {
            if (e.target !== this) return;
            $(this).removeClass('active');
        });

        $('.modal__close').on('click', function () {
            $(this).closest('.modal').removeClass('active');
        });

        $('.modal [data-close]').on('click', function () {
            $(this).closest('.modal').removeClass('active');
        });

        // Lazy and counters

        $(window).scroll(function () {
            $('[data-count]').each(function () {
                let target = $(this);
                if (isOnScreen(target) && !target.hasClass('counted')) {
                    countUp(target);
                    target.addClass('counted');
                }
            });
            $('[data-width]').each(function () {
                let target = $(this);
                if (isOnScreen(target) && !target.hasClass('counted')) {
                    setWidth(target);
                    target.addClass('counted');
                }
            });
            $('[data-src]').each(function () {
                let target = $(this);
                if (isOnScreen(target) && !target.hasClass('counted')) {
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
            if (totalCount >= defaultCount) {
                target.text(parseFloat(defaultCount).toFixed());
                setTimeout(() => {
                    countUp(target);
                }, 100);
            } else {
                return;
            }
        }

        function isOnScreen(elem) {
            if (elem.length == 0) {
                return;
            }
            var $window = $(window)
            var viewport_top = $window.scrollTop()
            var viewport_height = $window.height()
            var viewport_bottom = (viewport_top + viewport_height) * 1.1
            var $elem = $(elem)
            var top = $elem.offset().top
            var height = $elem.height()
            var bottom = top + height

            return (top >= viewport_top && top < viewport_bottom) ||
                (bottom > viewport_top && bottom <= viewport_bottom) ||
                (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
        }

        // Tabs

        $('.tab-nav--control .tab-nav__item').on('click', function () {
            $(this).addClass('active').siblings().removeClass('active');
            let index = $(this).index();
            $(this).closest('section').find('.tab-nav__content').removeClass('active');
            $(this).closest('section').find('.tab-nav__content').eq(index).addClass('active');
        });

    });
})( jQuery );