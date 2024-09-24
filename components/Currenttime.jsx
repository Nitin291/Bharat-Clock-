import { useEffect, useState } from "react";

function Currenttime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });
  return (
    <p className="currenttime">
      This is current time: {time.toLocaleDateString()} - {""}
      {time.toLocaleTimeString()}
    </p>
  );
}

export default Currenttime;
