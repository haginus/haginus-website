import React from 'react';
import './App.scss';
import Header from './components/Header';
import SkillsSection from './sections/SkillsSection';
import WorkExperienceSection from './sections/WorkExperienceSection';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import EducationSection from './sections/EducationSection';

export const theme = createTheme({
  palette: {
    // @ts-ignore
    type: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>
        <SkillsSection />
        <WorkExperienceSection />
        <EducationSection />
      </main>
    </ThemeProvider>
  );
}

export default App;
