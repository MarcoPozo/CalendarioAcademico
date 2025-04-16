document.addEventListener("DOMContentLoaded", function () {
  const calendarEl = document.getElementById("calendar");
  const eventos = window.eventosData || [];

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    locale: "es",
    height: "auto",
    events: eventos,
    dayMaxEventRows: true,
    headerToolbar: {
      left: "title",
      center: "",
      right: "today prev,next",
    },
  });

  calendar.render();
});
