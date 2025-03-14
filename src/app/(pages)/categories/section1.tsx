"use client"

import CardItem from "@/app/components/Card/card-item";
import Title from "@/app/components/Title/title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section1() {
    const data = [
        {
            image: "/demo/image6.png",
            title : "Nhạc trẻ",
            desc :"Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
            link: "/",
        },
        {
            image: "/demo/image6.png",
            title : "Nhạc trẻ",
            desc :"Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
            link: "/",
        },
        {
            image: "/demo/image6.png",
            title : "Nhạc trẻ",
            desc :"Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
            link: "/",
        },
        {
            image: "/demo/image6.png",
            title : "Nhạc trẻ",
            desc :"Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
            link: "/",
        },
        {
            image: "/demo/image6.png",
            title : "Nhạc trẻ",
            desc :"Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
            link: "/",
        },
        {
            image: "/demo/image6.png",
            title : "Nhạc trẻ",
            desc :"Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
            link: "/",
        },
        {
            image: "/demo/image6.png",
            title : "Nhạc trẻ",
            desc :"Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
            link: "/",
        },
        {
            image: "/demo/image6.png",
            title : "Nhạc trẻ",
            desc :"Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
            link: "/",
        },
        {
            image: "/demo/image6.png",
            title : "Nhạc trẻ",
            desc :"Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
            link: "/",
        },
        {
            image: "/demo/image6.png",
            title : "Nhạc trẻ",
            desc :"Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ",
            link: "/",
        }
    ]
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
                            {dataFinal.map((item:any, index:number) => (
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