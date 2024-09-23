import Windows from "@assets/images/windows.png";
import Search from "@assets/icons/search.png";

export function Dock() {
  return (
    <div className='bottom-0 w-full h-[7svh] bg-slate-800/85 backdrop-blur-sm fixed border-t-2 border-slate-700 flex justify-center items-center gap-3'>
      <div className="flex justify-center items-center h-full w-fit gap-3">
        <button className="border border-transparent hover:border p-1 hover:border-slate-300/60 duration-100 ease-in rounded-md">
            <img src={Windows} alt="Windows logo" className="pointer-events-none" />
        </button>
        <div className="bg-slate-300/20 rounded-full p-2 w-[250px] h-[75%] flex items-center justify-start gap-3 border-t-2 border-b-2 border-slate-300/25">
          <img src={Search} alt="search icon" className="h-[80%] grayscale brightness-75" />
          <p className="text-slate-300">Rechercher</p>
        </div>
      </div>
    </div>
  )
}
