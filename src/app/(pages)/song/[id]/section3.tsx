"use client"
import SongItem2 from "@/app/components/Song/song-item2";
import Title from "@/app/components/Title/title";
import CardInfo from "@/app/components/Card/cart-info";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section3 (props: {id: string}) {
    const data = [
        {
            image: "/demo/image6.png",
            title: "Cô Phòng",
            singer: "Hồ Quang Hiếu, Huỳnh Vân",
            time: "4:32"
        },
        {
            image: "/demo/image6.png",
            title: "Cô Phòng",
            singer: "Hồ Quang Hiếu, Huỳnh Vân",
            time: "4:32"
        },
        {
            image: "/demo/image6.png",
            title: "Cô Phòng",
            singer: "Hồ Quang Hiếu, Huỳnh Vân",
            time: "4:32"
        },
        {
            image: "/demo/image6.png",
            title: "Cô Phòng",
            singer: "Hồ Quang Hiếu, Huỳnh Vân",
            time: "4:32"
        }
    ]
    const {id} = props
    const [dataFinal, setDataFinal] = useState<any>()
    useEffect(() => {
        const songsRef = ref(dbFirebase, "songs/" + id)
        onValue(songsRef, (snapshot) => {
            const data = snapshot.val()
            if(data) {
                const categoryId = data.categoryId
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
                        songsArray = songsArray.filter((item) => item.categoryId === categoryId && item.id !== id)
                        setDataFinal(songsArray)
                    }
                })
            }
        })

    }, [])
    return (
        <>
            <div className="mt-[30px]">
                <Title text="Bài Hát Cùng Danh Mục"/>
                {/* list */}
                    <div className="grid grid-cols-1 gap-[10px]">
                        {/* Item */}
                        {dataFinal && (
                            <>
                                {dataFinal.map((item: any) => (
                                    <SongItem2 key={item.index} {...item}/>
                                ))}
                            </>
                        )}
                    </div>
            </div>
        </>
    )
}