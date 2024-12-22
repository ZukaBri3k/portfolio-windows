import {createPortal} from "react-dom";
import {useContext, useEffect, useRef} from "react";
import anime from "animejs";
import {MenusContext} from "@/context/menusContext.ts";
import {Power, Search} from "lucide-react";
import User from "@/assets/icons/utilisateur.png";
import {menuType} from "@/types/menuType.ts";


export function WindowsWindow() {
  const modalRef = useRef<HTMLDivElement>(null);
  const {setMenuState} = useContext(MenusContext);
  
  useEffect(() => {
    anime({
      targets: modalRef.current,
      bottom: "50%",
      duration: 50,
      elasticity: 0,
      easing: "linear",
    });
  }, []);
  
  function close() {
    anime({
      targets: modalRef.current,
      duration: 500,
      elasticity: 0,
      bottom: "-600px",
      complete: () => {
        setMenuState((prev): menuType => {
          return {
            ...prev,
            windowsMenu: {
              open: false,
              component: prev.windowsMenu.component,
            },
          };
        });
      },
    });
  }
  
  return createPortal(
    <div className="w-full h-full">
      <div
        ref={modalRef}
        className="z-[100] absolute right-1/2 bottom-[-600px] translate-x-1/2 translate-y-1/2 lg:w-5/12 md:w-4/5 h-5/6 rounded-2xl bg-slate-800/95 backdrop-blur-xl flex justify-center items-center flex-col border-[0.5px] border-slate-600"
      >
        <div
          className="flex items-center w-11/12 h-fit gap-5 bg-slate-900 p-2 m-10 rounded-3xl border-[0.5px] border-slate-700">
          <Search size={20} color="#E2E8F0" strokeWidth={1.5}/>
          <input
            className="w-full bg-slate-900 text-slate-300 outline-none"
            type="text"
            name="research"
            placeholder="Recherchez des applications, des paramètres et des documents"
          />
        </div>
        <div className="w-full h-full"></div>
        <div className="w-full h-[100px] bg-slate-900/40 rounded-b-xl flex items-center pl-12 pr-12">
          <div className="flex gap-2 items-center w-full">
            <img src={User} alt="User profil picture" className="w-[50px]"/>
            <p className="text-slate-300">Kyrill DUMERCHAT</p>
          </div>
          <Power size={24} strokeWidth={1.5} color="#E2E8F0"/>
        </div>
      </div>
      <div className="w-full h-full z-[99] absolute top-0 left-0" onClick={close}/>
    </div>,
    document.getElementById("window") as HTMLElement
  );
}
