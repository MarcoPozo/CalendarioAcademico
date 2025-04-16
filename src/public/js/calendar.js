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

    eventDidMount: function (info) {
      const dayEl = info.el.closest(".fc-daygrid-day");
      if (dayEl && info.event.backgroundColor) {
        dayEl.style.backgroundColor = info.event.backgroundColor;
        info.el.style.backgroundColor = "transparent";
        info.el.style.color = "var(--color-texto-principal)";
        info.el.style.fontWeight = "bold";
      }
    },
  });

  calendar.render();
});
