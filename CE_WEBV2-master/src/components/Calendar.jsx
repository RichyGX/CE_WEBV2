import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';  
import esLocale from "@fullcalendar/core/locales/es"; 


export const Calendar = () => {
  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, listPlugin]}  
        height="auto"
        fixedWeekCount={false}          
        showNonCurrentDates={false}
        locale={esLocale} 
        titleFormat={{ month: 'long', year: 'numeric' }}
        events={[
          { title: "CTE", date: "2025-04-25", color:"#FF01BF" },
          { title: "Reunión padres de Familia", date: "2025-04-28", color:"#2A007B" },
          { title: "Suspención de labores docentes", date: "2025-05-01", color: "#2A007B" }, // puedes personalizar color
          { title: "Suspención de labores docentes", date: "2025-05-05", color: "#2A007B" }, 
          { title: "Dia conmemorativo", date: "2025-05-14", color: "#2A007B" }, 
          { title: "Suspención de labores docentes", date: "2025-05-15", color: "#2A007B" }, 
          { title: "Junta de padres", date: "2025-05-29", color: "#2A007B" }, 
          { title: "CTE", date: "2025-05-30", color: "#FF01BF" }, 
          { title: "CTE", date: "2025-06-27", color: "#FF01BF" }, 
          { title: "Registro de calificaciones", date: "2025-07-11", color: "#2A007B" }, 
          { title: "Fin de ciclo escolar", date: "2025-07-16", color: "#2A007B" }, 
          { title: "Taller para docentes", date: "2025-07-17", color: "#2A007B" }, 
          { title: "Taller para docentes", date: "2025-07-18", color: "#2A007B" }, 
          { title: "Vaciones", date: "2025-07-19", color: "#777879" }, 
          { title: "Vaciones", date: "2025-07-20", color: "#777879" }, 
          { title: "Vaciones", date: "2025-07-21", color: "#777879" }, 
          { title: "Vaciones", date: "2025-07-22", color: "#777879" }, 
          { title: "Vaciones", date: "2025-07-23", color: "#777879" }, 
          { title: "Vaciones", date: "2025-07-24", color: "#777879" }, 
          { title: "Vaciones", date: "2025-07-25", color: "#777879" }, 
          { title: "Vaciones", date: "2025-07-26", color: "#777879" }, 
          { title: "Vaciones", date: "2025-07-27", color: "#777879" }, 
          { title: "Vaciones", date: "2025-07-28", color: "#777879" }, 
          { title: "Vaciones", date: "2025-07-29", color: "#777879" }, 
          { title: "Vaciones", date: "2025-07-30", color: "#777879" }, 
          { title: "Vaciones", date: "2025-07-31", color: "#777879" }, 
          { title: "Vaciones", date: "2025-08-01", color: "#777879" }, 
          { title: "Vaciones", date: "2025-08-02", color: "#777879" }, 
          { title: "Vaciones", date: "2025-08-03", color: "#777879" }, 
          { title: "Vaciones", date: "2025-08-04", color: "#777879" }, 
          { title: "Vaciones", date: "2025-08-05", color: "#777879" }, 
          { title: "Vaciones", date: "2025-08-06", color: "#777879" }, 
          { title: "Vaciones", date: "2025-08-07", color: "#777879" }, 
          { title: "Vaciones", date: "2025-08-08", color: "#777879" }, 
          { title: "Vaciones", date: "2025-08-09", color: "#777879" }, 
          { title: "Vaciones", date: "2025-08-10", color: "#777879" }, 
          { title: "Vaciones", date: "2025-08-11", color: "#777879" }, 
          { title: "Vaciones", date: "2025-08-12", color: "#777879" }, 
          { title: "Vaciones", date: "2025-08-13", color: "#777879" }, 
          { title: "Vaciones", date: "2025-08-14", color: "#777879" }, 
          { title: "Vaciones", date: "2025-08-15", color: "#777879" }, 
          { title: "Vaciones", date: "2025-08-16", color: "#777879" }, 
          { title: "Vaciones", date: "2025-08-17", color: "#777879" }, 
          { title: "CTE Fase intensiva", date: "2025-08-18", color: "#FF3301" }, 
          { title: "CTE Fase intensiva", date: "2025-08-19", color: "#FF3301" }, 
          { title: "CTE Fase intensiva", date: "2025-08-20", color: "#FF3301" }, 
          { title: "CTE Fase intensiva", date: "2025-08-21", color: "#FF3301" }, 
          { title: "CTE Fase intensiva", date: "2025-08-22", color: "#FF3301" }, 
          { title: "Vaciones", date: "2025-08-23", color: "#777879" }, 
          { title: "Vaciones", date: "2025-08-24", color: "#777879" }, 
          { title: "Inicio del ciclo escolar", date: "2025-08-25", color: "#2A007B" }, 
          { title: "Suspención oficial", date: "2025-09-16", color: "#2A007B" }, 
          { title: "CTE", date: "2025-09-26", color: "#FF01BF" }, 
          { title: "CTE", date: "2025-10-24", color: "#FF01BF" }, 
          { title: "Suspención oficial", date: "2025-11-18", color: "#2A007B" }, 
          { title: "Día conmemorativo", date: "2025-11-20", color: "#2A007B" }, 
          { title: "Registro de calificaciones", date: "2025-11-21", color: "#2A007B" }, 
          { title: "CTE", date: "2025-11-28", color: "#FF01BF" }, 
          { title: "Vacaciones", date: "2025-12-19", color: "#777879" }, 
          { title: "Vacaciones", date: "2025-12-20", color: "#777879" }, 
          { title: "Vacaciones", date: "2025-12-21", color: "#777879" }, 
          { title: "Vacaciones", date: "2025-12-22", color: "#777879" }, 
          { title: "Vacaciones", date: "2025-12-23", color: "#777879" }, 
          { title: "Vacaciones", date: "2025-12-24", color: "#777879" }, 
          { title: "Vacaciones", date: "2025-12-25", color: "#777879" }, 
          { title: "Vacaciones", date: "2025-12-26", color: "#777879" }, 
          { title: "Vacaciones", date: "2025-12-27", color: "#777879" }, 
          { title: "Vacaciones", date: "2025-12-28", color: "#777879" }, 
          { title: "Vacaciones", date: "2025-12-29", color: "#777879" }, 
          { title: "Vacaciones", date: "2025-12-30", color: "#777879" }, 
          { title: "Vacaciones", date: "2025-12-31", color: "#777879" }, // puedes personalizar color
        ]}
      />
    </div>
  );
};
