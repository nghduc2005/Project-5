"use client"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import CardInfo from "@/app/components/Card/cart-info";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section1(props: {id:string}) {
    const {id} = props
    const [dataFinal, setDataFinal] = useState<any>()
    useEffect(() => {
        const songsRef = ref(dbFirebase, "songs/" + id)
        onValue(songsRef, (snapshot) => {
            const data = snapshot.val()
            if(data) {
                //Lặp qua từng key trong Object
                setDataFinal({
                    image: data.image,
                    title: data.title,
                    description: "Hồ Quang Hiếu, Huỳnh Vân"
                })
            }
        })

    }, [])
    return(
        <>
            {/* Card info */}
            {dataFinal && (
                <CardInfo 
                    image = {dataFinal.image} 
                    title= {dataFinal.title}
                    desc= {dataFinal.description}
                />
            )}
        </>
    )
}