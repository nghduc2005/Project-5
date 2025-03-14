"use client"
import SongItem2 from "@/app/components/Song/song-item2";
import Title from "@/app/components/Title/title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Section1 () {
    const params = useSearchParams()
    const keywordDefault = params.get("keyword") || ""
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
                    categoryId: data[key].categoryId,
                    time: ""
                }))
                const regex = new RegExp(keywordDefault, 'i')
                songsArray = songsArray.filter((item) => regex.test(item.title))
                setDataFinal(songsArray)
            }
        })

    }, [keywordDefault])
    return (
        <>
            <div className="mt-[30px]">
                <Title text="Kết Quả Tìm Kiếm"/>
                {/* list */}
                    <div className="grid grid-cols-1 gap-[10px]">
                        {/* Item */}
                        {
                            dataFinal && (
                                <>
                                    {dataFinal.map((item:any) => (
                                        <SongItem2 key={item.id} {...item}/>
                                    ))}
                                </>
                            )
                        }
                    </div>
            </div>
        </>
    )
}