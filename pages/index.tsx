import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import rrulePlugin from '@fullcalendar/rrule';

export default function Home() {
  return (
    <>
      <FullCalendar
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          listPlugin,
          interactionPlugin,
          rrulePlugin,
        ]}
        initialView='dayGridMonth'
        events={[
          { title: 'event 1', date: '2019-04-01' },
          { title: 'event 2', date: '2019-04-02' },
        ]}
      />
    </>
  );
}