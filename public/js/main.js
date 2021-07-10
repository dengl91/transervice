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

        var data = [60, 65, 60, 100, 60, 65, 40, 65, 60, 100, 60, 65, 65, 90, 65, 60, 65, 60, 65, 60, 90, 50, 60, 65];
        var $chart = $('.workload__data');
        $.each(data, function (index, value) {
            var $bar = $(document.createElementNS('http://www.w3.org/2000/svg', 'polygon')).attr({
                fill: '#55BC7E',
                points: '140 140 131 ' + (130 - value) + ' 150 ' + (130 - value),
                transform: 'rotate(' + index * 15 + ')'
            });
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

        if ($('#statChart').length) {
            var ctx = document.getElementById('statChart').getContext('2d');
            const DATA_COUNT = 12;
            const labels = [];
            for (let i = 0; i < DATA_COUNT; ++i) {
                labels.push(i.toString());
            }
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Пн', 'Пн 04:00', 'Пн 08:00', 'Пн 12:00', 'Пн 16:00', 'Пн 20:00', 'Вт', 'Вт', 'Вт', 'Вт', 'Вт', 'Вт', 'Вт', 'Вт', 'Ср', 'Ср', 'Ср', 'Ср', 'Ср', 'Ср', 'Ср', 'Ср', 'Чт', 'Чт', 'Чт', 'Чт', 'Чт', 'Чт', 'Чт', 'Чт', 'Пт', 'Пт', 'Пт', 'Пт', 'Пт', 'Пт', 'Пт', 'Пт', 'Сб', 'Сб', 'Сб', 'Сб', 'Сб', 'Сб', 'Сб', 'Сб', 'Вс', 'Вс', 'Вс', 'Вс', 'Вс', 'Вс', 'Вс', 'Вс'],
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
                        pointRadius: 3,
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
                                    return index % 8 === 0 ? this.getLabelForValue(val) : '';
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
                c.addEventListener("click", function (e) {
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
            a.addEventListener("click", function (e) {
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
})($);