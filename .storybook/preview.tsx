import React from 'react';
import type { Preview } from '@storybook/react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';

// .storybook/preview.js

import { CssBaseline } from '@mui/material';
import AppTheme from '../example/AppTheme/AppTheme';

export const parameters = {
  controls: {
    expanded: true, // Adds the description and default columns
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

/* snipped for brevity */

export const withMuiTheme = (Story) => (
  <AppTheme>
    <CssBaseline enableColorScheme />
    <Story />
  </AppTheme>
);

export const decorators = [withMuiTheme];

// const preview: Preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
// };

// export default preview;
