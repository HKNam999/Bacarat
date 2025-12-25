$(document).ready(function () {
    let type = sessionStorage.forType ?? 1;
    sessionStorage.stack = sessionStorage.stack ?? 3;
    $('#formula'+type).addClass('formula-item_active');
    let url = $("#room-url").val();
    // console.log()
    document.querySelector(".btn-formulaDD p").textContent = "Công thức AI " + type;
/*    var selectElement = document.getElementById('selectFormula');
    selectElement.value = type;
    selectElement.addEventListener('change', function() {
        var selectedValue = selectElement.value;
        changeForType(selectedValue); // Gọi hàm xử lý khi select thay đổi
    });*/

    // Fetch formula data from local JSON
    fetch('/get_formula_data.json')
        .then(response => response.json())
        .then(data => {
            sessionStorage.setItem("formula", JSON.stringify(data));
            initialize();
        })
        .catch(error => {
            console.error('Error fetching formula data:', error);
        });
});

function initialize() {
    var x = JSON.parse(sessionStorage.getItem("formula"));
    function chkresult(s) {
        if (predict == s) {
            win++;
            rate = Math.round((win / active) * 100);
            winid = "winrate" + room;
            winhtml = rate + "%";
            getCase("num", rate, room);
            stack = 1;
        } else if (predict != "") {
            let winid = "winrate" + room;

            if (active > 0) {
                if (stack < 3) {
                    active--;
                    stack++;
                } else {
                    rate = Math.round((win / active) * 100);
                    winhtml = rate + "%";
                    getCase("num", rate, room);
                    stack = 1;
                }
            } else {
                winhtml = "Shuffling";
                getCase("text", winhtml, room);
            }
        }
        if (slot.length == x[0].data.length - 1)
            slot = slot.substring(1, x[0].data.length - 1);
        slot += s;
        for (let i = 0; i < x.length; i++) {
            if (slot == x[i].data.substring(0, x[i].data.length - 1)) {
                active++;
                predict = x[i].data.charAt(x[i].data.length - 1);
                break;
            }
            predict = "";
        }
    }

    function getCase(result_type, result_value, result_id) {
        if (result_type == "text") {
            document.getElementById(`winrate${result_id}`).style.color = "khaki";
            document.getElementById(`winrate${result_id}`).innerHTML = result_value;
        } else {
            if (result_value > 80) {
                document.getElementById(`winrate${result_id}`).style.color = "lime";
            } else if (result_value > 60) {
                document.getElementById(`winrate${result_id}`).style.color = "gold";
            } else {
                document.getElementById(`winrate${result_id}`).style.color = "red";
            }
            document.getElementById(`winrate${result_id}`).innerHTML = result_value + "%";
        }
    }

    function roomdata(formula) {
        for (room = 0; room < formula.length; room++) {
            res = formula[room].split("");
            if (typeof res[0] == "undefined") {
                let winhtml = "Shuffling";
                getCase("text", winhtml, room);
            } else if (res[0] != "") {
                active = 0;
                win = 0;
                slot = "";
                stack = 1;
                predict = "";
                for (let i = 0; i < 72; i++) {
                    if (res[i] == "B") {
                        chkresult("b");
                    } else if (res[i] == "P") {
                        chkresult("p");
                    }
                }
            }
        }
    }

    let head = document.getElementsByTagName("HEAD")[0];
    let link = document.createElement("link");
    switch (sessionStorage.forType) {
        case "10":
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = "css/lbtheme_pirate4.css";
            head.appendChild(link);
            $(".sidenav").css("background-image", 'url("/images/Sidebar_sahacker.png")');
            break;
        case "2":
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = "css/lbtheme_racing4.css";
            head.appendChild(link);
            $(".sidenav").css("background-image", 'url("/images/Sidebar_sahacker.png")');
            break;
        case "3":
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = "css/lbtheme_space4.css";
            head.appendChild(link);
            $(".sidenav").css("background-image", 'url("/images/Sidebar_sahacker.png")');
            break;
        case "4":
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = "css/lbtheme_winter4.css";
            head.appendChild(link);
            $(".sidenav").css("background-image", 'url("/images/Sidebar_sahacker.png")');
            break;
        case "5":
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = "css/lbtheme_neon.css";
            head.appendChild(link);
            $(".sidenav").css("background-image", 'url("/images/02_Neon_Lobby_05_Sidebar.png")');
            break;
        case "6":
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = "css/lbtheme_mayan4.css";
            head.appendChild(link);
            $(".sidenav").css("background-image", 'url("/images/Sidebar_sahacker.png")');
            break;
        case "7":
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = "css/lbtheme_china.css";
            head.appendChild(link);
            $(".sidenav").css("background-image", 'url("/images/Sidebar_sahacker.png")');
            break;
        case "8":
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = "css/lbtheme_music.css";
            head.appendChild(link);
            $(".sidenav").css("background-image", 'url("/images/Sidebar_sahacker.png")');
            break;
        case "9":
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = "css/lbtheme_skull.css";
            head.appendChild(link);
            $(".sidenav").css("background-image", 'url("/images/Sidebar_sahacker.png")');
            break;
        case "1":
            var asset_path = "asset/" + 1;
            $(".sidenav").css("background-image", "url(" + "/images/new/" + asset_path + "/side_bar.png" + ")");
            break;
    }

    function showdata() {
        fetch('https://apibcr-hknam-mz95.onrender.com/data')
            .then(response => response.json())
            .then(data => {
                var arr = [];
                data.forEach(value => {
                    var tableIndex = parseInt(value.table_name) - 1;
                    if (tableIndex >= 0 && tableIndex < 7) {
                        fillTable(tableIndex, value.result);
                        $('#table-'+tableIndex).find('.bridge_msg').text(value.goodRoad || '');
                        arr[tableIndex] = value.result;
                    }
                });
                roomdata(arr);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    showdata();
    setInterval(showdata, 1000);
}

function fillTable(indexTable, results) {
    let table = $('#table-'+indexTable);
    drawTable(indexTable);
    let column = 0, row = 0, previous = '', columnNext = 0, charCount = {};
    results.split('').forEach((result) => {
        if (charCount[result]) charCount[result]++;
        else charCount[result] = 1;
        if (result === 'T' && previous === '') return;
        if (column >= 18) {
            table.find(`#col-${indexTable}-${column-18}`).remove();
            table.find(`#col-${indexTable}-${column+1}`).remove();
            table.find('.result').append(`<li id="col-${indexTable}-${column+1}">
                <div class="row1" id="item-${indexTable}-${column+1}-0"><div class=""><p class=""></p></div></div>
                <div class="row1" id="item-${indexTable}-${column+1}-1"><div class=""><p class=""></p></div></div>
                <div class="row1" id="item-${indexTable}-${column+1}-2"><div class=""><p class=""></p></div></div>
                <div class="row1" id="item-${indexTable}-${column+1}-3"><div class=""><p class=""></p></div></div>
                <div class="row1" id="item-${indexTable}-${column+1}-4"><div class=""><p class=""></p></div></div>
                <div class="row1" id="item-${indexTable}-${column+1}-5"><div class=""><p class=""></p></div></div>
            </li>`);
        }
        if (result === previous) {
            if ($(`#item-${indexTable}-${column}-${row}`).find('div').hasClass('basecurr')) {
                row--; column++; columnNext = columnNext > 0 ? columnNext : column;
            } else if (row > 5) {
                row = 5; column++; columnNext = columnNext > 0 ? columnNext : column;
            }
        } else if ((previous === 'B' && result === 'P') || (previous === 'P' && result === 'B')) {
            column = columnNext > 0 ? columnNext : (column + 1); row = 0; columnNext = 0;
        }
        let item = $(`#item-${indexTable}-${column}-${row}`);
        let classDiv = 'basecurr ', classP = 'basecurp ';
        if (result === 'B') classDiv += 'villageWMcurr';
        else if (result === 'P') classDiv += 'leisureWMcurr';
        else if (result === 'T') {
            if ($(`#item-${indexTable}-${column}-${row-1}`).find('p').hasClass('withT')) {
                $(`#item-${indexTable}-${column}-${row-1}`).find('p').removeClass('withT').addClass('withT2');
            } else {
                $(`#item-${indexTable}-${column}-${row-1}`).find('p').addClass('withT');
            }
            return;
        }
        item.find('div').addClass(classDiv);
        item.find('p').addClass(classP);
        row++; previous = result;
    });
    table.find('.bankerCounts').text(charCount.B || 0);
    table.find('.playerCounts').text(charCount.P || 0);
    table.find('.tieCounts').text(charCount.T || 0);
    table.find('.total-player').text(Math.floor(Math.random() * 1900) + 100);
}

function drawTable(idTable) {
    $(`#table-${idTable}`).find('ul.result').html('');
    for (let i = 0; i < 19; i++) {
        let $li = $(`<li id="col-${idTable}-${i}"></li>`);
        for (let j = 0; j < 6; j++) {
            $li.append(`<div class="row1" id="item-${idTable}-${i}-${j}"><div class=""><p class=""></p></div></div>`);
        }
        $(`#table-${idTable}`).find('ul.result').append($li);
    }
}

function changeForType(type) {
    sessionStorage.forType = type;
    sessionStorage.stack = type == 1 ? 3 : 6;
    window.location.reload();
}
