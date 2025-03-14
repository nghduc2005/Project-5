import PlayAudio from "./play-audio";
import PlayInfo from "./play-info";
import PlayAction from "./play-action";
import PlayTime from "./play-time";
import PlayVolume from "./play-volume";
export default function Play() {
    return (
      <>
        <div className="bg-[#212121] border-t border-[#494949] fixed bottom-0 left-0 w-full py-[20px] z-[999] hidden play-audio">
            <PlayAudio/>
            <div className="container mx-auto flex items-center justify-between">
                <PlayInfo/>
                <div className="flex-1 mx-[67px]">
                  <PlayAction/>
                  <PlayTime/>
                </div>
                <PlayVolume/>
            </div>
        </div>
      </>
    );
  }
  