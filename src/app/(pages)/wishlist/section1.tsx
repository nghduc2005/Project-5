"use client"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import SongItem2 from "@/app/components/Song/song-item2";
import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section1 () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [dataFinal, setDataFinal] = useState<any>()
    useEffect(() => {
        onAuthStateChanged(authFirebase, (user) => {
            if(user) {
                const userId = user.uid
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
                        songsArray = songsArray.filter((item) => item.wishlist && item.wishlist[userId])
                        setDataFinal(songsArray)
                    }
                })
            }
        })
    }, [])
    return (
        <>
            <div className="mt-[30px]">
                {/* list */}
                <div className="grid grid-cols-1 gap-[10px]">
                        {/* Item */}
                        {dataFinal && (
                            <>
                                {
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
