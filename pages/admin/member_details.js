import { useState, useEffect } from "react";
import { getMemberDetails } from "../../utilities/api";

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
    <>
      <h1>{member[0].name}</h1>
      <h1>{member[0].phone_number}</h1>
    </>
  );
};

export default MemberDetails;
