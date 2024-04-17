import React from "react";
import { useState } from "react";
import Calendar from "./Calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEarthAmericas,
  faCalendar,
  faUser,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

const MeetingDetail = () => {
  const times = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00"];
  const [selectedName, setSelectedName] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedDateFormatted, setSelectedDateFormatted] = useState(null);
  const [numCols, setNumCols] = useState(6);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showTimeDiv, setShowTimeDiv] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);

  const handleDateClick = (day) => {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day)
    );
    const dayOfWeek = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      day
    ).getDay();

    setSelectedDay(dayOfWeek);
    setSelectedDateFormatted(
      new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        day
      ).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        // year: "numeric"
      })
    );
    setNumCols(8);
    document.getElementById("third-div").classList.remove("hidden");
    document.getElementById("date-picker").classList.remove("py-9");
  };

  const handleTimeClick = (time, index) => {
    setSelectedTime(time === selectedTime ? null : time);
    setSelectedIndex(index);
  };

  const handleNextClick = () => {
    setShowForm(true);

    document.getElementById("second-div").style.display = "none";
    document.getElementById("third-div").style.display = "none";
    document.getElementById("cookie-btn").classList.remove("mt-[500px]");
    document.getElementById("cookie-btn").style.top = "820px";

    setSelectedDateFormatted(
      new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate()
      ).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    );
    setSelectedTime(selectedTime);
    setShowTimeDiv(true);
  };

  const handleScheduleClick = () => {
    setShowSchedule(true);
    document.getElementById("first-div").style.display = "none";
    document.getElementById("second-div").style.display = "none";
    document.getElementById("third-div").style.display = "none";
    setSelectedName(document.getElementById("name").value);

    setShowForm(false);
    // setSelectedName("John Doe");
    setSelectedDateFormatted(
      new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate()
      ).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",

        year: "numeric",
      })
    );
    setSelectedTime(selectedTime);
  };

  return (
    <div className={`md:grid grid-cols-${numCols} md:grid-flow-col`}>
      <div className=" md:col-span-3 md:border-r-4 md:mr-10" id="first-div">
        <div className=" border-b-4">
          <img
            className=" w-auto h-auto object-cover  mx-auto"
            src="https://tse2.mm.bing.net/th?id=OIP.tUKOtf_k4tGJloRC9P5WyAAAAA&pid=Api&P=0&h=180"
            alt=""
          ></img>
        </div>

        <div className="">
          <h1 className=" text-black font-bold text-5xl md:ml-12 ml-8 mt-5">
            Fibery Demo
          </h1>
          <div className=" flex flex-row text-gray-600 font-semibold my-10">
            <FontAwesomeIcon
              icon={faClock}
              size="2xl"
              className="md:ml-12 ml-8"
            />
            <h3 className=" ml-4 text-2xl">45 min</h3>
          </div>

          {showTimeDiv && (
            <>
              <div className="flex flex-row text-gray-600 font-semibold my-10">
                <FontAwesomeIcon
                  icon={faCalendar}
                  size="2xl"
                  className="md:ml-12 ml-8"
                />
                <h3 className="ml-4 text-2xl">
                  {selectedTime}, {selectedDateFormatted}
                </h3>
              </div>
              <div className=" flex flex-row text-gray-600 font-semibold my-10">
                <FontAwesomeIcon
                  icon={faEarthAmericas}
                  size="2xl"
                  className="md:ml-12 ml-8"
                />
                <h2 className="text-2xl text-gray-700 ml-4">
                  UK, Ireland, Lisbon Time (16.54)
                </h2>
              </div>
            </>
          )}

          <div className=" max-w-[460px]">
            <p className=" text-gray-800 md:ml-12 ml-8 mr-5 text-2xl">
              Book a meeting with Fibery team. Talk to a real person about how
              to get your proces set with us{" "}
              <span className="inline-flex mr-2">
                <img
                  className=" w-7 h-7"
                  src="https://tse1.mm.bing.net/th?id=OIP.qQOtdKcL5HXxvSFYzJmJkAHaHH&pid=Api&P=0&h=180 "
                  alt=""
                />
              </span>
              or not
              <span className="inline-flex ml-2">
                <img
                  className=" w-7 h-7 mt-2"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Emoji_u1f4a9.svg/800px-Emoji_u1f4a9.svg.png "
                  alt=""
                />
              </span>
            </p>
          </div>

          <button
            id="cookie-btn"
            className=" md:relative md:mt-[500px] mt-5 md:ml-10 ml-8 mb-10 font-normal text-blue-500 text-2xl"
          >
            Cookie Settings
          </button>
        </div>
      </div>

      <div className=" md:col-span-3 " id="second-div">
        <Calendar handleDateClick={handleDateClick} />
      </div>

      <div className="col-span-2 ml-2 md:mx-7 hidden" id="third-div">
        {selectedDateFormatted && (
          <div className="mt-32 ">
            <p className="text-4xl text-center text-gray-700 mb-8 mr-3">
              {selectedDateFormatted}
            </p>

            <div className="flex flex-col text-center max-w-[350px] justify-center md:ml-10 md:mr-5 ">
              <div className="col-span-2 mx-7" id="time-div">
                {times.map((time, index) => (
                  <div
                    key={index}
                    className={`border-blue-700 border-2 rounded-md p-7 text-3xl font-semibold text-blue-600 my-5 w-[300px] ${
                      selectedTime === time ? "selected-time" : ""
                    }`}
                    onClick={() => handleTimeClick(time, index)}
                    style={{
                      width: selectedTime === time ? "150px" : "300px",
                      backgroundColor: selectedTime === time ? "grey" : "",
                      color: selectedTime === time ? "white" : "",
                      border: selectedTime === time ? "grey" : "",
                      transition: "width 0.2s ease-out",
                    }}
                  >
                    {time}
                  </div>
                ))}
                {selectedTime && (
                  <div
                    className=" h-[94px] bg-blue-600 text-white rounded-md text-3xl pt-7"
                    id="next-btn"
                    onClick={handleNextClick}
                  >
                    Next
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {showForm && (
        <div className="col-span-6 mt-10 mx-4">
          <div>
            <h1 className="text-4xl font-semibold mb-5">Enter Details</h1>
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-black text-2xl font-semibold mb-5"
                aria-required="true"
              >
                Name<sup className="text-2xl -top-1">*</sup>
              </label>
              <input
                type="text"
                id="name"
                className=" border-2 border-gray-400 text-black rounded-2xl py-5 px-6 mb-8 focus:outline-none focus:shadow-outline text-3xl font-light"
                placeholder="Enter your name"
              />

              <label
                htmlFor="email"
                className="text-black text-2xl font-semibold mb-5"
              >
                Email <sup className="text-2xl -top-1">*</sup>
              </label>
              <input
                type="email"
                id="email"
                className="border-2 border-gray-400 text-black rounded-2xl py-5 px-6 mb-8 focus:outline-none focus:shadow-outline text-3xl font-light"
                placeholder="Enter your email"
              />
              <button className=" flex border-2 border-blue-600 rounded-full text-blue-600 text-3xl font-light   px-5 py-4 w-52">
                Add Guests
              </button>
            </div>
          </div>
          <div className="mt-8">
            <div>
              <h1 className="text-2xl text-black font-semibold">
                I want Fibery to work for: <sup className=" -top-1">*</sup>
              </h1>
              <div className="mt-5">
                <div className="flex flex-row mb-5">
                  <input
                    id="checkbox"
                    type="checkbox"
                    className="h-8 w-8 mr-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="checkbox"
                    className=" flex mr-20 text-3xl text-black font-light"
                  >
                    <img
                      className="w-7 h-7 mr-2"
                      src="http://icons.iconarchive.com/icons/google/noto-emoji-food-drink/1024/32361-carrot-icon.png"
                      alt=""
                    />
                    Myself
                  </label>
                </div>
                <div className="flex flex-row mb-5">
                  <input
                    id="checkbox"
                    type="checkbox"
                    className="h-8 w-8 mr-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="checkbox"
                    className=" flex text-3xl text-black font-light"
                  >
                    <img
                      className="w-7 h-7 mr-2"
                      src="https://tse4.mm.bing.net/th?id=OIP.pie3LnYCNnktW8wj91fjhQHaHk&pid=Api&P=0&h=180"
                      alt=""
                    />
                    <sub className="top-4 w-4">&#60;</sub>10 people
                  </label>
                </div>
                <div className="flex flex-row mb-5">
                  <input
                    id="checkbox"
                    type="checkbox"
                    className="h-8 w-8 mr-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="checkbox"
                    className=" flex text-3xl text-black font-light"
                  >
                    <img
                      className="w-8 h-8 mr-2"
                      src="https://tse1.mm.bing.net/th?id=OIP.qQOtdKcL5HXxvSFYzJmJkAHaHH&pid=Api&P=0&h=180"
                      alt=""
                    />
                    10-50 people
                  </label>
                </div>
                <div className=" flex flex-row mb-5">
                  <input
                    id="checkbox"
                    type="checkbox"
                    className="h-8 w-8 mr-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="checkbox"
                    className=" flex text-3xl text-black font-light"
                  >
                    <img
                      className=" w-8 h-8 mr-2"
                      src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-11/256/eagle.png "
                      alt=""
                    />
                    50<sub className=" top-5 mr-2">+</sub> people
                  </label>
                </div>
              </div>
            </div>
            {/* <div>i</div> */}

            <div className=" mt-12">
              <h1 className="text-2xl text-black font-semibold">
                You are more about <sup className=" -top-1">*</sup>
              </h1>
              <div className="mt-5">
                <div className="flex flex-row mb-5">
                  <input
                    id="checkbox"
                    type="checkbox"
                    className="h-8 w-8 mr-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="checkbox"
                    className=" flex mr-20 text-3xl text-black font-light"
                  >
                    <img
                      className="w-7 h-7 mr-2"
                      src="https://emojiguide.org/images/emoji/7/bzt6ym1tq2ob7.png"
                      alt=""
                    />
                    Leadership
                  </label>
                </div>
                <div className="flex flex-row mb-5">
                  <input
                    id="checkbox"
                    type="checkbox"
                    className="h-8 w-8 mr-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="checkbox"
                    className=" flex text-3xl text-black font-light"
                  >
                    <img
                      className="w-7 h-7 mr-2"
                      src="https://tse4.mm.bing.net/th?id=OIP.MLe3JCPLnYcoYSyyQkyUdQHaJv&pid=Api&P=0&h=180"
                      alt=""
                    />
                    Consulting
                  </label>
                </div>
                <div className="flex flex-row mb-5">
                  <input
                    id="checkbox"
                    type="checkbox"
                    className="h-8 w-8 mr-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="checkbox"
                    className=" flex text-3xl text-black font-light"
                  >
                    <img
                      className="w-8 h-8 mr-2"
                      src="https://tse1.mm.bing.net/th?id=OIP.4VglRSaTxOAga1c2xSNTKwAAAA&pid=Api&P=0&h=180"
                      alt=""
                    />
                    Product Management
                  </label>
                </div>
                <div className=" flex flex-row mb-5">
                  <input
                    id="checkbox"
                    type="checkbox"
                    className="h-8 w-8 mr-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="checkbox"
                    className=" flex text-3xl text-black font-light"
                  >
                    <img
                      className=" w-8 h-8 mr-2"
                      src="https://tse2.mm.bing.net/th?id=OIP.m59vvAKfoBvzGEnetXz3EwHaFD&pid=Api&P=0&h=180 "
                      alt=""
                    />
                    50<sub className=" top-5 mr-2">+</sub> Design
                  </label>
                </div>
                <div className=" flex flex-row mb-5">
                  <input
                    id="checkbox"
                    type="checkbox"
                    className="h-8 w-8 mr-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="checkbox"
                    className=" flex text-3xl text-black font-light"
                  >
                    <img
                      className=" w-8 h-8 mr-2"
                      src="https://tse4.mm.bing.net/th?id=OIP.ywkJLiiRZqI2Wym0khRx3gHaHw&pid=Api&P=0&h=180 "
                      alt=""
                    />
                    Engineering
                  </label>
                </div>
                <div className=" flex flex-row mb-5">
                  <input
                    id="checkbox"
                    type="checkbox"
                    className="h-8 w-8 mr-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="checkbox"
                    className=" flex text-3xl text-black font-light"
                  >
                    <img
                      className=" w-8 h-8 mr-2"
                      src="https://image.emojipng.com/590/604590.jpg"
                      alt=""
                    />
                    Sales
                  </label>
                </div>
                <div className=" flex flex-row mb-5">
                  <input
                    id="checkbox"
                    type="checkbox"
                    className="h-8 w-8 mr-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="checkbox"
                    className=" flex text-3xl text-black font-light"
                  >
                    <img
                      className=" w-8 h-8 mr-2"
                      src="https://tse2.mm.bing.net/th?id=OIP.TGIYsoJN0mIUriSntTNqogHaHw&pid=Api&P=0&h=180 "
                      alt=""
                    />
                    Marketing
                  </label>
                </div>
                <div className=" flex flex-row mb-5">
                  <input
                    id="checkbox"
                    type="checkbox"
                    className="h-8 w-8 mr-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="checkbox"
                    className=" flex text-3xl text-black font-light"
                  >
                    <img
                      className=" w-8 h-8 mr-2"
                      src="https://emojis.wiki/emoji-pics/messenger/gem-stone-messenger.png"
                      alt=""
                    />
                    Human Resources
                  </label>
                </div>
                <div className=" flex flex-row mb-5">
                  <input
                    id="checkbox"
                    type="checkbox"
                    className="h-8 w-8 mr-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="checkbox"
                    className=" flex text-3xl text-black font-light"
                  >
                    <img
                      className=" w-8 h-8 mr-2"
                      src="https://www.kindpng.com/picc/m/327-3272280_books-emoji-apple-hd-png-download.png"
                      alt=""
                    />
                    Education
                  </label>
                </div>
                <div className=" flex flex-row mb-5">
                  <input
                    id="checkbox"
                    type="checkbox"
                    className="h-8 w-8 mr-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="checkbox"
                    className=" flex text-3xl text-black font-light"
                  >
                    <img
                      className=" w-8 h-8 mr-2"
                      src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/58491/question-mark-emoji-clipart-md.png "
                      alt=""
                    />
                    Something else
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <div>
              <h1 className="text-black font-semibold text-2xl mb-5">
                Please, share anything that will help prepare for our meeting
              </h1>
              <textarea 
                rows="4"
                cols="42"
                className=" border-2 border-gray-400 text-3xl rounded-xl py-2 px-4 mb-2 focus:outline-none focus:shadow-outline md:w-auto w-80 h-48"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div>
              <h1 className="text-black font-semibold text-2xl mb-5">
                Please, share with us the name of your Fibery workspace (if any)
              </h1>
              <textarea
                rows="3"
                cols="42"
                className=" border-2 border-gray-400 text-3xl rounded-xl py-2 px-4 mb-2 focus:outline-none focus:shadow-outline md:w-auto w-80 h-48"
                placeholder="Enter your message"
              ></textarea>
              <div className="mt-5 mb-10 flex justify-center md:justify-normal">
                <button
                  className=" bg-blue-600 text-white px-5 py-5 rounded-full text-2xl"
                  onClick={handleScheduleClick}
                >
                  Schedule Event
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showSchedule && (
        <div className="col-span-6 flex justify-center text-center mt-20 flex-col md:flex-row">
          <div className="relative top-[1650px] right-[80px] md:top-[1150px] md:right-[250px] ">
            <a className="text-blue-500 text-2xl" href="#">
              Cookie settings
            </a>
          </div>
          <div className=" md:w-[750px]">
            <div className=" flex flex-col text-center justify-center">
              <div className="flex justify-center mb-20">
                <img
                  className="rounded-full w-40 h-40"
                  src="https://hairstylecamp.com/wp-content/uploads/very-short-red-hair.jpg"
                  alt=""
                />
              </div>
              <div className="flex justify-center">
                <img
                  className=" w-16 h-16 md:w-10 md:h-10 mt-1 ml-4 md:mr-5"
                  src="https://icones.pro/wp-content/uploads/2021/02/icone-de-tique-ronde-verte.png"
                  alt=""
                />
                <h1 className="text-5xl font-bold text-gray-800">
                  You are scheduled
                </h1>
              </div>

              <div className="flex flex-col">
                <p className="text-2xl text-gray-600 mt-8">
                  A calendar invitation has been sent to your email address.
                </p>
              </div>
            </div>

            <div className=" border-2 border-gray-400 rounded-2xl mt-3 mx-2">
              <div className="flex flex-row font-semibold my-10">
                <h1 className="text-black font-semibold text-4xl ml-12">
                  Fibery Demo
                </h1>
              </div>
              <div className=" flex flex-row text-gray-600 font-semibold my-10">
                <FontAwesomeIcon icon={faUser} size="2xl" className="ml-12" />
                <h2 className="text-2xl text-gray-500 ml-4">{selectedName}</h2>
              </div>
              <div className=" flex flex-row text-gray-600 font-semibold my-10">
                <FontAwesomeIcon
                  icon={faCalendar}
                  size="2xl"
                  className="ml-12"
                />
                <h2 className="text-2xl text-gray-500 ml-4">
                  {selectedTime}, {selectedDateFormatted}
                </h2>
              </div>
              <div className=" flex flex-row text-gray-600 font-semibold my-10">
                <FontAwesomeIcon
                  icon={faEarthAmericas}
                  size="2xl"
                  className="ml-12"
                />
                <h2 className="text-2xl text-gray-500 ml-4">
                  UK, Ireland, Lisbon Time (16.54)
                </h2>
              </div>
              <div className=" flex flex-row text-gray-600 font-semibold my-10">
                <FontAwesomeIcon icon={faVideo} size="2xl" className="ml-12" />
                <h2 className="text-2xl text-gray-500 ml-4">
                  Web conferencing details to follow.
                </h2>
              </div>
            </div>
            <div className=" border-b-2 border-gray-400 my-14"></div>

            <div className="flex flex-col mx-2">
              <h1 className="text-black font-bold text-2xl text-left mb-5 ">
                Schedule your own meeting with Calendly for free
              </h1>
              <h1 className=" text-black text-2xl font-light text-left mb-5">
                Eliminate the back-and-fourth emails for finding time.
              </h1>
              <div className="flex md:flex-row flex-col justify-center">
                <div className="flex flex-row border-2 border-black rounded-full md:px-8 mr-5 mb-3 md:mb-0">
                  <img
                    className="w-10 h-10 md:mt-8 md:mr-3 m-5 md:m-0 "
                    src="https://app.prime-response.com/system/uploads/asset/image/file/000/000/000/037/google_logo.png"
                    alt=""
                  />
                  <button className="text-2xl font-light">
                    Sign up with Google
                  </button>
                </div>
                <div className="flex flex-row border-2 border-black rounded-full md:px-8 md:py-5">
                  <img
                    className="w-10 h-10 md:mt-3 md:mr-3 m-5 md:m-0 "
                    src="https://tse2.mm.bing.net/th?id=OIP.sFLk_VjAQf-JSRBSuW93bAHaHa&pid=Api&P=0&h=180"
                    alt=""
                  />
                  <button className="text-2xl font-light">
                    Sign up with Microsofts
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-8 mb-16">
              <a className="text-blue-600 text-2xl" href="#">
                Sign up with work email
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx="true">{`
        @media (max-width: 1550px) {
          #next-btn {
            width: 150px;
            position: absolute;
            left: calc(1307px + ${selectedIndex * 0}px);
            top: calc(218px + ${selectedIndex * 115}px);
            transition: width 0.2s ease-out;
            overflow: hidden;
          }
        }

        @media (max-width: 500px) {
          #next-btn {
            width: 150px;
            position: absolute;
            left: calc(190px + ${selectedIndex * 0}px);
            top: calc(1555px + ${selectedIndex * 115}px);
            transition: width 0.2s ease-out;
            overflow: hidden;
          }
        }
      `}</style>
    </div>
  );
};

export default MeetingDetail;
