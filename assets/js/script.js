// save reference to important DOM elements
var dateDisplayEl = $('#date-display');
var eventNameEl = $('input[event="event-name"]');

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// TODO: 4. What is the current time in the format: hours:minutes:seconds

// Datepicker widget
$(function () {
    $('#datepicker').datepicker({
      changeMonth: true,
      changeYear: true,
    });

// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
$('#event-display').children('ul').children().addClass('bg-primary text-dark mb-3 p-3').css('border-radius', '.4rem');

// WHEN I click into a time block



// THEN I can enter an event
function newEvent(event) {
        event.preventDefault();

        console.log('event-Name', eventNameEl.val());
    }

    // WHEN I click the save button for that time block
    // THEN the text for that event is saved in local storage
    // WHEN I refresh the page
    // THEN the saved events persist
})
