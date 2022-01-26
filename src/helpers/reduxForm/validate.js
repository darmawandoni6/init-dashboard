export const required = (value) => (value ? undefined : 'required');

export const emailValid = (value) => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,10}$/i.test(value);
  if (value && !regex) return 'Invalid email address';
};
