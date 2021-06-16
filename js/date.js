function customDate() {
  const
      calendar = document.querySelector('.calendar-events .calendar'),
      mth_element = document.querySelector('.calendar .date-header .mth'),
      year_element = document.querySelector('.calendar .date-header .year'),
      next_mth_element = document.querySelector(
          '.calendar .date-header .next-mth'),
      prev_mth_element = document.querySelector(
          '.calendar .date-header .prev-mth'),
      days_Headers = document.querySelector('.calendar .daysLabels'),
      days_element = document.querySelector('.calendar .days'),
      today_button = document.querySelector('#today'),
      month_menu = document.querySelector('.months_menu'),
      year_menu = document.querySelector('.years_menu');
  const
      months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'],
      daysLabels = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  let selected_date = document.querySelector('.calendar-events .selected-date'),
      date = new Date(),
      day = date.getDate(),
      month = date.getMonth(),
      year = date.getFullYear();

  let selectedDate = date;
  let selectedDay = day;
  let selectedMonth = month;
  let selectedYear = year;

  mth_element.textContent = months[month];
  year_element.textContent = year;

  for (let i = 0; i < 7; i++) {
    const dayHeader = document.createElement('span');
    dayHeader.innerHTML = daysLabels[i];
    days_Headers.appendChild(dayHeader);
  }
  for (let i = 0; i < months.length; i++) {
    const monthButton = document.createElement('button');
    monthButton.textContent = months[i];
    monthButton.value = i.toString();
    monthButton.addEventListener('click', selectMonth);
    month_menu.appendChild(monthButton);
  }
  for (let i = 1900; i <= 2034; i++) {
    const yearButton = document.createElement('button');
    yearButton.innerHTML = i.toString();
    yearButton.addEventListener('click', selectYear);
    year_menu.appendChild(yearButton);
  }

  function getDayCount(year, month) {
    return 32 - new Date(year, month, 32).getDate();
  }

  function getDayName(year, month, day) {
    let selectedDate = new Date(year, month - 1, day);
    return selectedDate.toLocaleDateString('en-US', {weekday: 'long'});
  }

  populateDates();

// EVENT LISTENERS
  next_mth_element.addEventListener('click', goToNextMonth);
  prev_mth_element.addEventListener('click', goToPrevMonth);
  today_button.addEventListener('click', setDateToday);
  mth_element.addEventListener('click', toggleMonthSelect);
  year_element.addEventListener('click', toggleYearSelect);

// FUNCTIONS
  function toggleDatePicker() {
    calendar.classList.toggle('active');
  }

  function toggleMonthSelect() {
    month_menu.classList.toggle('active');
    year_menu.classList.remove('active');
  }

  function toggleYearSelect() {
    year_menu.classList.toggle('active');
    month_menu.classList.remove('active');
  }

  function goToNextMonth() {
    month++;
    if (month > 11) {
      month = 0;
      year++;
    }
    mth_element.textContent = months[month];
    year_element.textContent = year;
    month_menu.classList.remove('active');
    year_menu.classList.remove('active');
    populateDates();
  }

  function goToPrevMonth() {
    month--;
    if (month < 0) {
      month = 11;
      year--;
    }
    mth_element.textContent = months[month];
    year_element.textContent = year;
    month_menu.classList.remove('active');
    year_menu.classList.remove('active');
    populateDates();
  }

  function populateDates() {
    days_element.innerHTML = '';
    for (let i = 0; i < getEmptyFieldsCount(year, month); i++) {
      const emptySpace = document.createElement('span');
      days_element.appendChild(emptySpace);
    }
    for (let i = 0; i < getDayCount(year, month); i++) {
      const day_element = document.createElement('button');
      day_element.classList.add('day');
      day_element.textContent = (i + 1).toString();
      day_element.classList.remove('selected');
      if (selectedDay === (i + 1)) {
        day_element.classList.add('selected');
        selectedDate = new Date(year + '-' + (month + 1) + '-' + (i + 1));
        selectedDay = (i + 1);
        selectedMonth = month;
        selectedYear = year;
        selected_date.textContent = formatDate(selectedDate);
      }

      day_element.addEventListener('click', function() {
        selectedDate = new Date(year + '-' + (month + 1) + '-' + (i + 1));
        selectedDay = (i + 1);
        selectedMonth = month;
        selectedYear = year;
        selected_date.textContent = formatDate(selectedDate);
        calendar.classList.remove('active');

        populateDates();
      });

      days_element.appendChild(day_element);
    }

    function getEmptyFieldsCount(year, month) {
      let emptyFieldsCount = 0;
      switch (getDayName(year, month + 1, 1)) {
        case 'Sunday':
          emptyFieldsCount = 1;
          break;
        case 'Monday':
          emptyFieldsCount = 2;
          break;
        case 'Tuesday':
          emptyFieldsCount = 3;
          break;
        case 'Wednesday':
          emptyFieldsCount = 4;
          break;
        case 'Thursday':
          emptyFieldsCount = 5;
          break;
        case 'Friday':
          emptyFieldsCount = 6;
          break;
      }
      return emptyFieldsCount;
    }
  }

  function formatDate(d) {
    let day = d.getDate();
    if (day < 10) {
      day = '0' + day;
    }

    let month = d.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }

    let year = d.getFullYear();

    return month + ' / ' + day + ' / ' + year;
  }

  function setDateToday() {
    let today = new Date();
    selectedDay = today.getDate();
    selectedMonth = today.getMonth();
    selectedYear = today.getFullYear();
    day = today.getDate();
    month = today.getMonth();
    year = today.getFullYear();
    console.log(today.getMonth());
    mth_element.textContent = months[month];
    year_element.textContent = year;
    selected_date.textContent = formatDate(date);
    populateDates();
    calendar.classList.remove('active');
  }

  function selectMonth(e) {
    selectedMonth = parseInt(e.target.value);
    month = parseInt(e.target.value);
    mth_element.textContent = months[month];
    selected_date.textContent = formatDate(date);
    toggleMonthSelect();
    populateDates();
  }

  function selectYear(e) {
    selectedYear = e.target.innerText;
    year = e.target.innerText;
    year_element.textContent = year;
    selected_date.textContent = formatDate(date);
    toggleYearSelect();
    populateDates();
  }

  document.addEventListener('mouseup', function(e) {
    if (!calendar.contains(e.target)) {
      calendar.classList.remove('active');
    }
  });
}

//Events Module
let selectedDateEle = document.querySelector('.calendar-events .selected-date'),
    eventsData = document.querySelector('.calendar-events .events-of-date'),
    dataSet = {
      '06 / 07 / 2021': {
        event1: {
          header: 'General Meeting',
          description: 'Frontend & Backend',
          time: '9:00 pm',
        },
        event2: {
          header: 'Frontend Meeting',
          description: 'Discuss Statistics',
          time: '7:00 pm',
        },
      },
      '06 / 23 / 2021': {
        event1: {
          header: 'Outing',
          description: 'outing',
          time: '11:00 am',
        },
      }
    };

//Event Listeners
selectedDateEle.addEventListener('DOMSubtreeModified', showEvents);

//Functions
function showEvents() {
  //check if the dataset has the current date
  if (dataSet.hasOwnProperty(selectedDateEle.textContent)) {
    eventsData.innerHTML = '';

    /*loops on every key in the inner object
    that has the date of the selected date
    e.g. the key event1 in object '06 / 16 / 2021' */
    for (let key in dataSet[selectedDateEle.textContent]) {

      //obj represents the current event being iterated
      let obj = dataSet[selectedDateEle.textContent][key];

      //creating elements to put data into
      let
          eventDiv = document.createElement('div'),
          eventDataDiv = document.createElement('div'),
          eventTimeDiv = document.createElement('div'),
          eventName = document.createElement('h5'),
          eventDescription = document.createElement('p'),
          eventTimeSpan = document.createElement('span');

      //adding styling classes to elements
      eventDiv.classList.add('event');
      eventDataDiv.classList.add('event-data');
      eventTimeDiv.classList.add('event-time');
      eventName.classList.add('event-name');
      eventDescription.classList.add('event-description');

      //adding data of current event to the created elements
      eventName.innerText = obj.header;
      eventDescription.innerText = obj.description;
      eventTimeSpan.innerText = obj.time;

      //creating the hierarchy of the elements
      eventDataDiv.appendChild(eventName);
      eventDataDiv.appendChild(eventDescription);
      eventTimeDiv.appendChild(eventTimeSpan);
      eventDiv.appendChild(eventDataDiv);
      eventDiv.appendChild(eventTimeDiv);

      //appending the elements hierarchy to the events data holder element
      eventsData.appendChild(eventDiv);
    }
  } else {
    /*clearing the events data holder element
    in case no events are present in this date*/
    eventsData.innerHTML = '<span>There are no events for this day</span>';
  }
}

customDate();