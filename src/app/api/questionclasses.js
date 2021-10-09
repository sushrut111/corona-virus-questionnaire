const classes = (i) => {
  if (i < 3) return '';
  if (i < 7) return 'rowexpose';
  if (i < 20) return 'rowsymp';
  return 'rowrisk';
};
export default classes;
