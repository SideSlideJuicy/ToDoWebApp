
/////////////////////////////////////////////////////////////////////////////
//                            IMPORTANT VARIABLES                          //
/////////////////////////////////////////////////////////////////////////////

// Inbox task counter - show how many tasks are created
var inbox_counter = 0;

// Selected date from date picker
selectedDate = "";

// Calendar date selection variables
calendarDateSelected = false;
selectedCalendarDay = 0;
selectedCalendarMonth = 0;
selectedCalendarYear = 0;

/////////////////////////////////////////////////////////////////////////////
//                            ADD NEW TASK                                 //
/////////////////////////////////////////////////////////////////////////////
window.addEventListener('load', () => {
  const form = document.querySelector('#new-task');
  const input_title = document.querySelector('#task-name');
  const input_description = document.querySelector('#task-description');
  const input_time = document.querySelector('#time-picker');

  const list_el = document.querySelector('#inbox-tasks');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = input_title.value;
    const date = selectedDate;
    const time = input_time.value;
    const important = document.getElementById('important');
    const description = input_description.value;
    console.log(time);

    
    // Task element
    const task_el = document.createElement("div");
    task_el.classList.add("task");
    // task_el.setAttribute("onclick", "editTaskButton()")
    list_el.appendChild(task_el);

    // Title
    const task_title_el = document.createElement("div");
    task_title_el.classList.add("title");
    task_title_el.innerText = title;
    task_el.appendChild(task_title_el);

    // Description
    const task_description_el = document.createElement("div");
    task_description_el.classList.add("description");
    task_el.appendChild(task_description_el);
    console.log("description=" + description);



    // Action buttons
    const task_action_buttons_el = document.createElement("div");
    task_action_buttons_el.classList.add("action-buttons");
    task_el.appendChild(task_action_buttons_el);

    // Action buttons - status checkbox
    const task_action_checkbox_el = document.createElement("i");
    task_action_checkbox_el.classList.add("status-icon-btn");
    task_action_checkbox_el.innerHTML = '<input type="checkbox" id="status-checkbox">';
    task_action_checkbox_el.innerHTML += '<label for="status-checkbox"></label>';
    task_action_buttons_el.appendChild(task_action_checkbox_el);
    console.log("status=" + task_action_buttons_el.value);
    // Add here function which sets the alarm/notifications off when task is done

    if(document.getElementById("status-checkbox").checked = false){
        task_action_checkbox_el.value = 1;
    }
    else{
        task_action_checkbox_el.value = 0;
    }

    // Action buttons - important
    const task_action_important_el = document.createElement("i");
    task_action_important_el.classList.add("important-icon-btn");
    task_action_buttons_el.appendChild(task_action_important_el);

    if(!important.checked){
        task_action_important_el.innerHTML = '<svg class="button" width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Interface / Star"><path id="Vector" d="M2.33496 10.3368C2.02171 10.0471 2.19187 9.52339 2.61557 9.47316L8.61914 8.76107C8.79182 8.74059 8.94181 8.63215 9.01465 8.47425L11.5469 2.98446C11.7256 2.59703 12.2764 2.59695 12.4551 2.98439L14.9873 8.47413C15.0601 8.63204 15.2092 8.74077 15.3818 8.76124L21.3857 9.47316C21.8094 9.52339 21.9791 10.0472 21.6659 10.3369L17.2278 14.4419C17.1001 14.56 17.0433 14.7357 17.0771 14.9063L18.255 20.8359C18.3382 21.2544 17.8928 21.5787 17.5205 21.3703L12.2451 18.4166C12.0934 18.3317 11.9091 18.3321 11.7573 18.417L6.48144 21.3695C6.10913 21.5779 5.66294 21.2544 5.74609 20.8359L6.92414 14.9066C6.95803 14.7361 6.90134 14.5599 6.77367 14.4419L2.33496 10.3368Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>';
        task_action_important_el.value = '0';
    }
    else{
        task_action_important_el.innerHTML = '<svg class="button" width="18px" height="18px" viewBox="0 0 24 24" fill="yellow" xmlns="http://www.w3.org/2000/svg"><g id="Interface / Star"><path id="Vector" d="M2.33496 10.3368C2.02171 10.0471 2.19187 9.52339 2.61557 9.47316L8.61914 8.76107C8.79182 8.74059 8.94181 8.63215 9.01465 8.47425L11.5469 2.98446C11.7256 2.59703 12.2764 2.59695 12.4551 2.98439L14.9873 8.47413C15.0601 8.63204 15.2092 8.74077 15.3818 8.76124L21.3857 9.47316C21.8094 9.52339 21.9791 10.0472 21.6659 10.3369L17.2278 14.4419C17.1001 14.56 17.0433 14.7357 17.0771 14.9063L18.255 20.8359C18.3382 21.2544 17.8928 21.5787 17.5205 21.3703L12.2451 18.4166C12.0934 18.3317 11.9091 18.3321 11.7573 18.417L6.48144 21.3695C6.10913 21.5779 5.66294 21.2544 5.74609 20.8359L6.92414 14.9066C6.95803 14.7361 6.90134 14.5599 6.77367 14.4419L2.33496 10.3368Z" stroke="yellow" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>';
        task_action_important_el.value = '1';
    }

    // Action buttons - edit
    const task_action_edit_el = document.createElement("i");
    task_action_edit_el.classList.add("edit-icon-btn");
    // task_action_edit_el.setAttribute("onclick", "editTaskButton()")
    task_action_buttons_el.appendChild(task_action_edit_el);
    task_action_edit_el.innerHTML = '<svg class="button" width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.1213 2.70705C19.9497 1.53548 18.0503 1.53547 16.8787 2.70705L15.1989 4.38685L7.29289 12.2928C7.16473 12.421 7.07382 12.5816 7.02986 12.7574L6.02986 16.7574C5.94466 17.0982 6.04451 17.4587 6.29289 17.707C6.54127 17.9554 6.90176 18.0553 7.24254 17.9701L11.2425 16.9701C11.4184 16.9261 11.5789 16.8352 11.7071 16.707L19.5556 8.85857L21.2929 7.12126C22.4645 5.94969 22.4645 4.05019 21.2929 2.87862L21.1213 2.70705ZM18.2929 4.12126C18.6834 3.73074 19.3166 3.73074 19.7071 4.12126L19.8787 4.29283C20.2692 4.68336 20.2692 5.31653 19.8787 5.70705L18.8622 6.72357L17.3068 5.10738L18.2929 4.12126ZM15.8923 6.52185L17.4477 8.13804L10.4888 15.097L8.37437 15.6256L8.90296 13.5112L15.8923 6.52185ZM4 7.99994C4 7.44766 4.44772 6.99994 5 6.99994H10C10.5523 6.99994 11 6.55223 11 5.99994C11 5.44766 10.5523 4.99994 10 4.99994H5C3.34315 4.99994 2 6.34309 2 7.99994V18.9999C2 20.6568 3.34315 21.9999 5 21.9999H16C17.6569 21.9999 19 20.6568 19 18.9999V13.9999C19 13.4477 18.5523 12.9999 18 12.9999C17.4477 12.9999 17 13.4477 17 13.9999V18.9999C17 19.5522 16.5523 19.9999 16 19.9999H5C4.44772 19.9999 4 19.5522 4 18.9999V7.99994Z" fill="#000000"/></svg>';

    // Action buttons - delete
    const task_action_delete_el = document.createElement("i");
    task_action_delete_el.classList.add("delete-icon-btn");
    task_action_buttons_el.appendChild(task_action_delete_el);
    task_action_delete_el.innerHTML = '<svg class="button" width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Interface / Trash_Full"><path id="Vector" d="M14 10V17M10 10V17M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>';



    // Date
    if (date){
      const task_date_icon_el = document.createElement("div");
      task_date_icon_el.classList.add("date");
      task_date_icon_el.innerHTML = '<i class="fa-regular fa-calendar-days"</i>';
      task_el.appendChild(task_date_icon_el);

      const task_date_el = document.createElement("p");
      task_date_el.innerText = date;
      task_date_icon_el.appendChild(task_date_el);

      // Time
      if(time){
        const task_time_icon_el = document.createElement("div");
        task_time_icon_el.classList.add("time");
        task_time_icon_el.innerHTML = '<i class="fa-regular fa-clock"</i>';
        task_el.appendChild(task_time_icon_el);

        const task_time_el = document.createElement("p");
        task_time_el.innerText = time;
        task_time_icon_el.appendChild(task_time_el);
      }
    }
    

    // Clear functions
    clearCalendarSelection();
    clearCheckboxes();
    clearTaskName();
    clearTaskTime();
    activateNewTaskWindow();
    clearDate();
    document.getElementById("time").disabled = true;
    clock_icon_value = 0;
    removeClockIcon();
    
    // Status button
    task_action_checkbox_el.addEventListener("click", () => {
        if(task_action_checkbox_el.value == 0){
            task_action_checkbox_el.value = 1;
        }
        else{
            task_action_checkbox_el.value = 0;
        }
    });

    // Important icon button
    task_action_important_el.addEventListener("click", () => {
        if(task_action_important_el.value == 0){
            task_action_important_el.innerHTML = '<svg class="button" width="18px" height="18px" viewBox="0 0 24 24" fill="yellow" xmlns="http://www.w3.org/2000/svg"><g id="Interface / Star"><path id="Vector" d="M2.33496 10.3368C2.02171 10.0471 2.19187 9.52339 2.61557 9.47316L8.61914 8.76107C8.79182 8.74059 8.94181 8.63215 9.01465 8.47425L11.5469 2.98446C11.7256 2.59703 12.2764 2.59695 12.4551 2.98439L14.9873 8.47413C15.0601 8.63204 15.2092 8.74077 15.3818 8.76124L21.3857 9.47316C21.8094 9.52339 21.9791 10.0472 21.6659 10.3369L17.2278 14.4419C17.1001 14.56 17.0433 14.7357 17.0771 14.9063L18.255 20.8359C18.3382 21.2544 17.8928 21.5787 17.5205 21.3703L12.2451 18.4166C12.0934 18.3317 11.9091 18.3321 11.7573 18.417L6.48144 21.3695C6.10913 21.5779 5.66294 21.2544 5.74609 20.8359L6.92414 14.9066C6.95803 14.7361 6.90134 14.5599 6.77367 14.4419L2.33496 10.3368Z" stroke="yellow" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>';
            task_action_important_el.value = 1;
        }
        else{
            task_action_important_el.innerHTML = '<svg class="button" width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Interface / Star"><path id="Vector" d="M2.33496 10.3368C2.02171 10.0471 2.19187 9.52339 2.61557 9.47316L8.61914 8.76107C8.79182 8.74059 8.94181 8.63215 9.01465 8.47425L11.5469 2.98446C11.7256 2.59703 12.2764 2.59695 12.4551 2.98439L14.9873 8.47413C15.0601 8.63204 15.2092 8.74077 15.3818 8.76124L21.3857 9.47316C21.8094 9.52339 21.9791 10.0472 21.6659 10.3369L17.2278 14.4419C17.1001 14.56 17.0433 14.7357 17.0771 14.9063L18.255 20.8359C18.3382 21.2544 17.8928 21.5787 17.5205 21.3703L12.2451 18.4166C12.0934 18.3317 11.9091 18.3321 11.7573 18.417L6.48144 21.3695C6.10913 21.5779 5.66294 21.2544 5.74609 20.8359L6.92414 14.9066C6.95803 14.7361 6.90134 14.5599 6.77367 14.4419L2.33496 10.3368Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>';
            task_action_important_el.value = 0;
        }
    });
        
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

/////////////////////////////////////////////////////////////////////////////
//                            CALENDAR CONTROL                             //
/////////////////////////////////////////////////////////////////////////////

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

        clock_icon_value += 1;

        selectedCalendarDay = e.target.textContent;
        selectedCalendarMonth = calendar.getMonth() + 1;
        selectedCalendarYear = calendar.getFullYear();
        selectedDate = selectedCalendarDay + "/" + selectedCalendarMonth + "/" + selectedCalendarYear;

        // Add clock icon
        if(clock_icon_value == 1){
            activateClockIcon();
        }
        
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

/////////////////////////////////////////////////////////////////////////////
//                            NEW TASK FUNCTIONS                           //
/////////////////////////////////////////////////////////////////////////////

// Button functions
function newTaskButton(){
  activateNewTaskWindow();
}
  
function cancelTaskButton(){
    clearCalendarSelection();
    clearCheckboxes();
    clearTaskName();
    clearTaskTime();
    activateNewTaskWindow();
    clearDate();
    document.getElementById("time").disabled = true;
    clock_icon_value = 0;
    removeClockIcon();
}

function editTaskButton(){
    activateNewTaskWindow();
}


// Clear functions
function clearTaskName(){
    document.getElementById('task-name').value = "";
    activateAddButton();
}

function clearTaskTime(){
  document.querySelector('#time-picker').value = "";
}

function clearCheckboxes() {
    var get = document.getElementsByName('newTaskCheckbox');

    for(var i = 0; i<get.length; i++){
        get[i].checked= false;
    }

    // 'Important' checkbox
    document.getElementById('important').checked = false;
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

function activateClockIcon(){
    // Enable checkbox
    document.getElementById("time").disabled = false;

    // Create element
    var list_el_clock = document.createElement('li');
    list_el_clock.setAttribute("id","clock-icon")
    list_el_clock.innerHTML = '<label for="time"><i class="fa-regular fa-clock"></i></label>';
    var someplace = document.getElementById('new-task-icons');
    someplace.appendChild(list_el_clock);

    
}

// function activateEditTaskWindow(){
//     document.getElementById("edit-task").classList.toggle("active");
// }



// Remove functions
function removeClockIcon(){
    if(document.getElementById("clock-icon")){
        rm_clock_icon = document.getElementById("clock-icon");
        rm_clock_icon.remove();
        }
}




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


clock_icon_value = 0;





// Date
//n =  new Date();
//y = n.getFullYear();
//m = n.getMonth() + 1;
//d = n.getDate();
//document.getElementById("date").innerHTML = d + "/" + m + "/" + y;



/////////////////////////////////////////////////////////////////////////////
//                            USER ICON BUTTON                             //
/////////////////////////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////////////////////////
//                            SORTING DROPDOWN                             //
/////////////////////////////////////////////////////////////////////////////

// Get all dropdowns from the document
const dropdowns = document.querySelectorAll('.dropdown');

//  Loop throught all dropdown elements
dropdowns.forEach(dropdown =>{
    // Get inner elements from each dropdown
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    // Add a clickevent to the selected element
    select.addEventListener('click', () =>{
        //  Add the clicked select styles to the select element
        select.classList.toggle('select-clicked');
        // Add the rotate styles to the caret element
        caret.classList.toggle('caret-rotate');
        // Add the open styles to the menu element
        menu.classList.toggle('menu-open');
    })

    // Loop through all option element
    options.forEach(option =>{
        // Add click event to the option element
        option.addEventListener('click', () =>{
            // Change selected inner text to clicked option inner text
            selected.innerText = option.innerText;
            // Add the clicked select styles to the select element
            select.classList.remove('select-clicked');
            // Add the rotate styles to the caret element
            caret.classList.remove('caret-rotate');
            // Add the open styles to the menu element
            menu.classList.remove('menu-open');
            // Remove active class from all option elements
            options.forEach(option =>{
                option.classList.remove('active');
            });
            // Add active class to clicked option element
            option.classList.add('active');
        });
    });
});

















