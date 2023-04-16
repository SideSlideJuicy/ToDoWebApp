var div = document.getElementById('upcoming-content');
var display = 0;

function upcoming()
{
    if(display == 1)
    {
        div.style.display = 'block';
        display = 0;
    }
    else
    {
        div.style.display = 'none'; 
        display = 1;
    }
}



var div2 = document.getElementById('completed-content');
var display2 = 0;

function completed()
{
    if(display2 == 1)
    {
        div2.style.display = 'block';
        display2 = 0;
    }
    else
    {
        div2.style.display = 'none'; 
        display2 = 1;
    }
}



var div3 = document.getElementById('overdue-content');
var display3 = 0;

function overdue()
{
    if(display3 == 1)
    {
        div3.style.display = 'block';
        display3 = 0;
    }
    else
    {
        div3.style.display = 'none'; 
        display3 = 1;
    }
}



// Date
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = d + "/" + m + "/" + y;





// Enable / Disable Scroll
Scroll = (
    function(){
          var x,y;
         function hndlr(){
            window.scrollTo(x,y);
            //return;
          }  
          return {

               disable : function(x1,y1){
                    x = x1;
                    y = y1;
                   if(window.addEventListener){
                       window.addEventListener("scroll",hndlr);
                   } 
                   else{
                        window.attachEvent("onscroll", hndlr);
                   }     

               },
               enable: function(){
                      if(window.removeEventListener){
                         window.removeEventListener("scroll",hndlr);
                      }
                      else{
                        window.detachEvent("onscroll", hndlr);
                      }
               } 

          }
    })();



function newTaskButton(){
    document.getElementById("new-task").classList.toggle("active");
    Scroll.disable(0,document.body.scrollTop);
    clearNewTaskContent()
}

function addTaskButton(){
    document.getElementById("new-task").classList.toggle("active");
    Scroll.enable();
    clearNewTaskContent()
}

function cancelTaskButton(){
    document.getElementById("new-task").classList.toggle("active");
    Scroll.enable();
    clearNewTaskContent()
}

function addTaskButtonActivation(){

    if(!document.getElementById('task-name').value.length){
        document.getElementById("add-btn").disabled = true;            
    }else{
        document.getElementById("add-btn").disabled = false;
    }           
}

 function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}





// Clear task content
function clearNewTaskContent(){
    document.getElementById("add-btn").disabled = true;
    document.getElementById('task-name').value = "";
    document.getElementById('task-description').value = "";
    document.getElementById('set-date').value = "";

    for (var item of document.querySelectorAll(".number-item")) {
        item.classList.remove("calendar-select");
    }
}











selection = false;
selectedDay = value = 0;
selectedMonth = value = 0;
selectedYear = value = 0;

// check the console for date click event
// Fixed day highlight
// Added previous month and next month view

function CalendarControl() {
    const calendar = new Date();
    const calendarControl = {
      localDate: new Date(),
      prevMonthLastDate: null,
      calWeekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      calMonthName: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      daysInMonth: function (month, year) {
        return new Date(year, month, 0).getDate();
      },
      firstDay: function () {
        return new Date(calendar.getFullYear(), calendar.getMonth(), 1);
      },
      lastDay: function () {
        return new Date(calendar.getFullYear(), calendar.getMonth() + 1, 0);
      },
      firstDayNumber: function () {
        return calendarControl.firstDay().getDay() + 1;
      },
      lastDayNumber: function () {
        return calendarControl.lastDay().getDay() + 1;
      },
      getPreviousMonthLastDate: function () {
        let lastDate = new Date(
          calendar.getFullYear(),
          calendar.getMonth(),
          0
        ).getDate();
        return lastDate;
      },
      navigateToPreviousMonth: function () {
        calendar.setMonth(calendar.getMonth() - 1);
        calendarControl.attachEventsOnNextPrev();
      },
      navigateToNextMonth: function () {
        calendar.setMonth(calendar.getMonth() + 1);
        calendarControl.attachEventsOnNextPrev();
      },
      navigateToCurrentMonth: function () {
        let currentMonth = calendarControl.localDate.getMonth();
        let currentYear = calendarControl.localDate.getFullYear();
        calendar.setMonth(currentMonth);
        calendar.setYear(currentYear);
        calendarControl.attachEventsOnNextPrev();
      },
      displayYear: function () {
        let yearLabel = document.querySelector(".calendar .calendar-year-label");
        yearLabel.innerHTML = calendar.getFullYear();
      },
      displayMonth: function () {
        let monthLabel = document.querySelector(".calendar .calendar-month-label");
        monthLabel.innerHTML = calendarControl.calMonthName[calendar.getMonth()];
      },





      

    //   SelectDate function
      selectDate: function (e) {

        selectedDay = e.target.textContent;
        selectedMonth = calendar.getMonth() + 1;
        selectedYear = calendar.getFullYear();

        // set date into text box
        document.getElementById("set-date").value = selectedDay + "/" + selectedMonth + "/" + selectedYear;

        // 
        for (var item of document.querySelectorAll(".number-item")) {
            item.classList.remove("calendar-select");
        }

        // selected day
        {
            document.querySelectorAll(".number-item")[selectedDay - 1].classList.add("calendar-select");
        }

      },








      plotSelectors: function () {
        document.querySelector(
          ".calendar"
        ).innerHTML += 
        `<div class="calendar-inner"><div class="calendar-controls">
          <div class="calendar-prev"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#666" d="M88.2 3.8L35.8 56.23 28 64l7.8 7.78 52.4 52.4 9.78-7.76L45.58 64l52.4-52.4z"/></svg></a></div>
          <div class="calendar-year-month">
          <div class="calendar-month-label"></div>
          <div>-</div>
          <div class="calendar-year-label"></div>
          </div>
          <div class="calendar-next"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#666" d="M38.8 124.2l52.4-52.42L99 64l-7.77-7.78-52.4-52.4-9.8 7.77L81.44 64 29 116.42z"/></svg></a></div>
          </div>
          <div class="calendar-today-date">Today: 
            ${calendarControl.calWeekDays[calendarControl.localDate.getDay()]}, 
            ${calendarControl.localDate.getDate()}, 
            ${calendarControl.calMonthName[calendarControl.localDate.getMonth()]} 
            ${calendarControl.localDate.getFullYear()}
          </div>
          <div class="calendar-body"></div></div>`;
      },
      plotDayNames: function () {
        for (let i = 0; i < calendarControl.calWeekDays.length; i++) {
          document.querySelector(
            ".calendar .calendar-body"
          ).innerHTML += `<div>${calendarControl.calWeekDays[i]}</div>`;
        }
      },
      plotDates: function () {
        document.querySelector(".calendar .calendar-body").innerHTML = "";
        calendarControl.plotDayNames();
        calendarControl.displayMonth();
        calendarControl.displayYear();
        let count = 1;
        let prevDateCount = 0;
  
        calendarControl.prevMonthLastDate = calendarControl.getPreviousMonthLastDate();
        let prevMonthDatesArray = [];
        let calendarDays = calendarControl.daysInMonth(
          calendar.getMonth() + 1,
          calendar.getFullYear()
        );
        // dates of current month
        for (let i = 1; i < calendarDays; i++) {
          if (i < calendarControl.firstDayNumber()) {
            prevDateCount += 1;
            document.querySelector(
              ".calendar .calendar-body"
            ).innerHTML += `<div class="prev-dates"></div>`;
            prevMonthDatesArray.push(calendarControl.prevMonthLastDate--);
          } else {
            document.querySelector(
              ".calendar .calendar-body"
            ).innerHTML += `<div class="number-item" data-num=${count}><a class="dateNumber" href="#">${count++}</a></div>`;
          }
        }
        //remaining dates after month dates
        for (let j = 0; j < prevDateCount + 1; j++) {
          document.querySelector(
            ".calendar .calendar-body"
          ).innerHTML += `<div class="number-item" data-num=${count}><a class="dateNumber" href="#">${count++}</a></div>`;
        }
        calendarControl.highlightToday();
        calendarControl.highlightSelect();
        calendarControl.plotPrevMonthDates(prevMonthDatesArray);
        calendarControl.plotNextMonthDates();
      },
      attachEvents: function () {
        let prevBtn = document.querySelector(".calendar .calendar-prev a");
        let nextBtn = document.querySelector(".calendar .calendar-next a");
        let todayDate = document.querySelector(".calendar .calendar-today-date");
        let dateNumber = document.querySelectorAll(".calendar .dateNumber");
        prevBtn.addEventListener("click", calendarControl.navigateToPreviousMonth);
        nextBtn.addEventListener("click", calendarControl.navigateToNextMonth);
        todayDate.addEventListener("click", calendarControl.navigateToCurrentMonth);
        for (var i = 0; i < dateNumber.length; i++) {

            // console.log(i)

            dateNumber[i].addEventListener("click",calendarControl.selectDate,false);
        }
      },


    //   Highlight days
      highlightToday: function () {
        let currentMonth = calendarControl.localDate.getMonth() + 1;
        let changedMonth = calendar.getMonth() + 1;
        let currentYear = calendarControl.localDate.getFullYear();
        let changedYear = calendar.getFullYear();
        if (
          currentYear === changedYear &&
          currentMonth === changedMonth &&
          document.querySelectorAll(".number-item")
        ) {
          document
            .querySelectorAll(".number-item")
            [calendar.getDate() - 1].classList.add("calendar-today");
        }
      },

      highlightSelect: function () {
        let setMonth = selectedMonth;
        let changedMonth2 = calendar.getMonth() + 1;
        let setYear = selectedYear;
        let changedYear2 = calendar.getFullYear();
        if (
          setYear === changedYear2 &&
          setMonth === changedMonth2 &&
          document.querySelectorAll(".number-item")
        )
        
        {
        document
            .querySelectorAll(".number-item")
            [selectedDay - 1].classList.add("calendar-select");

            
        }
      },







      plotPrevMonthDates: function(dates){
        dates.reverse();
        for(let i=0;i<dates.length;i++) {
            if(document.querySelectorAll(".prev-dates")) {
                document.querySelectorAll(".prev-dates")[i].textContent = dates[i];
            }
        }
      },
      plotNextMonthDates: function(){
       let childElemCount = document.querySelector('.calendar-body').childElementCount;
       //7 lines
       if(childElemCount > 42 ) {
           let diff = 49 - childElemCount;
           calendarControl.loopThroughNextDays(diff);
       }

       //6 lines
       if(childElemCount > 35 && childElemCount <= 42 ) {
        let diff = 42 - childElemCount;
        calendarControl.loopThroughNextDays(42 - childElemCount);
       }

      },
      loopThroughNextDays: function(count) {
        if(count > 0) {
            for(let i=1;i<=count;i++) {
                document.querySelector('.calendar-body').innerHTML += `<div class="next-dates">${i}</div>`;
            }
        }
      },
      attachEventsOnNextPrev: function () {
        calendarControl.plotDates();
        calendarControl.attachEvents();
      },
      init: function () {
        calendarControl.plotSelectors();
        calendarControl.plotDates();
        calendarControl.attachEvents();
      }
    };
    calendarControl.init();
  }
  
  const calendarControl = new CalendarControl();
