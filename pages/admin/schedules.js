import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
//import Button from "../../components/button";
import styles from "./members.module.css";
import { getAllSchedules } from "../../utilities/api";
import { useRouter } from "next/router";

const Schedules = () => {
  const [allSchedules, setAllSchedules] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const getData = async () => {
      const allSchedulesResponse = await getAllSchedules();

      console.log(allSchedulesResponse);
      setAllSchedules(allSchedulesResponse);
    };
    getData();
  }, []);

  const handleWhatsapp = (phone_no) => {
    location.replace(
      `https://api.whatsapp.com/send?phone=${phone_no}&text=Hi%2C%20we%20are%20from%20Learnbase.`
    );
  };

  const SchedulesCard = ({ name, phone_no }) => {
    return (
      <div className={styles.metrics_card} onClick={onclick}>
        <h1 className={styles.member_name}>{name}</h1>
        <h1 className={styles.member_stream}>{phone_no}</h1>
        <div className={styles.icons_wraper}>
          <img
            src="/call.png"
            width="30px"
            height="30px"
            onClick={() => window.open(`tel:${phone_no}`)}
          />
          <img
            src="/whatsapp.png"
            width="50px"
            height="50px"
            onClick={() => handleWhatsapp(phone_no)}
          />
        </div>
      </div>
    );
  };
  return (
    <div className={styles.container}>
      {/* Header starts here */}
      <div className={styles.header}>
        <img
          src="/back_icon.svg"
          className={styles.back_icon}
          onClick={() => router.push("/admin/home")}
        />
        <h1 className={styles.heading}>Schedules</h1>
      </div>
      {/* Header ends here */}
      {/* cards starts herer */}
      {allSchedules.map((schedule) => (
        <SchedulesCard
          name={schedule.name}
          phone_no={schedule.mobile_number}
          key={schedule.id}
        />
      ))}
      {/* cards ends herer */}
    </div>
  );
};

export default Schedules;
