import moment from "moment-jalaali";
import React, { useEffect, useState } from "react";

const weekDays = [
  "یک شنبه",
  "دو شنبه",
  "سه شنبه",
  "چهار شنبه",
  "پنج شنبه",
  "جمعه",
];

const yearMonth = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

const PersianDate = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const updateClock = () => {
    let m = moment();
    let finalDate = `${weekDays[m.day()]} ${m.jDate()} ${
      yearMonth[m.jMonth()]
    } ${m.jYear()}`;
    setDate(finalDate);
    setTime(m.format("HH:mm:ss"));
  };

  useEffect(() => {
    updateClock();
    const interval = setInterval(() => {
      updateClock();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p className="date">
        <span>{date}</span> / <span>{time}</span>
      </p>
    </div>
  );
};

export default PersianDate;
