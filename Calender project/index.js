var dt = new Date();

function renderDate(){
    dt.setDate(1);
    var day = dt.getDay();
    // console.log(dt.getDay());
    var endDate = new Date(dt.getFullYear(), dt.getMonth()+1, 0).getDate();
    var prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();
    var today = new Date();
    console.log(today);
    // console.log(endDate);
    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    // console.log(months[dt.getMonth()]);
    document.getElementById("date_str").innerHTML = today.toDateString();
    document.getElementById("month").innerHTML = months[dt.getMonth()];
    
    var cells = "";
    for(x = day; x > 0; x--){
        // cells += "<div class='prev_date'>" + "X" + "<div>";
        cells += "<div class = 'prev_date'>" + (prevDate - x + 1)  + "</div>";
    }
    
    for(i = 1; i<=endDate; i++){
        if(i == today.getDate() && dt.getMonth() == today.getMonth()){
            cells += "<div  class='today'>" + i + "</div>";
            console.log(dt.getFullYear());
        }
        else{
            cells += "<div>" + i + "</div>";
        }
    }
    document.getElementsByClassName("days")[0].innerHTML = cells;
}


function moveDate(para){
    if(para == 'prev'){
        dt.setMonth(dt.getMonth() - 1);
    }
    else if(para == 'next'){
        dt.setMonth(dt.getMonth() + 1);
    }
    renderDate();
    // console.log(para);
}