import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
//import Button from "../../components/button";
import styles from "./admin.module.css";
import { getAllMembers } from "../../utilities/api";

const Members = () => {
  const [allMembers, setAllMembers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const allMembersResponse = await getAllMembers();

      console.log(allMembersResponse);
      setAllMembers(allMembersResponse);
    };
    getData();
  }, []);

  const MembersCard = ({ name }) => {
    return (
      <div className={styles.metrics_card}>
        <h1>{name}</h1>
      </div>
    );
  };
  return (
    <div className={styles.container}>
      {/* Header starts here */}
      <div className={styles.header}>
        <img src="/back_icon" height="50px" width="auto" />
      </div>
      {/* Header ends here */}
      {/* cards starts herer */}
      {allMembers.map((member) => (
        <MembersCard name={member.name} key={member.id} />
      ))}
      {/* cards ends herer */}
    </div>
  );
};

export default Members;
