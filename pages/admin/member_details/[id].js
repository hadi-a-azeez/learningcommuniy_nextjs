import { useState, useEffect } from "react";
import { getMemberDetails } from "../../../utilities/api";
import styles from "../member_details.module.css";
import { useRouter } from "next/router";

const MemberDetails = () => {
  const [member, setMember] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  const role = ["Student", "Graduate", "Professional"];

  useEffect(() => {
    const getDetails = async () => {
      const memberResposne = await getMemberDetails(id);

      setMember(memberResposne);
      console.log(memberResposne);
    };

    if (id > 0) {
      getDetails();
    }
  }, []);

  const handleWhatsapp = (phone_no) => {
    location.replace(
      `https://api.whatsapp.com/send?phone=${phone_no}&text=Hi%2C%20we%20are%20from%20Learnbase.`
    );
  };

  return (
    <div className={styles.container}>
      {/* Header starts here */}
      <div className={styles.header}>
        <img
          src="/back_icon.svg"
          className={styles.back_icon}
          onClick={() => router.back()}
        />
        <h1 className={styles.heading}>Member</h1>
      </div>
      {/* Header ends here */}
      <img src="/user.png" className={styles.circle} />
      {member.length && (
        <>
          <h1 className={styles.name}>{member[0].name}</h1>
          <div className={styles.badge}>
            <h1 className={styles.badge_text}>{role[member[0].type - 1]}</h1>
          </div>
          <div className={styles.icons_wraper}>
            <img
              src="/call.png"
              width="30px"
              height="30px"
              onClick={() => window.open(`tel:${member[0].phone_number}`)}
            />
            <img
              src="/whatsapp.png"
              width="50px"
              height="50px"
              onClick={() => handleWhatsapp(member[0].phone_number)}
            />
          </div>
          <div className={styles.details_wraper}>
            <div className={styles.text_wraper}>
              <h1 className={styles.desc}>Phone number:</h1>
              <h1 className={styles.details}>{member[0].phone_number}</h1>
            </div>
            <div className={styles.text_wraper}>
              <h1 className={styles.desc}>Email:</h1>
              <h1 className={styles.details}>{member[0].email}</h1>
            </div>
            <div className={styles.text_wraper}>
              <h1 className={styles.desc}>Stream:</h1>
              <h1 className={styles.details}>{member[0].stream.stream}</h1>
            </div>
            <div className={styles.text_wraper}>
              <h1 className={styles.desc}>Reason:</h1>
              <h1 className={styles.details}>{member[0].reason}</h1>
            </div>
          </div>
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
