import { Calendar } from '@mantine/dates';
import { Grid, GridCol } from '@mantine/core';
import { Children, ReactNode } from 'react';

export function HomePage() {
  return (
    <>
      <Grid>
        <GridColumn>
          <CustomCalendar>
          </CustomCalendar>
        </GridColumn>
      </Grid>
    </>
  );
}

/* Styled Grid Column */
const GridColumn: React.FC<{ children: ReactNode }> = ({ children }) => (
  <Grid.Col>
    {children}
  </Grid.Col>
);

type CustomCalendar = {
  
};

/* Styled Mantine UI Calendar Component. */
export function CustomCalendar(props: CustomCalendar) {
  return (
    <Calendar>
    </Calendar>
  );
}
