import { Calendar } from '@mantine/dates';
import { Grid, GridCol } from '@mantine/core';
import { ReactNode, useState } from 'react';

/* Global State : Calendar Data. */
import useStore from '@/store/store';

import './homepage.css';

export function HomePage() {
  const { calendarData } = useStore();

  return (
    <>
      <Grid className="calendar-grid" justify="center" align="center" gutter={{ base: 5 }}>
        <GridColumn>
          <CustomCalendar>
          </CustomCalendar>
        </GridColumn>
        <GridColumn>
          <CustomCalendar>
          </CustomCalendar>
        </GridColumn>
        <GridColumn>
          <CustomCalendar>
          </CustomCalendar>
        </GridColumn>
        <GridColumn>
          <CustomCalendar>
          </CustomCalendar>
        </GridColumn>
      </Grid>
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

type CustomCalendar = {};

/* Styled Mantine UI Calendar Component. */
export function CustomCalendar(props: CustomCalendar) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setModalOpen(true);
  };

  return (
    <Calendar
      getDayProps={(date: Date) => ({
        onClick: () => console.log(date),
      })}
    >

    </Calendar>
  );
}
