import "tailwindcss/tailwind.css";
import Button from "../../components/button";

const Members = () => {
  return (
    <div className="md:container md:mx-auto flex flex-col items-center  min-h-screen">
      {/* header starts here */}
      <div className="flex flex-row justify-between p-4 mt-2 w-full">
        <Button
          label="Back"
          classValues="mt-1 pl-4 pr-4 pt-1 pb-1 bg-green-500 text-white rounded-lg font-semibold"
        />
      </div>
      {/* header ends here */}
    </div>
  );
};

export default Members;
