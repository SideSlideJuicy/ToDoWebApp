
// Inbox task counter
var inbox_counter = 0;

// Selected date from date picker
selectedDate = "";

// Calendar date selection variables
calendarDateSelected = false;
selectedCalendarDay = 0;
selectedCalendarMonth = 0;
selectedCalendarYear = 0;

// Add new task
window.addEventListener('load', () => {
  const form = document.querySelector('#new-task');
  const input_title = document.querySelector('#task-name');

  const list_el = document.querySelector('#inbox-tasks');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = input_title.value;
    const date = selectedDate;

    if (!title) {
        return;
    }
    
    // Task element
    const task_el = document.createElement("div");
    task_el.classList.add("task");
    list_el.appendChild(task_el);

    // Title
    const task_title_el = document.createElement("div");
    task_title_el.classList.add("title");
    task_title_el.innerText = title;
    task_el.appendChild(task_title_el);

    // Date
    if (date){
      const task_date_icon_el = document.createElement("div");
      task_date_icon_el.classList.add("date-and-time");
      task_date_icon_el.innerHTML = '<i class="fa-regular fa-calendar-days"</i>';
      task_el.appendChild(task_date_icon_el);

      const task_date_el = document.createElement("p");
      task_date_el.innerText = date;
      task_date_icon_el.appendChild(task_date_el);

      // tähän jos aika on asetettu
      // Time
      const task_time_icon_el = document.createElement("div");
      task_time_icon_el.classList.add("date-and-time");
      task_time_icon_el.innerHTML = '<i class="fa-regular fa-clock"</i>';
      task_el.appendChild(task_time_icon_el);

      const task_time_el = document.createElement("p");
      task_time_el.innerText = "time";
      task_time_icon_el.appendChild(task_time_el);
    }

    // Action buttons
    const task_action_buttons_el = document.createElement("div");
    task_action_buttons_el.classList.add("action-buttons");
    task_el.appendChild(task_action_buttons_el);

    // Action buttons - checkbox
    const task_action_checkbox_el = document.createElement("i");
    task_action_checkbox_el.classList.add("fa-regular", "fa-square");
    task_action_buttons_el.appendChild(task_action_checkbox_el);

    // Action buttons - edit
    const task_action_edit_el = document.createElement("i");
    task_action_edit_el.classList.add("fa-regular", "fa-pen-to-square");
    task_action_buttons_el.appendChild(task_action_edit_el);

    // Action buttons - important
    const task_action_important_el = document.createElement("i");
    task_action_important_el.classList.add("fa-regular", "fa-star");
    task_action_buttons_el.appendChild(task_action_important_el);

    // Action buttons - delete
    const task_action_delete_el = document.createElement("i");
    task_action_delete_el.classList.add("fa-regular", "fa-trash-can");
    //task_action_delete_el.setAttribute("onclick","actionDelete()");
    task_action_buttons_el.appendChild(task_action_delete_el);

    // Clear functions
    clearCalendarSelection();
    clearCheckboxes();
    clearTaskName();
    activateNewTaskWindow();
    clearDate();
    document.getElementById("time").disabled = true;
    
    // Delete task and subtract 1 from task counter
    task_action_delete_el.addEventListener('click', () => {
      list_el.removeChild(task_el);

      inbox_counter -= 1;
      document.getElementById("inbox-counter").innerHTML = inbox_counter;
    })

    // Add 1 to task counter value 
    inbox_counter += 1;
    document.getElementById("inbox-counter").innerHTML = inbox_counter;
  })
})

// Task section visibility
var inbox_tasks = document.getElementById('inbox-tasks');
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





      

    //   Select task date from calendar
    selectDate: function (e) {

        selectedCalendarDay = e.target.textContent;
        selectedCalendarMonth = calendar.getMonth() + 1;
        selectedCalendarYear = calendar.getFullYear();
        selectedDate = selectedCalendarDay + "/" + selectedCalendarMonth + "/" + selectedCalendarYear;

        // show hidden clock icon to be able to set time for the task
        document.getElementById("time").disabled = false;

        // Remove previous calendar selection
        clearCalendarSelection();

        // select new date
        {
            document.querySelectorAll(".number-item")[selectedCalendarDay - 1].classList.add("calendar-select");
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
            dateNumber[i].addEventListener("click",calendarControl.selectDate,false);
        }
      },


      // Highlight today's date
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

      // Highlight selected date
      highlightSelect: function () {
        let setMonth = selectedCalendarMonth;
        let changedMonth2 = calendar.getMonth() + 1;
        let setYear = selectedCalendarYear;
        let changedYear2 = calendar.getFullYear();
        if (
          setYear === changedYear2 &&
          setMonth === changedMonth2 &&
          document.querySelectorAll(".number-item")
        )
        
        {
        document
            .querySelectorAll(".number-item")
            [selectedCalendarDay - 1].classList.add("calendar-select");
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


// Button functions
function newTaskButton(){
  activateNewTaskWindow();
}
  
function cancelTaskButton(){
  clearCalendarSelection();
  clearCheckboxes();
  clearTaskName();
  activateNewTaskWindow();
  clearDate();
  document.getElementById("time").disabled = true;
}

// Clear functions
function clearTaskName(){
  document.getElementById('task-name').value = "";
}

function clearCheckboxes() {
  var get = document.getElementsByName('newTaskCheckbox');

  for(var i = 0; i<get.length; i++){
    get[i].checked= false;
  }
}

function clearCalendarSelection(){
  for (var item of document.querySelectorAll(".number-item")) {
    item.classList.remove("calendar-select");
  }
}

function clearDate(){
  selectedCalendarDay = "";
  selectedCalendarMonth = "";
  selectedCalendarYear = "";
  selectedDate = "";
}

//  Activation functions
function onlyOne(checkbox) {
  var checkboxes = document.getElementsByName('newTaskCheckbox')
  checkboxes.forEach((item) => {
      if (item !== checkbox) item.checked = false
  })
}

function activateAddButton(){
  if(!document.getElementById('task-name').value.length){
      document.getElementById("add-new-task-button").disabled = true;            
  }
  else{
      document.getElementById("add-new-task-button").disabled = false;
  }           
}

function activateNewTaskWindow(){
  document.getElementById("new-task").classList.toggle("active");
}














// 
document.getElementById("time").disabled = true;















// Date
//n =  new Date();
//y = n.getFullYear();
//m = n.getMonth() + 1;
//d = n.getDate();
//document.getElementById("date").innerHTML = d + "/" + m + "/" + y;



