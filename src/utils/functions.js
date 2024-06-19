import { useEffect } from "react";

export const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();

  // Add leading zero if month or day is single digit
  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;

  return `${year}-${month}-${day}`;
};

export const useConsole = (value) => {
  useEffect(() => {
    console.log(value);
  }, [value]);
};

export const toUpper = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

export function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
