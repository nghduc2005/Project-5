"use client"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { TiHome } from "react-icons/ti";
import { FaMusic } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoPersonAdd } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaPodcast } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { authFirebase } from "@/app/firebaseConfig";
import SiderMenuItem from "./sider-menu-item";


export default function SiderMenu () {
    const [isLogin, setIsLogin] = useState<boolean>()
    useEffect(() => {
        onAuthStateChanged(authFirebase, (user) => {
            if(user) {
                setIsLogin(true)
            } else {
                setIsLogin(false)
            }
        })
    }, [])


    const menu = [
        {
            icon: <TiHome />,
            title: "Trang chủ",
            link: "/"
        },
        {
            icon: <FaMusic />,
            title: "Danh mục bài hát",
            link: "/categories"
        },
        {
            icon: <FaPodcast />,
            title: "Ca sĩ",
            link: "/singer"
        },
        {
            icon: <FaHeart />,
            title: "Bài hát yêu thích",
            link: "/wishlist",
            isLogin: true
        },
        {
            icon: <FaSignOutAlt />,
            title: "Đăng xuất",
            link: "/logout",
            isLogin: true
        },
        {
            icon: <IoPerson />,
            title: "Đăng nhập",
            link: "/login",
            isLogin: false
        },
        {
            icon: <IoPersonAdd />,
            title: "Đăng ký",
            link: "/register",
            isLogin: false
        },
    ]
    return (
        <>
            <nav className="py-[30px] px-[20px]">
                <ul className="">
                    {menu.map((item, index) => (
                        
                        <SiderMenuItem item={item} isLogin={isLogin} key={index}/>
                    ))}
                </ul>
            </nav>
        </>
    )
}