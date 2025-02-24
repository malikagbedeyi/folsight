import React, { useState ,useEffect  } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/scss/Root&ElevatedUser/bookCal.scss'
import Img1 from '../../assets/Images/DashLogo.png'
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa"; 
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "react-time-picker/dist/TimePicker.css"; 
import { FiClock } from "react-icons/fi"; 
import "react-clock/dist/Clock.css"; 

const ElevatedBookCall = () => {
  
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

    const isAM = hours < 12;
    hours = hours % 12 || 12; // Convert to 12-hour format
    const period = isAM ? "AM" : "PM"; // Determine AM or PM

    setTime(`${hours}:${formattedMinutes} ${period}`);
  }, []);

  const handleTimeChange = (value) => {
    if (!value) return;

    let [selectedHour, selectedMinute] = value.split(":");
    selectedMinute = selectedMinute ? selectedMinute.split(" ")[0] : "00";
    
    // Automatically append AM or PM based on the time
    const currentHour = parseInt(selectedHour);
    const isAM = currentHour < 12;
    const period = isAM ? "AM" : "PM";

    // Format and set time with AM/PM
    setTime(`${selectedHour}:${selectedMinute} ${period}`);
  };
  
  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <div className="custom-date-picker" onClick={onClick} ref={ref}>
    <input
    type="text"
    value={value}
    readOnly
   // placeholder="Select a date"
    className="date-input"
  />
  {/* <FaCalendarAlt className="calendar-icon" /> */}
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path><path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"></path></svg>
</div>
  ))
  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.match(/^\+?[0-9\s]{7,15}$/)) {
      console.log('Phone number:', phone);
    } else {
     // alert('Please enter a valid phone number.');
    }
  };

  return (
    
    <div className='BookCall'>
      <div className="BookCallContainer ">
        <div className="BookCallParent row">
            <div className="BookCallChild col-lg-8 col-md-8 col-sm-8">
                <div className="BookCallChildTop">
                    <h2>Book a Call</h2>
                    <p>please compleate the form to arrange a form with us. we response right away</p>
                </div>
                <form onSubmit={handleSubmit} action="">
                   <div className="formcontainer">
                   <div className="formWrapper">
                    <div className="inputWrapper">
                        <input type="text"
                        placeholder='Name of your Company' />
                    </div>
                    <div className="inputWrapper">
                        <input type="text"
                        placeholder='Company Email Address' />
                    </div>
                    <div className="inputWrapper">
                        <input type="text"
                        placeholder='Representative' />
                    </div>
                    <div className="inputWrapper">
                      <div className="inputflex">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.9473 1.00644C12.6007 0.792444 12.1767 0.773011 11.812 0.955011L9.52734 2.0971C9.42934 2.14577 9.31267 2.15237 9.20801 2.1137L5.14268 0.589126C4.77935 0.452459 4.37133 0.47372 4.02533 0.64772L1.51335 1.90374C0.888013 2.21641 0.5 2.84505 0.5 3.54372V12.0024C0.5 12.4097 0.706678 12.7804 1.05334 12.9944C1.40001 13.2084 1.82401 13.2278 2.18868 13.0458L4.47335 11.9037C4.57135 11.8551 4.688 11.8485 4.79266 11.8871L8.85801 13.4117C9.01601 13.4711 9.18268 13.5004 9.34935 13.5004C9.36401 13.5004 9.37801 13.4957 9.39268 13.4957C9.39601 13.4957 9.39801 13.4972 9.40135 13.4972C9.41268 13.4972 9.42201 13.4918 9.43268 13.4905C9.62001 13.4792 9.80535 13.4378 9.97601 13.3525L12.488 12.0965C13.1133 11.7838 13.5013 11.1551 13.5013 10.4565V1.99782C13.5007 1.59115 13.294 1.22044 12.9473 1.00644ZM1.742 12.1511C1.67 12.1865 1.60933 12.1625 1.58 12.1438C1.55066 12.1258 1.50067 12.083 1.50067 12.0024V3.54372C1.50067 3.22572 1.67734 2.94044 1.96134 2.79844L4.10067 1.7291V10.9824C4.076 10.993 4.05 10.997 4.026 11.0097L1.742 12.1511ZM5.14333 10.9505C5.12933 10.9451 5.11467 10.9437 5.10067 10.9384V1.64105L8.85801 3.04974C8.87201 3.05507 8.88668 3.05646 8.90068 3.06113V12.3591L5.14333 10.9505ZM12.5007 10.4571C12.5007 10.7751 12.324 11.0604 12.04 11.2024L9.90068 12.2717V3.01979C9.92534 3.00912 9.95134 3.0038 9.97534 2.9918L12.2593 1.84971C12.3307 1.81371 12.392 1.83836 12.4213 1.85703C12.4507 1.8757 12.5007 1.9178 12.5007 1.99847V10.4571Z" fill="#25314C"/> </svg>
                      <PhoneInput
                      country="us"
                      value={phone}
                      onChange={(value) => setPhone(value)}
                      id="phone"
                      type="tel"
                      placeholder="+1 234 567 890"
                      pattern="^\+?[0-9\s]{7,15}$"
                      title="Enter a valid phone number"
                      required
                      />
                        </div>
                    </div>
                    <div className="inputWrapper">
                      <div className="inputWrapperContainer">
                        <div className="leftWrapper">
                          {/* <input type="date" 
                          placeholder='DD/MM/YYYY' /> */}
                            <div className="date-picker-container">
                              <DatePicker
                              selected={selectedDate}
                              onChange={(date) => setSelectedDate(date)}
                              customInput={<CustomInput />}
                              dateFormat="dd/MM/yyyy"
                              calendarClassName="custom-calendar"
                             // inline
                              renderCustomHeader={({
                                date,
                                decreaseMonth,
                                increaseMonth,
                                prevMonthButtonDisabled,
                                nextMonthButtonDisabled,
                              }) => (
                                <div className="custom-header">
                                  <div className="custom-headerMonth">
                                  <span>{date.toLocaleString("default", { month: "long", year: "numeric" })}</span>
                                  <button
                                    onClick={increaseMonth}
                                    disabled={nextMonthButtonDisabled}
                                    className="custom-nextMonth-btn"
                                  >
                                    <FaChevronRight />
                                  </button>
                                  </div>
                                  <div className="custom-headerButtom">
                                  <button
                                    onClick={decreaseMonth}
                                    disabled={prevMonthButtonDisabled}
                                    className="custom-prev-btn"
                                  >
                                    <FaChevronLeft />
                                  </button>
                                  <button
                                    onClick={increaseMonth}
                                    disabled={nextMonthButtonDisabled}
                                    className="custom-next-btn"
                                  >
                                    <FaChevronRight />
                                  </button>
                                  </div>
                                </div>
                              )} 
                            />
                             </div>
                        </div>
                        <div className="rightWrappe">
                        {/* <input type="time" 
                          placeholder='..:.. ..' />   */}
                       <div className="custom-time-picker">
                         <TimePicker
                           onChange={handleTimeChange}
                           value={time}
                             format="hh:mm a"
                           clearIcon={null}
                           disableClock
                            className="custom-time-picker-input"
                          />
                          <div className="time-icon">
                            <FiClock />
                          </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        <div className="inputWrapper">
                          <textarea name=""
                           id=""
                            placeholder='Purpose'></textarea>
                        </div>
                        </div>
                        <button><a href="#/elevatedLogin"> BOOK NOW</a></button>
                   </div>
                </form>
            </div>
            <div className="BookCallSideBar col-lg-4 col-md-4 col-sm-4">
              <div className="registerSidebarLogo">
              <img src={Img1} alt="" />
              <h1>Folsight</h1>
        </div>
        </div>
        </div>
        {/* <div className="BookCallParent ">
        <div className="BookCallSideBar col-lg-5 col-md-4">
hello World
        </div>
        </div> */}
      </div>
    </div>
  )
}

export default ElevatedBookCall
