import { useRouter } from "next/router";
import "tailwindcss/tailwind.css";
import Button from "../../../components/button";

const Success = () => {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push("/");
  };

  const handleWhatsappClick = () => {
    location.replace("https://chat.whatsapp.com/JLnHIrrCdAq1Kcy23NgnMP");
  };

  const handleInstagramClick = () => {
    location.replace("https://www.instagram.com/Learnbase/");
  };

  const handleTelegramClick = () => {
    location.replace("https://t.me/joinchat/asyr74xbr6IzZWM1");
  };

  return (
    <div className="md:container md:mx-auto flex flex-col min-h-screen items-center justify-center">
      <img src="/success.png" className="w-8/12 mt-3" alt="s" />
      <h1 className="mt-3 text-xl font-bold text-gray-700 font-sans">
        Congrats!
      </h1>
      <h1 className="font-sans text-lg font-normal text-center text-gray-500 leading-tight mt-1 mb-3 w-9/12 ">
        You are a member of tinkerub now. Join Learnbase channels to get
        updated.
      </h1>
      <Button
        label="Join Whatsapp Group"
        onClick={handleWhatsappClick}
        classValues="mt-3 pl-7 pr-7 pt-3 pb-3 bg-green-400 text-white rounded-full font-semibold w-4/5"
      />
      <Button
        label="Join Telegram Group"
        onClick={handleTelegramClick}
        classValues="mt-3 pl-7 pr-7 pt-3 pb-3 bg-blue-500 text-white rounded-full font-semibold w-4/5"
      />
      <Button
        label="Follow on instagram"
        onClick={handleInstagramClick}
        classValues="mt-3 pl-7 pr-7 pt-3 pb-3 bg-red-400 text-white rounded-full font-semibold w-4/5"
      />
      <Button
        label="Go to home"
        onClick={handleHomeClick}
        classValues="mt-3 mb-3 pl-7 pr-7 pt-3 pb-3 bg-yellow-400 text-white rounded-full font-semibold w-4/5"
      />
    </div>
  );
};

export default Success;
