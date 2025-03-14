"use client"

import SongItem from "@/app/components/Song/song-item";
import Title from "@/app/components/Title/title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
export default function Section1() {
    const [dataFinal, setDataFinal] = useState<any>()
    useEffect(() => {
        const songsRef = ref(dbFirebase, "songs")
        onValue(songsRef, (snapshot) => {
            const data = snapshot.val()
            if(data) {
                //Lặp qua từng key trong Object
                let songsArray = Object.keys(data).map(key => ({
                    id: key,
                    image: data[key].image,
                    title: data[key].title,
                    singer: "",
                    listen: data[key].listen,
                    singerId: data[key].singerId,
                    link: `/song/${key}`,
                    audio: data[key].audio,
                    wishlist:data[key].wishlist
                }))
                songsArray = songsArray.splice(0, 3)
                setDataFinal(songsArray)
            }
        })

    }, [])
    return(
        <>
            <div className="flex items-start">
                <div className="w-[534px]">
                <div className="w-full flex items-center rounded-[15px] bg-cover" style={{backgroundImage: "url('/demo/background-1.png')"}}>
                    <div className="flex-1 mr-[34px]  ml-[30px]">
                    <div className="font-[700] text-[32px] text-white mb-[6px]">Nhạc EDM</div>
                    <div className="font-[500] text-[14px] text-white">Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ</div>
                    </div>
                    <div className="w-[215px] mr-[22px] mt-[48px]">
                    <img src="/demo/image2.png" alt="" className="w-full h-auto"/>
                    </div>
                </div>
                </div>
                <div className="flex-1 ml-[20px]">
                <Title text="Nghe Nhiều"/>
                <div className="grid grid-cols-1 gap-[12px]" song-list="">
                    {dataFinal && (
                        <>
                            {dataFinal.map((item:any, index: any)=>(            
                                <SongItem 
                                id = {item.id}
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                singer={item.singer}
                                listen = {item.listen}
                                link = {item.link}
                                audio = {item.audio}
                                wishlist = {item.wishlist}
                                />
                            ))}
                        </>
                    )}
                    
                </div>
                </div>
            </div>
        </>
    )
}