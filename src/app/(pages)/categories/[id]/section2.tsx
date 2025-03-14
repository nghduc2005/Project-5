"use client"

import SongItem2 from "@/app/components/Song/song-item2";
import Title from "@/app/components/Title/title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import CategoriesPage from "../page";

export default function Section2 (props: {id: string}) {
    const {id}  = props
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
                    singer: "Hồ Quang Hiếu, Huỳnh Vân",
                    listen: data[key].listen,
                    singerId: data[key].singerId,
                    categoryId: data[key].categoryId,
                    time: "4:32",
                    audio: data[key].audio,
                    wishlist: data[key].wishlist
                }))
                songsArray = songsArray.filter((item) => item.categoryId === id)
                setDataFinal(songsArray)
            }
        })

    }, [])

    return (
        <>
            <div className="mt-[30px]">
                <Title text="Danh Sách Bài Hát"/>
                {/* list */}
                    <div className="grid grid-cols-1 gap-[10px]">
                        {/* Item */}
                        {dataFinal && (
                            <>
                                {
                                    dataFinal.map((item: any) => (
                                        <SongItem2 key={item.id} {...item}/>
                                    ))
                                }
                            </>
                        )}
                    </div>
            </div>
        </>
    )
}