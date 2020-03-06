import React, { useContext } from "react";

import "date-fns";

import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";

import { TodosContext } from "../contexts/TodosContext";

const DateComponent = () => {
  const { selectedDate, handleDateChange } = useContext(TodosContext);
  //console.log("Log from Date component: ", selectedDate);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        className="date-picker"
        value={selectedDate}
        onChange={handleDateChange}
        format={"MM/dd/yyyy"}
        placeholder="MM/DD/YYYY"
      />
    </MuiPickersUtilsProvider>
  );
};

export default DateComponent;
