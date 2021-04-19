import { useRouter } from "next/router";
import "tailwindcss/tailwind.css";
import Button from "../../../components/button";

const Success = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className="md:container md:mx-auto flex flex-col min-h-screen items-center justify-center">
      <img src="/success.png" className="w-8/12 mt-20" alt="s" />
      <h1 className="mt-3 text-xl font-bold text-gray-700 font-sans">
        Awesome!
      </h1>
      <h1 className="font-sans text-lg font-normal text-center text-gray-500 leading-tight mt-1 w-9/12 mb-36">
        Our community representative will contact you soon.
      </h1>
      <Button
        label="Go to home"
        onClick={handleClick}
        classValues="mt-3 mb-5 pl-7 pr-7 pt-3 pb-3 bg-yellow-400 text-white rounded-full font-semibold w-4/5 fixed bottom-2"
      />
    </div>
  );
};

export default Success;
