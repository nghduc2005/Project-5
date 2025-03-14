"use client"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { FaVolumeUp } from "react-icons/fa";
export default function PlayVolume() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (event:any) => {
      const elementPlayAudio = document.querySelector('.play-audio')
      if(elementPlayAudio) {
        const volume = parseFloat(event.target.value)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const elementAudio: any = elementPlayAudio.querySelector('.inner-audio')
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const elementVolumeCurrent: any = elementPlayAudio.querySelector('.inner-volume .inner-current')
        elementAudio.volume = volume/100
        elementVolumeCurrent.style.width = `${volume}%`
      }
    }
    return(
        <>
            <div className="w-[184px] flex items-end inner-volume">
                  <button className="text-[16px] text-white"><FaVolumeUp/></button>
                  <div className="ml-[6px] relative">
                    <div className="absolute h-[3px] w-[100%] bg-[#00ADEF] rounded-[50px] left-0 top-[14px] inner-current"></div>
                    <input type="range" min={0} max={100} defaultValue={100} 
                    className="w-full h-[3px] bg-[#FFFFFF0A] appearance-none rounded-[50px] cursor-pointer range-sm inner-total"
                    onChange={handleChange}
                    />
                  </div>
                </div>
        </>
    )
}