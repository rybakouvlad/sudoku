export const getTimes = (timer: number): string => {
  const getSeconds = `0${timer % 60}`.slice(-2);
  const minutes: number = Math.floor(timer / 60);
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};
