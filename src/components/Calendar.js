import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGreaterThan,
  faLessThan,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";

import React from "react";
import { useState } from "react";

const Calendar = (props) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dateSelected, setDateSelected] = useState([]);

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendar = () => {
    const firstDayOfMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1
    ).getDay();
    const days = daysInMonth(
      selectedDate.getMonth(),
      selectedDate.getFullYear()
    );
    const weeks = [[]];
    let currentWeek = 0;

    for (let i = 0; i < firstDayOfMonth; i++) {
      weeks[currentWeek].push(null);
    }

    for (let i = 1; i <= days; i++) {
      if (weeks[currentWeek].length === 7) {
        weeks.push([]);
        currentWeek++;
      }
      weeks[currentWeek].push(i);
    }

    return weeks;
  };

  // const handleDateClick = (day) => {
  //   setDateSelected((prevDates) => [...prevDates, day]);
  //   props.handleDateClick(day);
  // };

  const handleDateClick = (day) => {
    setDateSelected((prevDates) => {
      const newDates = [...prevDates];
      newDates[newDates.length - 1] = day;
      return newDates;
    });
    props.handleDateClick(day);
  };

  return (
    <div className="mr-5">
      <div>
        <h1 className="font-extrabold md:mb-12 mb-4 md:mt-10 text-4xl md:ml-5 ml-8">
          Select a Date & Time
        </h1>
      </div>
      <div className="flex justify-center items-center mb-4">
        <button
          className=" text-gray-500 font-bold py-[20px] px-6 hover:bg-blue-100 hover:rounded-full hover:text-blue-700 focus:outline-none focus:shadow-outline"
          onClick={() =>
            setSelectedDate(
              new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1)
            )
          }
        >
          <FontAwesomeIcon icon={faLessThan} size="xl" />
        </button>
        <h2 className="text-4xl text-gray-700 mx-4">
          {new Date(
            selectedDate.getFullYear(),
            selectedDate.getMonth()
          ).toLocaleString("default", { month: "long", year: "numeric" })}
        </h2>
        <button
          className=" text-gray-500 font-bold py-[20px] px-6 hover:bg-blue-100 hover:rounded-full hover:text-blue-700 focus:outline-none focus:shadow-outline"
          onClick={() =>
            setSelectedDate(
              new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1)
            )
          }
        >
          <FontAwesomeIcon icon={faGreaterThan} size="xl" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 ml-5 md:ml-0">
        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
          <div
            key={day}
            className="text-center text-xl md:text-3xl font-medium text-gray-700"
          >
            {day}
          </div>
        ))}
        {generateCalendar().map((week, index) => (
          <React.Fragment key={index}>
            {week.map((day, index) => (
              <div
                key={index}
                className="text-center text-gray-500 md:text-3xl text-xl font-normal py-5 md:py-9 hover:bg-blue-100 hover:rounded-full hover:text-blue-700"
                id="date-picker"
                onClick={() => handleDateClick(day)}
                style={{
                  backgroundColor:
                    dateSelected[dateSelected.length - 1] === day
                      ? "#206dde75"
                      : "",
                  color:
                    dateSelected[dateSelected.length - 1] === day
                      ? ""
                      : "gray-500",
                  ...(day === day && {
                    paddingTop: "20px",
                    paddingBottom: "20px",
                    borderRadius: "100px",
                  }),
                }}
              >
                {day !== null ? day : ""}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>

      <div className="mb-8">
        <h1 className=" font-bold mt-6 text-3xl mb-4 md:ml-5 ml-8 ">Time Zone</h1>
        <div className=" flex">
          <FontAwesomeIcon
            icon={faEarthAmericas}
            size="2xl"
            className="ml-10"
          />
          <h2 className="text-2xl text-gray-700 ml-4">
            UK, Ireland, Lisbon Time (16.54)
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
