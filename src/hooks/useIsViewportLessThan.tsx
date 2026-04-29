import { useState, useEffect } from "react";

// checks whether viewport width is below given number
// check utils/contants.ts for breakpoints
const useIsViewportLessThan = (num: number): boolean => {
  const query = window.matchMedia(`(max-width: ${num}px)`);
  const [isViewportLessThan, setIsViewportLessThan] = useState(query.matches);

  useEffect(() => {
    const handleChange = (e: MediaQueryListEvent) =>
      setIsViewportLessThan(e.matches);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, [num]);

  return isViewportLessThan;
};

export default useIsViewportLessThan;
