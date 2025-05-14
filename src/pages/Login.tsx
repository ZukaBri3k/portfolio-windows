import PP from '@/assets/images/profil_picture.jpeg';
import { PasswordInput } from "@/components/PasswordInput.tsx";
import { animate } from 'animejs';
import { useEffect, useState } from "react";

export default function Login() {

  const [isHomeScreenDisplayed, setIsHomeScreenDisplayed] = useState(true);

  function keyBoardEvent(e: KeyboardEvent) {
    if (e.key === "Enter" && isHomeScreenDisplayed) {
      setIsHomeScreenDisplayed(false);
      animate('#welcomeScreen', {
        translateY: "-100%",
        duration: 500,
        easing: "easeInOutQuart",
      });
    } else if (e.key === "Escape" && !isHomeScreenDisplayed) {
      setIsHomeScreenDisplayed(true);
      animate("#welcomeScreen", {
        translateY: "0%",
        duration: 500,
        easing: "easeInOutQuart",
      });
    }
  }

  function clickEvent(e: MouseEvent) {
    if (isHomeScreenDisplayed && e.button === 0) {
      setIsHomeScreenDisplayed(false);
      animate("#welcomeScreen", {
        translateY: "-100%",
        duration: 500,
        easing: "easeInOutQuart",
      });
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", keyBoardEvent);
    document.getElementById("welcomeScreen")?.addEventListener("click", clickEvent);

    return () => {
      window.removeEventListener("keydown", keyBoardEvent);
      document.getElementById("welcomeScreen")?.removeEventListener("click", clickEvent);
    };
  }, [isHomeScreenDisplayed]);

  return (
    <>
      <div className="bg-wallpaper w-dvw h-dvh bg-cover flex justify-center items-start p-[200px] absolute z-50"
        id="welcomeScreen"
      >
        <h1 className="text-[6em] text-slate-100 font-bold">
          {new Date().toLocaleTimeString("fr-FR", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </h1>
      </div>
      <div className="bg-wallpaper w-dvw h-dvh bg-cover">
        <div className="h-dvh w-dvw bg-slate-600/80 backdrop-blur flex justify-center items-center">
          <div className="flex flex-col items-center gap-[100px] w-fit h-fit">
            <div className="flex flex-col items-center gap-10">
              <img className="rounded-full w-[175px] pointer-events-none" src={PP}
                alt="Photo de profil de Kyrill Dumerchat" />
              <h1 className="text-5xl font-bold text-slate-50 pointer-events-none">Kyrill Dumerchat</h1>
            </div>
            <PasswordInput />
            <div className="mb-[100px]"></div>
          </div>
        </div>
      </div>
    </>
  );
}
