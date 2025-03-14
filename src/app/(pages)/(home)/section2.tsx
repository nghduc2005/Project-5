"use client"
import CardItem from "@/app/components/Card/card-item";
import Title from "@/app/components/Title/title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section2() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [dataFinal, setDataFinal] = useState<any>()
    useEffect(() => {
        const categoriesRef = ref(dbFirebase, "categories")
        onValue(categoriesRef, (snapshot) => {
            const data = snapshot.val()
            if(data) {
                let categoriesArray = Object.keys(data).map(key => ({
                    id: key,
                    image: data[key].image,
                    title: data[key].title,
                    descrition: data[key].description,
                    link: `/categories/${key}`
                }))
                categoriesArray = categoriesArray.splice(0, 5)
                setDataFinal(categoriesArray)
            }
        })

    }, [])
    return(
        <>
            <div className="mt-[30px]">
                <Title text="Danh Mục Nổi Bật"/>
                <div className="grid grid-cols-5 gap-[20px]">
                    {dataFinal && ( //cần kiểm tra vì ban đầu chưa kịp call xong api sẽ là undefined
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