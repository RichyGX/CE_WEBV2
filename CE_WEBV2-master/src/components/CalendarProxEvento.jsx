import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';  
import esLocale from "@fullcalendar/core/locales/es"; 


export const CalendarProxEvento = () => {
  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, listPlugin]}  
        height="250px"
        fixedWeekCount={false}          
        showNonCurrentDates={false}
        locale={esLocale} 
        titleFormat={{ month: 'long', year: 'numeric' }}
        events={[
          { date: "2025-04-25", color:"#339901" },

        ]}
      />
    </div>
  );
};
