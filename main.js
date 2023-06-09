



















/////////////////////////////////////////////////////////////////////////////
//                            IMPORTANT VARIABLES                          //
/////////////////////////////////////////////////////////////////////////////



// new task window
jep = 0;
// console.log(jep);

// add button
addButton = 0;

// Inbox task counter
var inbox_counter = 0;

// Selected date from date picker
selectedDate = "";

// Calendar date selection variables
calendarDateSelected = false;
selectedCalendarDay = 0;
selectedCalendarMonth = 0;
selectedCalendarYear = 0;


window.addEventListener('load', () => {
  const form = document.querySelector('#new-task');
  const input_title = document.querySelector('#task-name');
  const input_description = document.querySelector('#task-description');
  const input_time = document.querySelector('#time-picker');
  const list_el = document.querySelector('#task-list');


/////////////////////////////////////////////////////////////////////////////
//                            ADD TASK BUTTON                              //
/////////////////////////////////////////////////////////////////////////////
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addButton = 0;
    
    const title = input_title.value;
    const date = selectedDate;
    const time = input_time.value;
    // const important = document.getElementById('important');
    // const description = input_description.value;
    
    const task_el = document.createElement("li");
    task_el.classList.add("task");
    // task_el.setAttribute("id", document.querySelector('#task-name').value);
    list_el.appendChild(task_el);

    // Action buttons - status checkbox
    const task_action_checkbox_el = document.createElement("i");
    task_action_checkbox_el.classList.add("status-icon-btn");
    task_action_checkbox_el.innerHTML = '<input type="checkbox" id="status-checkbox">';
    task_action_checkbox_el.innerHTML += '<label for="status-checkbox"></label>';
    task_el.appendChild(task_action_checkbox_el);

    // Task element
    const container_el = document.createElement("div");
    container_el.classList.add("container");
    task_el.appendChild(container_el);

    // Title
    const task_title_el = document.createElement("div");
    task_title_el.classList.add("title");
    task_title_el.innerText = title;
    container_el.appendChild(task_title_el);

    // Description
    const task_description_el = document.createElement("div");
    task_description_el.classList.add("description");
    task_description_el.value = input_description.value;
    container_el.appendChild(task_description_el);

    // Action buttons
    const task_action_buttons_el = document.createElement("div");
    task_action_buttons_el.classList.add("action-buttons");
    container_el.appendChild(task_action_buttons_el);

    

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

    if(!document.getElementById('important').checked){
        task_action_important_el.innerHTML = '<svg class="button" width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Interface / Star"><path id="Vector" d="M2.33496 10.3368C2.02171 10.0471 2.19187 9.52339 2.61557 9.47316L8.61914 8.76107C8.79182 8.74059 8.94181 8.63215 9.01465 8.47425L11.5469 2.98446C11.7256 2.59703 12.2764 2.59695 12.4551 2.98439L14.9873 8.47413C15.0601 8.63204 15.2092 8.74077 15.3818 8.76124L21.3857 9.47316C21.8094 9.52339 21.9791 10.0472 21.6659 10.3369L17.2278 14.4419C17.1001 14.56 17.0433 14.7357 17.0771 14.9063L18.255 20.8359C18.3382 21.2544 17.8928 21.5787 17.5205 21.3703L12.2451 18.4166C12.0934 18.3317 11.9091 18.3321 11.7573 18.417L6.48144 21.3695C6.10913 21.5779 5.66294 21.2544 5.74609 20.8359L6.92414 14.9066C6.95803 14.7361 6.90134 14.5599 6.77367 14.4419L2.33496 10.3368Z" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></g></svg>';
        task_action_important_el.value = 0;
    }
    else{
        task_action_important_el.innerHTML = '<svg class="button" width="18px" height="18px" viewBox="0 0 24 24" fill="yellow" xmlns="http://www.w3.org/2000/svg"><g id="Interface / Star"><path id="Vector" d="M2.33496 10.3368C2.02171 10.0471 2.19187 9.52339 2.61557 9.47316L8.61914 8.76107C8.79182 8.74059 8.94181 8.63215 9.01465 8.47425L11.5469 2.98446C11.7256 2.59703 12.2764 2.59695 12.4551 2.98439L14.9873 8.47413C15.0601 8.63204 15.2092 8.74077 15.3818 8.76124L21.3857 9.47316C21.8094 9.52339 21.9791 10.0472 21.6659 10.3369L17.2278 14.4419C17.1001 14.56 17.0433 14.7357 17.0771 14.9063L18.255 20.8359C18.3382 21.2544 17.8928 21.5787 17.5205 21.3703L12.2451 18.4166C12.0934 18.3317 11.9091 18.3321 11.7573 18.417L6.48144 21.3695C6.10913 21.5779 5.66294 21.2544 5.74609 20.8359L6.92414 14.9066C6.95803 14.7361 6.90134 14.5599 6.77367 14.4419L2.33496 10.3368Z" stroke="yellow" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></g></svg>';
        task_action_important_el.value = 1;
    }

    // Action buttons - edit
    const task_action_edit_el = document.createElement("i");
    task_action_edit_el.classList.add("edit-icon-btn");
    task_action_buttons_el.appendChild(task_action_edit_el);
    task_action_edit_el.innerHTML = '<svg class="button" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Edit / Edit_Pencil_Line_01"><path id="Vector" d="M4 20.0001H20M4 20.0001V16.0001L12 8.00012M4 20.0001L8 20.0001L16 12.0001M12 8.00012L14.8686 5.13146L14.8704 5.12976C15.2652 4.73488 15.463 4.53709 15.691 4.46301C15.8919 4.39775 16.1082 4.39775 16.3091 4.46301C16.5369 4.53704 16.7345 4.7346 17.1288 5.12892L18.8686 6.86872C19.2646 7.26474 19.4627 7.46284 19.5369 7.69117C19.6022 7.89201 19.6021 8.10835 19.5369 8.3092C19.4628 8.53736 19.265 8.73516 18.8695 9.13061L18.8686 9.13146L16 12.0001M12 8.00012L16 12.0001" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></g></svg>'

    // Action buttons - delete
    const task_action_delete_el = document.createElement("i");
    task_action_delete_el.classList.add("delete-icon-btn");
    task_action_buttons_el.appendChild(task_action_delete_el);
    task_action_delete_el.innerHTML = '<svg class="button" width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Interface / Trash_Full"><path id="Vector" d="M14 10V17M10 10V17M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></g></svg>';

    // Save button
    const task_action_save_el = document.createElement("button");
    task_action_save_el.type = "button";
    task_action_save_el.classList.add("save-btn");
    task_action_save_el.setAttribute("id", "save-button")
    task_action_save_el.innerText = "Save";
    document.getElementById("buttons").appendChild(task_action_save_el);

    // Date
    const task_date_icon_el = document.createElement("div");
    task_date_icon_el.classList.add("date");
    container_el.appendChild(task_date_icon_el);
    const task_date_el = document.createElement("p");

    // Time
    const task_time_icon_el = document.createElement("div");
    task_time_icon_el.classList.add("time");
    container_el.appendChild(task_time_icon_el);
    const task_time_el = document.createElement("p");

    if (date){
      // Set icon for date
      task_date_icon_el.innerHTML = '<i class="fa-regular fa-calendar-days"</i>';
      
      // Set date text
      task_date_el.innerText = date;
      task_date_icon_el.appendChild(task_date_el);

      // Time
      if(time){
        // Set icon for time
        task_time_icon_el.innerHTML = '<i class="fa-regular fa-clock"</i>';

        // Set time text
        task_time_el.innerText = time;
        task_time_icon_el.appendChild(task_time_el);
      }
    }
    
    // Clear functions
    clearCalendarSelection();
    clearCheckboxes();
    clearTaskName();
    clearTaskDescription();
    clearTaskTime();
    activateNewTaskWindow();
    clearDate();
    document.getElementById("time").disabled = true;
    document.getElementById("clear-btn").disabled = true;
    task_action_save_el.style.visibility="hidden";

    jep = 0;
    // console.log(jep);
    


    // BUTTONS
    // Status icon button
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
            task_action_important_el.innerHTML = '<svg class="button" width="18px" height="18px" viewBox="0 0 24 24" fill="yellow" xmlns="http://www.w3.org/2000/svg"><g id="Interface / Star"><path id="Vector" d="M2.33496 10.3368C2.02171 10.0471 2.19187 9.52339 2.61557 9.47316L8.61914 8.76107C8.79182 8.74059 8.94181 8.63215 9.01465 8.47425L11.5469 2.98446C11.7256 2.59703 12.2764 2.59695 12.4551 2.98439L14.9873 8.47413C15.0601 8.63204 15.2092 8.74077 15.3818 8.76124L21.3857 9.47316C21.8094 9.52339 21.9791 10.0472 21.6659 10.3369L17.2278 14.4419C17.1001 14.56 17.0433 14.7357 17.0771 14.9063L18.255 20.8359C18.3382 21.2544 17.8928 21.5787 17.5205 21.3703L12.2451 18.4166C12.0934 18.3317 11.9091 18.3321 11.7573 18.417L6.48144 21.3695C6.10913 21.5779 5.66294 21.2544 5.74609 20.8359L6.92414 14.9066C6.95803 14.7361 6.90134 14.5599 6.77367 14.4419L2.33496 10.3368Z" stroke="yellow" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></g></svg>';
            task_action_important_el.value = 1;
        }
        else{
            task_action_important_el.innerHTML = '<svg class="button" width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Interface / Star"><path id="Vector" d="M2.33496 10.3368C2.02171 10.0471 2.19187 9.52339 2.61557 9.47316L8.61914 8.76107C8.79182 8.74059 8.94181 8.63215 9.01465 8.47425L11.5469 2.98446C11.7256 2.59703 12.2764 2.59695 12.4551 2.98439L14.9873 8.47413C15.0601 8.63204 15.2092 8.74077 15.3818 8.76124L21.3857 9.47316C21.8094 9.52339 21.9791 10.0472 21.6659 10.3369L17.2278 14.4419C17.1001 14.56 17.0433 14.7357 17.0771 14.9063L18.255 20.8359C18.3382 21.2544 17.8928 21.5787 17.5205 21.3703L12.2451 18.4166C12.0934 18.3317 11.9091 18.3321 11.7573 18.417L6.48144 21.3695C6.10913 21.5779 5.66294 21.2544 5.74609 20.8359L6.92414 14.9066C6.95803 14.7361 6.90134 14.5599 6.77367 14.4419L2.33496 10.3368Z" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></g></svg>';
            task_action_important_el.value = 0;
        }
    });




    // When edit icon button is pressed
    task_action_edit_el.addEventListener("click", () => {
      
      // Disable user submit a new task with enter key
      addButton = 1;

      // Activate container
      activateNewTaskWindow();


      // Activate save button
      const buttons = document.querySelectorAll('[id=save-button]');

      for (var i = 0; i < buttons.length; i++) {
        // console.log('buttons: ', buttons[i]);
        buttons[i].disabled = false;
      } 

      // Show save button
      task_action_save_el.style.visibility="visible";

      // Hide add button
      document.getElementById('add-button').style.visibility="hidden";



      // set title
      document.getElementById("task-name").value = task_title_el.innerText;

      // set important value
      if(task_action_important_el.value == 0){
        document.getElementById("important").checked = false;
      }
      else{
        document.getElementById("important").checked = true;
      }

      // Open 'description' container and set content value
      document.getElementById("comment").checked = true;
      document.getElementById("task-description").value = task_description_el.value;

      // set date
      selectedDate = task_date_el.innerText;
      selectedTime = task_time_el.innerText;

      if(selectedDate){
        const parts = selectedDate.split("/");
        selectedCalendarDay = parseInt(parts[0]);
        selectedCalendarMonth = parseInt(parts[1]);
        selectedCalendarYear = parseInt(parts[2]);
        
        // Make calendar selection
        document.querySelectorAll(".number-item")[selectedCalendarDay - 1].classList.add("calendar-select");

        // Set buttons
        document.getElementById("clear-btn").disabled = false;
        document.getElementById("time").disabled = false;
      }

      // set time
      if(task_time_el.innerText){
        document.getElementById("time").disabled = false;
        document.getElementById("time-picker").value = time;

        document.querySelector('#time-picker').value = task_time_el.innerText;
      }

      jep = 1;
      // console.log(jep);
    });

    // input.addEventListener("change", activateSaveButton);

    // function activateSaveButton(){
    //   if(input.value == ""){
    //     task_action_save_el.disabled = true;
    //   }
    //   else{
    //     task_action_save_el.disabled = true;
    //   }
    // }

    // Save button functionalities
    task_action_save_el.addEventListener("click", () => {

      // Hide save button
      task_action_save_el.style.visibility="hidden";

      // Change title name
      task_title_el.innerText = input_title.value;

      // Change important value
      if(!document.getElementById('important').checked){
        task_action_important_el.innerHTML = '<svg class="button" width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Interface / Star"><path id="Vector" d="M2.33496 10.3368C2.02171 10.0471 2.19187 9.52339 2.61557 9.47316L8.61914 8.76107C8.79182 8.74059 8.94181 8.63215 9.01465 8.47425L11.5469 2.98446C11.7256 2.59703 12.2764 2.59695 12.4551 2.98439L14.9873 8.47413C15.0601 8.63204 15.2092 8.74077 15.3818 8.76124L21.3857 9.47316C21.8094 9.52339 21.9791 10.0472 21.6659 10.3369L17.2278 14.4419C17.1001 14.56 17.0433 14.7357 17.0771 14.9063L18.255 20.8359C18.3382 21.2544 17.8928 21.5787 17.5205 21.3703L12.2451 18.4166C12.0934 18.3317 11.9091 18.3321 11.7573 18.417L6.48144 21.3695C6.10913 21.5779 5.66294 21.2544 5.74609 20.8359L6.92414 14.9066C6.95803 14.7361 6.90134 14.5599 6.77367 14.4419L2.33496 10.3368Z" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></g></svg>';
        task_action_important_el.value = 0;
      }
      else{
          task_action_important_el.innerHTML = '<svg class="button" width="18px" height="18px" viewBox="0 0 24 24" fill="yellow" xmlns="http://www.w3.org/2000/svg"><g id="Interface / Star"><path id="Vector" d="M2.33496 10.3368C2.02171 10.0471 2.19187 9.52339 2.61557 9.47316L8.61914 8.76107C8.79182 8.74059 8.94181 8.63215 9.01465 8.47425L11.5469 2.98446C11.7256 2.59703 12.2764 2.59695 12.4551 2.98439L14.9873 8.47413C15.0601 8.63204 15.2092 8.74077 15.3818 8.76124L21.3857 9.47316C21.8094 9.52339 21.9791 10.0472 21.6659 10.3369L17.2278 14.4419C17.1001 14.56 17.0433 14.7357 17.0771 14.9063L18.255 20.8359C18.3382 21.2544 17.8928 21.5787 17.5205 21.3703L12.2451 18.4166C12.0934 18.3317 11.9091 18.3321 11.7573 18.417L6.48144 21.3695C6.10913 21.5779 5.66294 21.2544 5.74609 20.8359L6.92414 14.9066C6.95803 14.7361 6.90134 14.5599 6.77367 14.4419L2.33496 10.3368Z" stroke="yellow" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></g></svg>';
          task_action_important_el.value = 1;
      }

      // Change description value
      task_description_el.value = input_description.value;

      // Change date
      if(!task_date_el.innerText){
        // If selectedDate is true, set time stamp and clock icon
        if(selectedDate){
          task_date_icon_el.innerHTML = '<i class="fa-regular fa-calendar-days"</i>';
          task_date_el.innerText = selectedDate;
          task_date_icon_el.appendChild(task_date_el);
        }

        // If selectedDate is false, continue without adding values
        if(!selectedDate){
          selectedDate = "";
          task_date_el.innerText = "";
          task_date_icon_el.innerHTML = "";
        }
      }
      if(task_date_el.innerText){
        // If selectedDate is true, set time stamp and clock icon
        if(selectedDate){
          task_date_icon_el.innerHTML = '<i class="fa-regular fa-calendar-days"</i>';
          task_date_el.innerText = selectedDate;
          task_date_icon_el.appendChild(task_date_el);
        }
        // If selectedDate is false, continue without adding values
        if(!selectedDate){
          selectedDate = "";
          task_date_el.innerText = "";
          task_date_icon_el.innerHTML = "";
        }
      }

      // Time
      if(!task_time_el.innerText){
        // If time is selected
        if(document.querySelector('#time-picker').value){
          task_time_icon_el.innerHTML = '<i class="fa-regular fa-clock"</i>';
          task_time_el.innerText = document.querySelector('#time-picker').value;
          task_time_icon_el.appendChild(task_time_el);
        }

        // If time is not selected, continue without adding values
        if(!document.querySelector('#time-picker').value){
          task_time_el.innerText = "";
          task_time_icon_el.innerHTML = "";
        }
      }

      if(task_time_el.innerText){
        if(document.querySelector('#time-picker').value){
          task_time_icon_el.innerHTML = '<i class="fa-regular fa-clock"</i>';
          task_time_el.innerText = document.querySelector('#time-picker').value;
          task_time_icon_el.appendChild(task_time_el);
        }
        if(!document.querySelector('#time-picker').value){
          task_time_el.innerText = "";
          task_time_icon_el.innerHTML = "";
        }

        jep = 0;
        // console.log(jep);
      }
        
      // Clear
      clearTaskName();
      input_description.value = "";
      document.getElementById('important').checked = false;
      document.getElementById("comment").checked = false;

      // Run clearing functions
      cancelTaskButton();

      // Sorting
      if(sorting == "name"){
        sortByName();
      }
      if(sorting == "time"){
        sortByDueTime();
      }
    })








    // Sorting
    if(sorting == "name"){
      sortByName();
    }
    if(sorting == "time"){
      sortByDueTime();
    }

    




    












    // By pressing a cancel button, hide save button elements 
    document.getElementById("cancel-button").addEventListener('click', () => {
      task_action_save_el.style.visibility="hidden";
      // console.log("hide");
    })
        
    // Delete task and subtract 1 from task counter
    task_action_delete_el.addEventListener('click', () => {
      list_el.removeChild(task_el);
      document.getElementById("buttons").removeChild(task_action_save_el);

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

        selectedCalendarDay = e.target.textContent;
        selectedCalendarMonth = calendar.getMonth() + 1;
        selectedCalendarYear = calendar.getFullYear();
        selectedDate = selectedCalendarDay + "/" + selectedCalendarMonth + "/" + selectedCalendarYear;

        // activate clear button in date selection page
        activateClearButton();

        // Activate clock icon
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

/////////////////////////////////////////////////////////////////////////////
//                            NEW TASK FUNCTIONS                           //
/////////////////////////////////////////////////////////////////////////////


// Button functions
function newTaskButton(){
  activateNewTaskWindow();

  jep = 1;
  // console.log(jep);

  addButton = 0;

  // Show add button
  document.getElementById('add-button').style.visibility="visible";
  

  // Focus title name
  document.getElementById("task-name").focus();
}

function cancelTaskButton(){
    clearCalendarSelection();
    clearCheckboxes();
    clearTaskName();
    clearTaskDescription();
    clearTaskTime();
    activateNewTaskWindow();
    clearDate();
    document.getElementById("time").disabled = true;
    document.getElementById("clear-btn").disabled = true;

    jep = 0;
    // console.log(jep);
}

function clearButton(){
  document.getElementById("clear-btn").disabled = true;

  if(document.getElementById("day").checked){
    clearCalendarSelection();
    clearDate();
    clearTaskTime();
    document.getElementById("time").disabled = true;
  }
  if(document.getElementById("time").checked){
    clearTaskTime();
  }
}


// Clear functions
function clearTaskName(){
    document.getElementById('task-name').value = "";
    activateAddButton();
}

function clearTaskDescription(){
  document.getElementById('task-description').value = "";
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

  activateClearButton();
}


function activateAddButton(){
  if(addButton == 0){
    if(!document.getElementById('task-name').value.length){
        document.getElementById("add-button").disabled = true;        
    }
    else{
        document.getElementById("add-button").disabled = false;
    }           
  }
}


function activateNewTaskWindow(){
  document.getElementById("new-task").classList.toggle("active");
}

// activateClockIcon
document.getElementById("time").disabled = true;

// activateClearButton
document.getElementById("clear-btn").disabled = true;

function activateClearButton(){
  if(document.getElementById("day").checked){
    if(selectedDate){
      document.getElementById("clear-btn").disabled = false;
    }
    else{
      document.getElementById("clear-btn").disabled = true;
    }
  }

  if(document.getElementById("time").checked){
    if(document.querySelector('#time-picker').value){
      document.getElementById("clear-btn").disabled = false;
    }
    else{
      document.getElementById("clear-btn").disabled = true;
    }
  }
}

function checkTime(){
  activateClearButton();
}






// Task section visibility
var inbox_tasks = document.getElementById('task-list');
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




function activateSaveButton(){
  if(inbox_counter > 0){
    if(!document.getElementById("task-name").value.length){
      const buttons = document.querySelectorAll('[id=save-button]');

      for (var i = 0; i < buttons.length; i++) {
        // console.log('buttons: ', buttons[i]);

        buttons[i].disabled = true;
      }
    }
    else{
      const buttons = document.querySelectorAll('[id=save-button]');

      for (var i = 0; i < buttons.length; i++) {
        // console.log('buttons: ', buttons[i]);
        buttons[i].disabled = false;
      }
    }
  }
}











// Key handlers
const KEY_HANDLERS = {
  KeyQ: () => newTaskButton() + clearTaskName(),
};

document.addEventListener('keyup', (e) => {
  e.preventDefault();

  if(jep == 0){
    const handler = KEY_HANDLERS[e.code];
  
    if (handler) {
      handler();
      return;
    }
  
    // console.log('Pressed a key without a handler.')
  }

});



// Date
//n =  new Date();
//y = n.getFullYear();
//m = n.getMonth() + 1;
//d = n.getDate();
//document.getElementById("date").innerHTML = d + "/" + m + "/" + y;



/////////////////////////////////////////////////////////////////////////////
//                            TOP NAV USER ICON                            //
/////////////////////////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////////////////////////
//                            SORTING                                      //
/////////////////////////////////////////////////////////////////////////////


const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");
const nimi = document.getElementById('name');
const due = document.getElementById('due');

var sorting = "name";
// console.log(sorting);

document.getElementById("btn").innerHTML = '<svg fill="#FFFFFF" width="18px" height="18px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><path d="M1539.045 215.441v1249.74l299.206-299.206L1920 1247.84l-438.966 438.966-438.85-438.966 81.864-81.865 299.206 299.206V215.44h115.791ZM438.966 160l438.967 439.082-81.865 81.749-299.206-299.206v1249.74H381.186V381.625L81.981 680.831 0 599.082 438.966 160Z" fill-rule="evenodd"/></svg>';


// Toggle dropdown function
const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
  dropdownBtn.classList.toggle("press");
};

// Toggle dropdown open/close when dropdown button is clicked
dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();

  // set button inner text
  if(document.getElementById("btn").classList.contains("press")){
    if(sorting == "name"){
      document.getElementById("btn").innerHTML = "Sorted by task name";
    }
    if(sorting == "time"){
      document.getElementById("btn").innerHTML = "Sorted by due time";
    }
  }
  else{
    document.getElementById("btn").innerHTML = '<svg fill="#b1bec9" width="18px" height="18px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><path d="M1539.045 215.441v1249.74l299.206-299.206L1920 1247.84l-438.966 438.966-438.85-438.966 81.864-81.865 299.206 299.206V215.44h115.791ZM438.966 160l438.967 439.082-81.865 81.749-299.206-299.206v1249.74H381.186V381.625L81.981 680.831 0 599.082 438.966 160Z" fill-rule="evenodd"/></svg>';
  }

});

// Close dropdown when dom element is clicked
document.documentElement.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown();
  }

  // clear button inner text
  document.getElementById("btn").innerHTML = '<svg fill="#b1bec9" width="18px" height="18px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><path d="M1539.045 215.441v1249.74l299.206-299.206L1920 1247.84l-438.966 438.966-438.85-438.966 81.864-81.865 299.206 299.206V215.44h115.791ZM438.966 160l438.967 439.082-81.865 81.749-299.206-299.206v1249.74H381.186V381.625L81.981 680.831 0 599.082 438.966 160Z" fill-rule="evenodd"/></svg>';






});

// nimi selected
nimi.addEventListener("click", function () {
  sorting = "name";
  // console.log(sorting);

  if(sorting == "name"){
    nimi.classList.add("selected");
    due.classList.remove("selected");
  }
  if(sorting == "time"){
    nimi.classList.remove("selected");
    due.classList.add("selected");
  }
});

// due selected
due.addEventListener("click", function () {
  sorting = "time";
  // console.log(sorting);

  if(sorting == "name"){
    nimi.classList.add("selected");
    due.classList.remove("selected");
  }
  if(sorting == "time"){
    nimi.classList.remove("selected");
    due.classList.add("selected");
  }
});




if(sorting == "name"){
  nimi.classList.add("selected");
  due.classList.remove("selected");
  sortByName();
}
if(sorting == "time"){
  nimi.classList.remove("selected");
  due.classList.add("selected");
  sortByDueTime();
}





function sortByName(){
  var list, i, switching, shouldSwitch;
  list = document.getElementById("task-list")
  switching = true;

  while(switching){
    switching = false;
    b = list.getElementsByTagName('li');

    for(i=0; i<(b.length - 1); i++){
      shouldSwitch=false;
      if(b[i].innerHTML.toLowerCase() > b[i+1].innerHTML.toLowerCase()){
        shouldSwitch=true;
        break;
      }
    }
    if(shouldSwitch){
      b[i].parentNode.insertBefore(b[i+1], b[i]);
      switching=true;
    }
  }
}

function sortByDueTime(){
  // var list, i, switching, shouldSwitch;
  // list = document.getElementById("task-list")
  // switching = true;

  // while(switching){
  //   switching = false;
  //   b = list.getElementsByTagName('li');
    
  //   for(i=0; i<(b.length - 1); i++){
  //     shouldSwitch=false;
  //     if(b[i].innerHTML.toLowerCase() > b[i+1].innerHTML.toLowerCase()){
  //       shouldSwitch=true;
  //       break;
  //     }
  //   }
  //   if(shouldSwitch){
  //     b[i].parentNode.insertBefore(b[i+1], b[i]);
  //     switching=true;
  //   }
  // }
}








document.getElementById('add-task-bgrnd').style.display = 'none';

// popups
var e = document.getElementById('newTask');
e.onmouseover = function() {
  document.getElementById('add-task-bgrnd').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementById('add-task-bgrnd').style.display = 'none';
}





e1 = document.getElementById('new-task-bgrnd');


var delay = function (elem, callback) {
  var timeout = null;
  elem.onmouseover = function() {
      // Set timeout to be a timer which will invoke callback after 1s
      timeout = setTimeout(callback, 1000);
  };

  elem.onmouseout = function() {
      // Clear any timers set to timeout
      clearTimeout(timeout);
  }
};


delay(e1, function() {
  alert("Fired");
});