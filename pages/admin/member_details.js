import { useState, useEffect } from "react";
import { getMemberDetails } from "../../utilities/api";
import styles from "./member_details.module.css";

const MemberDetails = () => {
  const [member, setMember] = useState([]);
  useEffect(() => {
    const getDetails = async () => {
      const memberResposne = await getMemberDetails(1);

      setMember(memberResposne);
      console.log(memberResposne);
    };
    getDetails();
  }, []);
  return (
    <div className={styles.container}>
      {/* Header starts here */}
      <div className={styles.header}>
        <img src="/back_icon.svg" className={styles.back_icon} />
        <h1 className={styles.heading}>Member</h1>
      </div>
      {/* Header ends here */}
      <div className={styles.circle} />
      {member.length && (
        <>
          <h1>{member[0].name}</h1>
          <h1>{member[0].phone_number}</h1>
        </>
      )}
    </div>
  );
};

export default MemberDetails;
/* {member.length && (
        <>
          <h1>{member[0].name}</h1>
          <h1>{member[0].phone_number}</h1>
        </>
      )} */
