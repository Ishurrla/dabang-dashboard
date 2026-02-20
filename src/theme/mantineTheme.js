import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'indigo',
  fontFamily: 'Poppins, sans-serif',
  headings: { fontFamily: 'Poppins, sans-serif' },
  defaultRadius: 'md',
  components: {
    Card: {
      defaultProps: {
        shadow: 'xs',
        radius: 'md',
        withBorder: false,
      },
    },
  },
});
