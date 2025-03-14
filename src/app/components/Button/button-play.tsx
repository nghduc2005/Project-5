"use client"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { FaPlay } from "react-icons/fa";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ButtonPlay(props: any) {
    const {id, image, title, singer, audio, className = ""} = props
    const handlePlay = () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const elementPlayAudio:any= document.querySelector('.play-audio')
        if(elementPlayAudio) {
            //Chèn song id
            elementPlayAudio.setAttribute("song-id", id)
            // Phát nhạc
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const elementAudio:any = elementPlayAudio.querySelector(".inner-audio")
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const elementSource: any = elementPlayAudio.querySelector('.inner-source')
            elementSource.src = audio
            elementAudio.load()
            elementAudio.play()

            //hiển thị khối play
            if(elementPlayAudio.classList.contains("hidden")) {
                elementPlayAudio.classList.remove("hidden")
            }
            //hiển thị ảnh
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const elementImage:any = elementPlayAudio.querySelector(".inner-image")
            elementImage.src = image
            elementImage.alt = title
            //hiển thị tiêu đề
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const elementTitle:any = elementPlayAudio.querySelector(".inner-title")
            elementTitle.innerHTML = title
            //hiển thị ca sĩ
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const elementSinger:any = elementPlayAudio.querySelector(".inner-singer")
            elementSinger.innerHTML = singer

            //Thêm class play vào inner-button-play
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const elementButtonPlay:any = elementPlayAudio.querySelector(".inner-button-play")
            elementButtonPlay.classList.add('play') 

            //Lấy tổng thời gian của bài hát
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const elementPlayTimeTotal:any = elementPlayAudio.querySelector(".inner-play-time .inner-total")
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const elementPlayTimeCurrent:any = elementPlayAudio.querySelector(".inner-play-time .inner-current")

            elementAudio.onloadedmetadata = () => {
                const totalTime = elementAudio.duration
                elementPlayTimeTotal.max = totalTime
                // lấy thời gian hiện tại
                elementAudio.ontimeupdate = () => {
                    const currentTime = elementAudio.currentTime
                    elementPlayTimeTotal.value = currentTime
                    const percent = currentTime/totalTime*100
                    elementPlayTimeCurrent.style.width = `${percent}%`
                }
            }
        }
    }
    return(
        <>
        <button
        onClick={handlePlay}
        className={className}
        ><FaPlay/></button>
        </>
    )
}