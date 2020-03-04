import React, { useState, useContext } from "react";

import "date-fns";
// import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  DatePicker
  // KeyboardDatePicker
} from "@material-ui/pickers";

import { TodosContext } from "../contexts/TodosContext";

const DateComponent = () => {
  const { selectedDate, handleDateChange } = useContext(TodosContext);
  console.log("date component context props: ", handleDateChange);
  console.log("date component context props selectedDate: ", selectedDate);
  // const [selectedDate, setSelectedDate] = useState(new Date());

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        value={selectedDate}
        onChange={handleDateChange}
        format={"MM/dd/yyyy"}
        placeholder="MM/DD/YYYY"
      />
    </MuiPickersUtilsProvider>
  );
};

export default DateComponent;
