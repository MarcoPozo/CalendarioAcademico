document.addEventListener("DOMContentLoaded", function () {
  const calendarEl = document.getElementById("calendar");
  const eventos = window.eventosData || [];

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    locale: "es",
    height: "auto",
    events: eventos,
    eventDisplay: "block",
    dayMaxEventRows: true,
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "",
    },
  });

  calendar.render();
});
