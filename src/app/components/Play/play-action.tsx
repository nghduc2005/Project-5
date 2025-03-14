"use client"
import { FaPause, FaPlay, FaStepBackward, FaStepForward } from "react-icons/fa";

export default function PlayAction() {
    const handlePlay = () => {
        const elementPlayAudio = document.querySelector('.play-audio')
        if(elementPlayAudio) {
            const elementButtonPlay : any = elementPlayAudio.querySelector('.inner-button-play')
            const elementAudio: any = elementPlayAudio.querySelector('.inner-audio')
            if(elementButtonPlay.classList.contains('play')) {
                elementButtonPlay.classList.remove('play')
                elementAudio.pause()
            } else {
                elementButtonPlay.classList.add('play')
                elementAudio.play()
            }   
        }
    }
    const handleNext = () => {
        const elementPlayAudio: any= document.querySelector('.play-audio')
        const idSongCurrent = elementPlayAudio.getAttribute('song-id')
        if(idSongCurrent) {
            const songList:any = document.querySelector('[song-list]')
            if(songList) {
                const elementSongCurrent= songList.querySelector(`[data-song="${idSongCurrent}"]`)
                const elementSongNext = elementSongCurrent.nextElementSibling
                if(elementSongNext) {
                    const buttonPlay = elementSongNext.querySelector('.inner-button-play')
                    buttonPlay.click()
                }
            }
        }
    }

    const handlePrevious = () => {
        const elementPlayAudio: any= document.querySelector('.play-audio')
        const idSongCurrent = elementPlayAudio.getAttribute('song-id')
        if(idSongCurrent) {
            const songList:any = document.querySelector('[song-list]')
            if(songList) {
                const elementSongCurrent= songList.querySelector(`[data-song="${idSongCurrent}"]`)
                const elementSongPrev = elementSongCurrent.previousElementSibling
                if(elementSongPrev) {
                    const buttonPlay = elementSongPrev.querySelector('.inner-button-play')
                    buttonPlay.click()
                }
            }
        }
    }
    return (
        <>
            <div className="flex items-center justify-center">
                <button className="text-[16px] text-white" onClick={handlePrevious}><FaStepBackward /></button>
                <button 
                    onClick={handlePlay}
                    className="bg-[#00ADEF] text-[16px] text-white w-[32px] h-[32px] rounded-full inline-flex items-center justify-center mx-[42px] inner-button-play">
                    <FaPlay className="inner-icon-play"/>
                    <FaPause className="inner-icon-pause"/>
                </button>
                <button className="text-[16px] text-white"
                onClick={handleNext}
                ><FaStepForward /></button>
            </div>
        </>
    )
}