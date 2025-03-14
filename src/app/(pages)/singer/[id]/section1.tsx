"use client"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import CardInfo from "@/app/components/Card/cart-info";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section1 (props: {id:string}) {
    const {id} = props
    const [dataFinal, setDataFinal] = useState<any>()
    useEffect(() => {
        const singerRef = ref(dbFirebase, "singers/"+ id)
        onValue(singerRef, (snapshot) => {
            const data = snapshot.val()
            if(data) {
                setDataFinal({
                    image: data.image,
                    title: data.title,
                    description: data.description
                })
            }
        })

    }, [])
    return(
        <>
            {/* Cardinfo */}
            {dataFinal && (
                <>
                <CardInfo 
                image={dataFinal.image}
                title={dataFinal.title}
                desc={dataFinal.description}/>
                </>
            )}
        </>
    )
}