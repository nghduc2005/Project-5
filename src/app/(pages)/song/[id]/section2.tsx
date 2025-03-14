"use client"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import Title from "@/app/components/Title/title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section2(props:{id: string}) {
    const {id} = props
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [dataFinal, setDataFinal] = useState<any>()
    useEffect(() => {
        const songsRef = ref(dbFirebase, "songs/" + id)
        onValue(songsRef, (snapshot) => {
            const data = snapshot.val()
            if(data) {
                setDataFinal({
                    lyric: data.lyric
                })
            }
        })

    }, [])
    return(
        <>
            {/* Lời bài hát */}
        <div className="mt-[30px]">
          <Title text="Lời Bài Hát"/>
          <div className="bg-[#212121] rounded-[15px] p-[20px] text-white font-[500] text-[14px]">
            {dataFinal&&(
                <>
                    {dataFinal.lyric}   
                </>
            )}
          </div>
        </div>
        </>
    )
}