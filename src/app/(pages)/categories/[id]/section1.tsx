"use client"

import CardInfo from "@/app/components/Card/cart-info";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section1 (props: {id:any}) {
    const {id}  = props
    const [dataFinal, setDataFinal] = useState<any>()
    useEffect(() => {
        const categoriessRef = ref(dbFirebase, "categories/"+ id)
        onValue(categoriessRef, (snapshot) => {
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
            {dataFinal && (
                <>
                    <CardInfo 
                    image={dataFinal.image}
                    title ={dataFinal.title}
                    desc={dataFinal.description}
                    />
                </>
            )}
        </>
    )
}