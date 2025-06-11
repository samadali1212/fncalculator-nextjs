
import { useParams } from "react-router-dom";
import MonthPage from "../pages/MonthPage";
import NotFound from "../pages/NotFound";

const MonthPageWrapper = () => {
  const { monthYear } = useParams<{ monthYear: string }>();
  
  // Check if the monthYear parameter matches the expected format (month-year)
  const isValidMonthYear = (param: string | undefined): boolean => {
    if (!param) return false;
    
    // Expected format: january-2025, february-2024, etc.
    const monthYearPattern = /^(january|february|march|april|may|june|july|august|september|october|november|december)-\d{4}$/i;
    return monthYearPattern.test(param);
  };

  // If the parameter doesn't match the expected month-year format, show 404
  if (!isValidMonthYear(monthYear)) {
    return <NotFound />;
  }

  return <MonthPage />;
};

export default MonthPageWrapper;
