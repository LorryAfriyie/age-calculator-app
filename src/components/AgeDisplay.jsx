function AgeDisplay({ year, month, day }) {
  return (
    <div className="age_display poppins-extrabold-italic">
      <div className="year">
        {year === "" ? <span>- -</span> : <span>{year}</span>} years
      </div>

      <div className="month">
        {month === "" ? <span>- -</span> : <span>{month}</span>} months
      </div>

      <div className="day">
        {day === "" ? <span>- -</span> : <span>{day}</span>} days
      </div>
    </div>
  );
}

export default AgeDisplay;
