import { Calendar } from '@mantine/dates';

import { Grid, Menu } from '@mantine/core';
import { ReactNode, useState } from 'react';

import dayjs from 'dayjs';

/* Global State : Calendar Data. */
import useStore from '@/store/store';

export function HomePage() {
  const { calendarData } = useStore();

  return (
    <>
      <CustomCalendar
        highlightedDates={[]}
        monthNumber={2}
        yearNumber={2024}
      >
      </CustomCalendar>
    </>
  );
}

/* Styled Grid Column. */
const GridColumn: React.FC<{ children: ReactNode }> = ({ children }) => (
  <Grid.Col
    span={3}
    className="calendar-column"
    >
    {children}
  </Grid.Col>
);

type HighlightedDate = {
  date: Date;
  color: string;
  category: string;
};

type CustomCalendarProps = {
  highlightedDates: HighlightedDate[],
  monthNumber: number,
  yearNumber: number,
};

/* Styled Mantine UI Calendar Component. */
export function CustomCalendar(props: CustomCalendarProps) {
  const { highlightedDates, monthNumber, yearNumber } = props;

  const [selected, setSelected] = useState<Date[]>([]);

  /* Calculate month for rendered calendar. */
  const calendarDate = new Date(yearNumber, monthNumber - 1, 1);

  const isHighlighted = (date) => true;

  const getDayProps = (date: Date) => ({
      selected: selected.some(s => dayjs(date).isSame(s, 'date')),
  });

  return (
    <main style={{
      position: 'relative',
      width: 'fit-content',
    }}>
      <div style={{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        top: '0px',
        left: '0px',
        width: '100%',
        zIndex: '999',
        height: '17%',
      }}>
        {calendarDate.toLocaleString('default', { month: 'long' })}
      </div>
      <Calendar
        locale="en"
        withCellSpacing={false}
        renderDay={(day) => <CustomDay date={day} />}
        date={calendarDate}
        style={{
          position: 'relative',
        }}
        getDayProps={getDayProps}
      >
      </Calendar>
    </main>
  );
}

/* Individual Calendar Day Component. */
function CustomDay(props: { date: Date }) {
  return (
    <>
      <Menu
        trigger="hover"
        openDelay={300}
        loop={false}
        withinPortal={false}
        trapFocus={false}
        menuItemTabIndex={0}
      >
        <Menu.Target>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              width: '100%',
            }}
          >
            {props.date.getDate()}
          </div>
        </Menu.Target>
        <Menu.Dropdown
          style={{
            width: '10rem',
            height: '5rem',
          }}>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}
