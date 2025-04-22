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
          { title: "CTE", date: "2025-04-25", color:"#2A007B" },
          { title: "Reunión padres de Familia", date: "2025-04-28", color:"#2A007B" },
          { title: "Firma de boletas", date: "2025-04-30", color: "#2A007B" }, // puedes personalizar color
        ]}
      />
      
    </div>
  );
};
