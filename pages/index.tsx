import { useEffect, useState } from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import rrulePlugin from '@fullcalendar/rrule';

export default function Home() {
  const [events, setEvents] = useState<any>([]);

  useEffect(() => {
    const generate = (now: Date) => {
      const outEvents = [];
      for (let i = 0; i < 3; i++) {
        const start = new Date(now);
        start.setMinutes(start.getMinutes() + 30 * i);
        const end = new Date(start);
        end.setMinutes(start.getMinutes() + 30);
        const event = {
          title: `Event ${i}`,
          start,
          end,
        };
        outEvents.push(event);
      }
      return outEvents;
    };

    const newEvents = [];

    const now = new Date();
    now.setHours(now.getHours() + 1, 0, 0, 0);
    newEvents.push(...generate(now));

    now.setDate(now.getDate() + 1);
    newEvents.push(...generate(now));

    now.setDate(now.getDate() + 1);
    newEvents.push(...generate(now));

    console.log(events);
    setEvents(newEvents);
  }, []);

  return (
    <div className='p-2 h-screen'>
      <FullCalendar
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          listPlugin,
          interactionPlugin,
          rrulePlugin,
        ]}
        height={'100%'}
        nowIndicator={true}
        editable={true}
        snapDuration={'00:15'}
        scrollTime={`${new Date().getHours()}:00`}
        initialView='timeGridWeek'
        events={events}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,listWeek',
        }}
      />
    </div>
  );
}
