"use client"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { FaPlay } from "react-icons/fa";

export default function ButtonPlay(props: any) {
    const {id, image, title, singer, audio, className = ""} = props
    const handlePlay = () => {
        const elementPlayAudio:any= document.querySelector('.play-audio')
        if(elementPlayAudio) {
            //Chèn song id
            elementPlayAudio.setAttribute("song-id", id)
            // Phát nhạc
            const elementAudio:any = elementPlayAudio.querySelector(".inner-audio")
            const elementSource: any = elementPlayAudio.querySelector('.inner-source')
            elementSource.src = audio
            elementAudio.load()
            elementAudio.play()

            //hiển thị khối play
            if(elementPlayAudio.classList.contains("hidden")) {
                elementPlayAudio.classList.remove("hidden")
            }
            //hiển thị ảnh
            const elementImage:any = elementPlayAudio.querySelector(".inner-image")
            elementImage.src = image
            elementImage.alt = title
            //hiển thị tiêu đề
            const elementTitle:any = elementPlayAudio.querySelector(".inner-title")
            elementTitle.innerHTML = title
            //hiển thị ca sĩ
            const elementSinger:any = elementPlayAudio.querySelector(".inner-singer")
            elementSinger.innerHTML = singer

            //Thêm class play vào inner-button-play
            const elementButtonPlay:any = elementPlayAudio.querySelector(".inner-button-play")
            elementButtonPlay.classList.add('play') 

            //Lấy tổng thời gian của bài hát
            const elementPlayTimeTotal:any = elementPlayAudio.querySelector(".inner-play-time .inner-total")
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