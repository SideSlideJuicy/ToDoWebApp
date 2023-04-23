
// Inbox task counter
var inbox_counter = 0;


// Add new task
window.addEventListener('load', () => {
    const form = document.querySelector('#new-task');
    const input_title = document.querySelector('#task-name');
    // const input_description = document.querySelector('#task-description');
    const input_date = document.querySelector('#task-date');
    // const input_time = document.querySelector('#task-time');

    const list_el = document.querySelector('#inbox-tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = input_title.value;
        // const description = input_description.value;
        const date = input_date.value;
        // const time = input_time.value;

        if (!title){
            return;
        }
        else{
            // Task element
            const task_el = document.createElement("div");
            task_el.classList.add("task");
            list_el.appendChild(task_el);

            // Title
            const task_title_el = document.createElement("div");
            task_title_el.classList.add("title");
            task_title_el.innerText = title;
            task_el.appendChild(task_title_el);

            // Description
            // if(description){
            //     const task_description_el = document.createElement("div");
            //     task_description_el.classList.add("description");
            //     task_description_el.innerText = description;
            //     task_el.appendChild(task_description_el);
            // }

            // Date
            if (date){
                const task_date_icon_el = document.createElement("div");
                task_date_icon_el.classList.add("task-date-and-time");
                task_date_icon_el.setAttribute("id", "date");
                task_date_icon_el.innerHTML = '<i class="fa-solid fa-calendar-days"</i>';
                task_el.appendChild(task_date_icon_el);

                const task_date_el = document.createElement("p");
                task_date_el.innerText = date;
                task_date_icon_el.appendChild(task_date_el);
            }

            // Time
            // if(time){
            //     const task_time_icon_el = document.createElement("div");
            //     task_time_icon_el.classList.add("task-date-and-time");
            //     task_time_icon_el.setAttribute("id", "time");
            //     task_time_icon_el.innerHTML = '<i class="fa-solid fa-clock"</i>';
            //     task_el.appendChild(task_time_icon_el);


            //     const task_time_el = document.createElement("p");
            //     task_time_el.innerText = time;
            //     task_time_icon_el.appendChild(task_time_el);
            // }
        }


        






        



        








        // Task counter value 
        inbox_counter += 1;
        document.getElementById("inbox-counter").innerHTML = inbox_counter;

       
    })
})






document.getElementById("time").disabled = true;



// Show / hide task sections
var upcoming_tasks = document.getElementById('upcoming-tasks');
var completed_tasks = document.getElementById('completed-tasks');
var overdue_tasks = document.getElementById('overdue-tasks');
var inbox_tasks = document.getElementById('inbox-tasks');
var upcoming_display = 0;
var completed_display = 0;
var overdue_display = 0;
var inbox_display = 0;

function inbox()
{
    if(inbox_display == 1)
    {
        inbox_tasks.style.display = 'block';
        inbox_display = 0;
    }
    else
    {
        inbox_tasks.style.display = 'none'; 
        inbox_display = 1;
    }
}

function upcoming()
{
    if(upcoming_display == 1)
    {
        upcoming_tasks.style.display = 'block';
        upcoming_display = 0;
    }
    else
    {
        upcoming_tasks.style.display = 'none'; 
        upcoming_display = 1;
    }
}

function completed()
{
    if(completed_display == 1)
    {
        completed_tasks.style.display = 'block';
        completed_display = 0;
    }
    else
    {
        completed_tasks.style.display = 'none'; 
        completed_display = 1;
    }
}

function overdue()
{
    if(overdue_display == 1)
    {
        overdue_tasks.style.display = 'block';
        overdue_display = 0;
    }
    else
    {
        overdue_tasks.style.display = 'none'; 
        overdue_display = 1;
    }
}






// Date
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
// document.getElementById("date").innerHTML = d + "/" + m + "/" + y;






function newTaskButton(){
    document.getElementById("new-task").classList.toggle("active");
    clearNewTaskContent()
}

function addTaskButton(){
    document.getElementById("new-task").classList.toggle("active");
    
    // uncheck all checkboxes
    document.getElementById("time").disabled = true;
    document.getElementById('day').checked = false;

    
    
}

function cancelTaskButton(){
    document.getElementById("new-task").classList.toggle("active");
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
    // document.getElementById('task-description').value = "";
    document.getElementById('task-date').value = "";
    // document.getElementById('task-time').value = "";
    document.getElementById("time").checked = false;
    document.getElementById("time").disabled = true;
    document.getElementById('day').checked = false;
    // document.getElementById('time').checked = false;
    // document.getElementById('repeat').checked = false;
    // document.getElementById('priority').checked = false;
    // document.getElementById('notifications').checked = false;

    for (var item of document.querySelectorAll(".number-item")) {
        item.classList.remove("calendar-select");
    }

    // document.getElementById('perse').value = "";
}

// set time
function timeSubmit(){
    selectedTime = document.getElementById("perse").value;
    document.getElementById("task-time").value = selectedTime;
    
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
        document.getElementById("task-date").value = selectedDay + "/" + selectedMonth + "/" + selectedYear;

        // enable time set
        document.getElementById("time").disabled = false;

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
