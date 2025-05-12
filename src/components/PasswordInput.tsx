import { KeyboardEvent, useRef, useState } from "react";
import { ArrowRight, EyeClosed, EyeIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Loading } from "@/components/Loading.tsx";

export function PasswordInput() {
  const [showPassword, setShowPassword] = useState(true);
  const [passwordTyping, setPasswordTyping] = useState({
    mdp: "Admin1234",
    currentMdp: ""
  });
  const input = useRef(null);
  const [i, setI] = useState(0);
  const router = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function validatePassword() {
    if (i === passwordTyping.mdp.length) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        router(import.meta.env.BASE_URL + "/desktop");
      }, 3000);
    }
  }

  function typePassword(e: KeyboardEvent) {
    // si on tape n'importe qu'elle lettre on écrit le mot de passe définit
    if (e.key !== "Backspace" && e.key !== "Enter" && i < passwordTyping.mdp.length) {
      setI(prevState => prevState + 1);
      setPasswordTyping(prevState => {
        return {
          ...prevState,
          currentMdp: prevState.currentMdp + prevState.mdp[i]
        };
      });

      // si on appuie sur la touche effacer on efface le dernier caractère
    } else if (e.key === "Backspace" && i > 0) {
      setI(prevState => prevState - 1);
      setPasswordTyping(prevState => {
        return {
          ...prevState,
          currentMdp: prevState.currentMdp.slice(0, -1)
        };
      });
    } else if (e.key === "Enter" && i === passwordTyping.mdp.length) {
      validatePassword();
    }
  }

  return (
    <div className="flex h-fit w-fit">
      {isLoading ? <Loading /> : <>
        <input type={showPassword ? "text" : "password"} id="password"
          className="w-[400px] p-3 border-2 border-solid border-slate-500 bg-slate-900/40 text-slate-50 border-b-4 border-b-blue-600 rounded-tl-lg rounded-bl-lg border-r-0 outline-0"
          onKeyDown={(e: KeyboardEvent) => typePassword(e)}
          value={passwordTyping.currentMdp}
          ref={input}
          placeholder={"Mot de passe (ce que vous voulez)"}
        />
        <button onClick={() => setShowPassword(prevState => !prevState)}
          className="bg-slate-900/40 border-2 border-b-4 border-r-0 border-b-blue-600 outline-0 border-l-0 border-slate-500 p-2">
          {showPassword ? <EyeIcon className="text-slate-100" size={25} /> :
            <EyeClosed className="text-slate-100" size={25} />}
        </button>
        <button
          className="bg-slate-900/40 rounded-tr-lg rounded-br-lg border-2 border-b-4 border-b-blue-600 outline-0 border-l-0 border-slate-500 p-2"
          onClick={() => validatePassword()}
        >
          <ArrowRight size={25} className="text-slate-100" />
        </button>
      </>}
    </div>
  );
}