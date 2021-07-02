var portArr = [
    ['p001', 'Odessa', 'Одесса', 'Savannah', '47', '975', '975', '1475', '550', '550', 'Савана'],
    ['p002', 'Odessa', 'Одесса', 'Newark', '47', '975', '975', '1475', '550', '550', 'Ньюарк'],
    ['p003', 'Odessa', 'Одесса', 'LAngeles', '70', '1200', '1250', '1950', '550', '550', 'Лос Анджелес'],
    ['p004', 'Odessa', 'Одесса', 'Indianapolis', '60', '1100', '1150', '1700', '550', '550', 'Чикаго'],
    ['p005', 'Odessa', 'Одесса', 'Houston', '55', '1100', '1150', '1700', '550', '550', 'Хьюстон'],

    ['p006', 'Bremen', 'Бремен', 'Savannah', '25', '900', '800', '1100', '350', '350', 'Савана'],
    ['p007', 'Bremen', 'Бремен', 'Newark', '25', '900', '800', '1100', '350', '350', 'Ньюарк'],
    ['p008', 'Bremen', 'Бремен', 'LAngeles', '35', '1100', '1250', '1550', '550', '550', 'Лос Анджелес'],
    ['p009', 'Bremen', 'Бремен', 'Indianapolis', '30', '1000', '950', '1250', '450', '450', 'Чикаго'],
    ['p010', 'Bremen', 'Бремен', 'Houston', '30', '1000', '950', '1250', '450', '450', 'Хьюстон'],

    ['p011', 'Klaipeda', 'Клайпеда', 'Savannah', '40', '975', '1275', '1475', '600', '450', 'Савана'],
    ['p012', 'Klaipeda', 'Клайпеда', 'Newark', '45', '975', '1275', '1475', '600', '450', 'Ньюарк'],
    ['p013', 'Klaipeda', 'Клайпеда', 'LAngeles', '65', '1450', '1750', '1950', '800', '650', 'Лос Анджелес'],
    ['p014', 'Klaipeda', 'Клайпеда', 'Indianapolis', '50', '1200', '1500', '1700', '700', '550', 'Чикаго'],
    ['p015', 'Klaipeda', 'Клайпеда', 'Houston', '50', '1200', '1500', '1700', '700', '550', 'Хьюстон']
];

var sityArr = [
    ["sn001", "Abilene", "Houston", 5, 400],
    ["sn002", "Akron-Canton", "Newark", 6, 475],
    ["sn003", "Albany", "Newark", 4, 325],
    ["sn004", "Albuquerque", "Houston", 7, 550],
    ["sn005", "Adamsburg", "Newark", 6, 500],
    ["sn006", "Altoona", "Newark", 5, 425],
    ["sn007", "Amarillo", "Houston", 7, 500],
    ["sn008", "Anaheim", "LAngeles", 2, 200],
    ["sn009", "Anchorage*", "LAngeles", "call", 2000],
    ["sn010", "Appleton", "Indianapolis", 4, 450],
    ["sn011", "Ashland", "Savannah", 7, 650],
    ["sn012", "Ashville", "Savannah", 5, 400],
    ["sn013", "Atlanta", "Savannah", 4, 305],
    ["sn014", "Austin", "Houston", 3, 275],
    ["sn015", "Avenel", "Newark", 2, 200],
    ["sn016", "Bakersfield", "LAngeles", 4, 275],
    ["sn017", "Baltimore", "Newark", 4, 325],
    ["sn018", "Baton Rouge", "Houston", 4, 375],
    ["sn019", "Billings", "Indianapolis", 13, 1100],
    ["sn020", "Birmingham", "Savannah", 6, 425],
    ["sn021", "Boise", "Indianapolis", 9, 775],
    ["sn022", "Boston", "Newark", 5, 375],
    ["sn023", "Bowling Green", "Savannah", 8, 575],
    ["sn024", "Bridgeport PA", "Newark", 4, 275],
    ["sn025", "Buckhannon", "Newark", 9, 675],
    ["sn026", "Buffalo", "Newark", 5, 450],
    ["sn027", "Burlington", "Newark", 6, 475],
    ["sn028", "Central New Jersey", "Newark", 2, 185],
    ["sn029", "Chambersburg", "Newark", 5, 400],
    ["sn030", "Charleston SC", "Savannah", 3, 250],
    ["sn031", "Charleston WV", "Newark", 9, 675],
    ["sn032", "Charlotte", "Savannah", 5, 375],
    ["sn033", "Chattanooga", "Savannah", 6, 425],
    ["sn034", "Chicago", "Indianapolis", 2, 250],
    ["sn035", "China Grove", "Savannah", 4, 350],
    ["sn036", "Cincinnati", "Newark", 8, 575],
    ["sn037", "Clearwater", "Savannah", 5, 400],
    ["sn038", "Cleveland", "Newark", 6, 475],
    ["sn039", "Colton", "LAngeles", 2, 250],
    ["sn040", "Columbia MO", "Indianapolis", 5, 525],
    ["sn041", "Columbia SC", "Savannah", 4, 300],
    ["sn042", "Columbus OH", "Indianapolis", 5, 400],
    ["sn043", "Concord NC", "Savannah", 5, 375],
    ["sn044", "Corpus Christi", "Houston", 4, 275],
    ["sn045", "Culpeper", "Newark", 6, 450],
    ["sn046", "Dallas", "Houston", 3, 275],
    ["sn047", "Danville", "Newark", 6, 475],
    ["sn048", "Dayton", "Indianapolis", 5, 400],
    ["sn049", "Davenport", "Indianapolis", 4, 450],
    ["sn050", "Denver", "Houston", 8, 675],
    ["sn051", "Des Moines", "Indianapolis", 5, 475],
    ["sn052", "Detroit", "Newark", 6, 475],
    ["sn053", "Dothan", "Savannah", 5, 375],
    ["sn054", "Dundalk MD", "Newark", 4, 350],
    ["sn055", "East Bay", "LAngeles", 5, 375],
    ["sn056", "East Bethel", "Indianapolis", 5, 400],
    ["sn057", "El Paso", "Houston", 7, 500],
    ["sn058", "Eldridge", "Indianapolis", 5, 350],
    ["sn059", "Erie", "Newark", 7, 525],
    ["sn060", "Eugene", "LAngeles", 8, 575],
    ["sn061", "Fargo", "Indianapolis", 7, 950],
    ["sn062", "Fayetteville", "Houston", 6, 475],
    ["sn063", "Flint", "Newark", 6, 550],
    ["sn064", "Fontana", "LAngeles", 2, 175],
    ["sn065", "Fort Pierce", "Savannah", 5, 365],
    ["sn066", "Fort Worth", "Houston", 3, 350],
    ["sn067", "Fort Myers", "Savannah", 5, 400],
    ["sn068", "Fort Wayne", "Indianapolis", 4, 350],
    ["sn069", "Fremont", "LAngeles", 5, 350],
    ["sn070", "Fresno", "LAngeles", 5, 350],
    ["sn071", "Glassboro", "Newark", 3, 200],
    ["sn072", "Graham", "LAngeles", 8, 675],
    ["sn073", "Grand Rapids", "Newark", 14, 675],
    ["sn074", "Greensboro", "Savannah", 5, 375],
    ["sn075", "Greenville", "Savannah", 4, 325],
    ["sn076", "Greer", "Savannah", 5, 375],
    ["sn077", "Grenada", "Houston", 6, 475],
    ["sn078", "Gulf Coast", "Houston", 7, 500],
    ["sn079", "Hampton", "Newark", 6, 475],
    ["sn080", "Hammond", "Indianapolis", 2, 200],
    ["sn081", "Harrisburg", "Newark", 4, 300],
    ["sn082", "Hartford", "Newark", 4, 300],
    ["sn083", "Hawaii", "LAngeles", "call", 1875],
    ["sn084", "Hayward", "LAngeles", 5, 350],
    ["sn085", "Helena", "Indianapolis", 12, 1150],
    ["sn086", "High Desert", "LAngeles", 3, 250],
    ["sn087", "Houston", "Houston", 2, 175],
    ["sn088", "Huntsville", "Savannah", 5, 350],
    ["sn089", "Indianapolis", "Indianapolis", 3, 250],
    ["sn090", "Iona", "Indianapolis", 5, 500],
    ["sn091", "Jackson MS", "Houston", 6, 475],
    ["sn092", "Jacksonville", "Savannah", 3, 275],
    ["sn093", "Kansas City", "Houston", 6, 475],
    ["sn094", "Kincheloe", "Indianapolis", 13, 975],
    ["sn095", "Knoxville", "Savannah", 5, 425],
    ["sn096", "Lafayette", "Houston", 4, 350],
    ["sn097", "Lansing", "Newark", 8, 625],
    ["sn098", "Las Vegas", "LAngeles", 5, 375],
    ["sn099", "Laurel", "Newark", 4, 325],
    ["sn100", "Lexington", "Savannah", 7, 500],
    ["sn101", "Lincoln IL", "Indianapolis", 4, 300],
    ["sn102", "Lincoln NE", "Indianapolis", 7, 600],
    ["sn103", "Little Rock", "Houston", 6, 475],
    ["sn104", "Long Island", "Newark", 3, 250],
    ["sn105", "Longview", "Houston", 4, 300],
    ["sn106", "Los Angeles", "LAngeles", 2, 200],
    ["sn107", "Louisville", "Savannah", 7, 500],
    ["sn108", "Lubbock", "Houston", 7, 500],
    ["sn109", "Lufkin", "Houston", 3, 275],
    ["sn110", "Lyman", "Newark", 6, 450],
    ["sn111", "Madison", "Indianapolis", 4, 350],
    ["sn112", "Macon, GA", "Savannah", 4, 305],
    ["sn113", "Manchester NH", "Newark", 6, 425],
    ["sn114", "Martinez", "LAngeles", 4, 350],
    ["sn115", "Mc. Allen", "Houston", 5, 375],
    ["sn116", "Mebane", "Savannah", 5, 350],
    ["sn117", "Memphis", "Newark", 7, 510],
    ["sn118", "Metro DC", "Savannah", 5, 350],
    ["sn119", "Miami", "Savannah", 6, 425],
    ["sn120", "Milwaukee", "Indianapolis", 3, 350],
    ["sn121", "Minneapolis", "Indianapolis", 5, 475],
    ["sn122", "Missoula", "Indianapolis", 12, 1100],
    ["sn123", "Mobile", "Savannah", 6, 425],
    ["sn124", "Montgomery", "Savannah", 6, 425],
    ["sn125", "Nashville", "Savannah", 6, 475],
    ["sn126", "New Castle", "Newark", 4, 325],
    ["sn127", "New Orleans", "Houston", 5, 350],
    ["sn128", "Newburg", "Newark", 3, 250],
    ["sn129", "North Hollywood", "LAngeles", 3, 250],
    ["sn130", "Northern New Jersey", "Newark", 2, 175],
    ["sn131", "Northern Virginia", "Newark", 6, 450],
    ["sn132", "Ocala", "Savannah", 4, 325],
    ["sn133", "Oklahoma City", "Houston", 6, 450],
    ["sn134", "Omaha", "Indianapolis", 7, 650],
    ["sn135", "Orlando", "Savannah", 5, 350],
    ["sn136", "Paducah", "Savannah", 9, 675],
    ["sn137", "Pasco", "LAngeles", 9, 750],
    ["sn138", "Pensacola", "Savannah", 6, 425],
    ["sn139", "Peoria", "Indianapolis", 4, 275],
    ["sn140", "Permian Basin", "Houston", 6, 475],
    ["sn141", "Philadelphia", "Newark", 3, 275],
    ["sn142", "Phoenix", "LAngeles", 5, 375],
    ["sn143", "Pittsburg", "Newark", 6, 475],
    ["sn144", "Portage", "Indianapolis", 4, 375],
    ["sn145", "Portland", "LAngeles", 8, 600],
    ["sn146", "Portland-Gorham", "Newark", 7, 500],
    ["sn147", "Pulaski", "Newark", 6, 450],
    ["sn148", "Punta Gorda", "Savannah", 6, 425],
    ["sn149", "Raleigh", "Savannah", 4, 325],
    ["sn150", "Rancho Cucamonga", "LAngeles", 2, 200],
    ["sn151", "Reno", "LAngeles", 7, 520],
    ["sn152", "Richmond", "Newark", 5, 360],
    ["sn153", "Rochester", "Newark", 6, 425],
    ["sn154", "Rosedale", "Newark", 4, 325],
    ["sn155", "Sacramento", "LAngeles", 5, 375],
    ["sn156", "Salt Lake City", "LAngeles", 7, 550],
    ["sn157", "San Antonio", "Houston", 4, 275],
    ["sn158", "San Bernardino", "LAngeles", 3, 200],
    ["sn159", "San Diego", "LAngeles", 4, 275],
    ["sn160", "San Jose", "LAngeles", 5, 350],
    ["sn161", "Santa Paula", "LAngeles", 4, 300],
    ["sn162", "Savannah", "Savannah", 2, 180],
    ["sn163", "Scranton", "Newark", 4, 325],
    ["sn164", "Seattle", "LAngeles", 10, 725],
    ["sn165", "Seaford", "Newark", 4, 325],
    ["sn166", "Shady Springs", "Newark", 9, 675],
    ["sn167", "Shreveport", "Houston", 4, 350],
    ["sn168", "Sikeston", "Indianapolis", 6, 475],
    ["sn169", "Sioux Falls", "Indianapolis", 7, 700],
    ["sn170", "Somerville", "Newark", 2, 175],
    ["sn171", "South Bend", "Indianapolis", 3, 250],
    ["sn172", "South New Jersey", "Newark", 3, 250],
    ["sn173", "Spokane", "LAngeles", 10, 775],
    ["sn174", "Springfield", "Indianapolis", 6, 525],
    ["sn175", "St. Louis", "Indianapolis", 4, 300],
    ["sn176", "St. Cloud", "Indianapolis", 5, 525],
    ["sn177", "Suffolk", "Newark", 5, 425],
    ["sn178", "Syracuse", "Newark", 5, 350],
    ["sn179", "Tallahassee", "Savannah", 6, 425],
    ["sn180", "Tampa", "Savannah", 5, 375],
    ["sn181", "Tanner", "Savannah", 6, 425],
    ["sn182", "Taunton", "Newark", 5, 350],
    ["sn183", "Tidewater", "Newark", 6, 450],
    ["sn184", "Tifton", "Savannah", 4, 295],
    ["sn185", "Trenton", "Newark", 3, 200],
    ["sn186", "Tulsa", "Houston", 6, 475],
    ["sn187", "Tucson", "LAngeles", 6, 425],
    ["sn188", "Vallejo", "LAngeles", 5, 375],
    ["sn189", "Van Nuys", "LAngeles", 3, 200],
    ["sn190", "Walton", "Indianapolis", 5, 400],
    ["sn191", "Washington DC", "Newark", 4, 325],
    ["sn192", "Webster", "Newark", 6, 475],
    ["sn193", "West Palm Beach", "Savannah", 6, 425],
    ["sn194", "West Warren", "Newark", 5, 400],
    ["sn195", "Western Colorado", "Houston", 14, 1025],
    ["sn196", "Wheeling", "Indianapolis", 3, 250],
    ["sn197", "Wichita", "Houston", 7, 500],
    ["sn198", "Wilmington", "Savannah", 5, 375],
    ["sn199", "York Haven", "Newark", 4, 325],
    ["sn200", "York Springs", "Newark", 4, 325]];

window.addEventListener('load', function () {
    (function ($) {
        $(document).ready(function () {
            function state_add() {
                for (var i = 0; i < sityArr.length; i++) {
                    if ($('#sityAuto option').is('.' + sityArr[i][0])) {
                    } else {
                        $('#sityAuto').append($('<option class="' + sityArr[i][0] + '" value="' + sityArr[i][0] + '">' + sityArr[i][1] + '</option>'));
                    }
                }
            };

            state_add();

            $("#sityAuto").change(function () {
                str_cyti = $("#sityAuto :selected").val();
                $("#portAuto").empty();
                $("#portAuto").append($('<option class="all" value="all">Выберите порт</option>'));
                for (var i = 0; i < portArr.length; i++) {
                    if ($('#portAuto option').is('.' + portArr[i][1])) {
                    } else {
                        $("#portAuto").append($('<option class="' + portArr[i][1] + '" value="' + portArr[i][1] + '">' + portArr[i][2] + '</option>'));
                    }
                }
            });

            $('#deliverCalc').click(function (e) {
                var valCityOut = $("#sityAuto :selected").val();
                var valPortIn = $("#portAuto :selected").val();
                var valVeh = $("#vehType :selected").val();
                var invalid = false;
                if (valCityOut == 'all') {
                    $("#sityAuto").addClass('calcValid');
                    invalid = true;
                    $('#deliverResult').val(' ');
                } else if
                (valPortIn == 'all') {
                    $("#portAuto").addClass('calcValid');
                    invalid = true;
                    $('#deliverResult').val(' ');
                } else {
                }
                if (valVeh == 'all') {
                    $("#vehType").addClass('calcValid');
                    invalid = true;
                    $('#deliverResult').val(' ');
                }
                if (!invalid) {
                    var priceToPort,
                        priceToSeaPort,
                        portOut,
                        timeToPort,
                        portOutName,
                        result,
                        resultTime;

                    for (var i = 0; i < sityArr.length; i++) {
                        if (valCityOut == sityArr[i][0]) {
                            portOut = sityArr[i][2];
                            priceToPort = sityArr[i][4];
                            timeToPort = sityArr[i][3];
                        }
                    }
                    ;
                    for (var a = 0; a < portArr.length; a++) {
                        if (valPortIn == portArr[a][1] &&
                            portOut == portArr[a][3]) {
                            if (valVeh == 'vt01') {
                                priceToSeaPort = portArr[a][5];
                                timeToSeaPort = portArr[a][4];
                                portOutName = portArr[a][10];
                            } else if (valVeh == 'vt02') {
                                priceToSeaPort = portArr[a][6];
                                timeToSeaPort = portArr[a][4];
                                portOutName = portArr[a][10];
                            } else if (valVeh == 'vt03') {
                                priceToSeaPort = portArr[a][7];
                                timeToSeaPort = portArr[a][4];
                                portOutName = portArr[a][10];
                            } else if (valVeh == 'vt04') {
                                priceToSeaPort = portArr[a][8];
                                timeToSeaPort = portArr[a][4];
                                portOutName = portArr[a][10];
                            } else if (valVeh == 'vt05') {
                                priceToSeaPort = portArr[a][9];
                                timeToSeaPort = portArr[a][4];
                                portOutName = portArr[a][10];
                            } else {
                            }
                        }
                    }

                    console.log(portOutName);
                    result = +priceToPort + +priceToSeaPort;
                    resultTime = +timeToPort + +timeToSeaPort;
                    $('#deliverResult').text('$ ' + result);
                    $('#deliverTimeResult').text(resultTime + ', дней');
                    $('#deliverPortNameResult').text(portOutName);
                    $('.form-group-lik-res').addClass('form-group-lik-res-act ');
                    $('#sityAuto').removeClass('calcValid');
                    $('#portAuto').removeClass('calcValid');
                    $('#vehType').removeClass('calcValid');
                }
            });
            /**/
        });
    })(jQuery);
}, false);