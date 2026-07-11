// Shared design tokens for AIUB Connect+
// Pulled from the approved UI/UX board so every module (Student, Faculty,
// Alumni, Admin) looks consistent. Do not hardcode colors/fonts in screens —
// always import from here.

export const colors = {
  navy: '#1A3A6B',
  navyDark: '#0E2647',
  navySoft: '#274A82',

  gold: '#C8A951',
  goldLight: '#F1E4BE',
  goldDark: '#A6863A',

  white: '#FFFFFF',
  bg: '#EEF1F7',
  panel: '#F6F7FB',

  gray100: '#F5F6F9',
  gray200: '#ECEEF3',
  gray300: '#E1E4EC',
  gray500: '#8A93A6',
  text: '#1B2333',
  muted: '#6C7488',

  // Role colors — used for role badges across all 4 modules
  student: '#4A90D9',
  faculty: '#9B59B6',
  alumni: '#E07B2E',
  admin: '#E14F4F',

  danger: '#E14F4F',
  success: '#2EAF6E',
};

export const radius = {
  lg: 26,
  md: 16,
  sm: 10,
};

export const shadow = {
  soft: {
    shadowColor: colors.navyDark,
    shadowOpacity: 0.14,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 6,
  },
  card: {
    shadowColor: colors.navyDark,
    shadowOpacity: 0.07,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
};

export const font = {
  display: { fontWeight: '800' },
  h2: { fontWeight: '700' },
  body: { fontWeight: '500' },
  caption: { fontWeight: '600', textTransform: 'uppercase' },
};

export default { colors, radius, shadow, font };
