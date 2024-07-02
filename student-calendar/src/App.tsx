
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';

import './App.css'

const theme = createTheme({
  white: '#F0F0F0',
});

function App() {
  return (
    <>
      <MantineProvider>
        <main>
          Hi
        </main>
      </MantineProvider>
    </>
  )
}

export default App
