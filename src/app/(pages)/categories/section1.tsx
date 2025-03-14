"use client"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import CardItem from "@/app/components/Card/card-item";
import Title from "@/app/components/Title/title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section1() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [dataFinal, setDataFinal] = useState<any>()
    useEffect(() => {
        const categoriesRef = ref(dbFirebase, "categories")
        onValue(categoriesRef, (snapshot) => {
            const data = snapshot.val()
            if(data) {
                const categoriesArray = Object.keys(data).map(key => ({
                    id: key,
                    image: data[key].image,
                    title: data[key].title,
                    descrition: data[key].description,
                    link: `/categories/${key}`
                }))
                setDataFinal(categoriesArray)
            }
        })
    }, [])
    return(
        <>
            <div className="mt-[30px]">
                <Title text="Danh Mục Bài Hát"/>
                <div className="grid grid-cols-5 gap-[20px]">
                    {dataFinal && (
                        <>
                            {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            dataFinal.map((item:any, index:number) => (
                                <CardItem key={index} {...item}
                                />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </>
    )
}