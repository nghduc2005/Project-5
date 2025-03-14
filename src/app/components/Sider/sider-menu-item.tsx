"use client"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SiderMenuItem(props: any) {
    const pathName = usePathname() //phải dùng use client để sử dụng
    const { item, isLogin } = props

    return (
        <>
            {(item.isLogin === isLogin || item.isLogin===undefined) && (
                <li className="mb-[30px] ">
                    <Link href={item.link} className={`flex items-center hover:text-[#00ADEF] capitalize 
                    ${pathName == item.link ? `text-[#00ADEF]` : `text-white`}
                    `}
                    >
                        <span className="text-[20px] mr-[20px]">
                            {item.icon}
                        </span>
                        <span className="text-[16px] font-[700]">
                            {item.title}
                        </span>
                    </Link>
                </li>
            )}
        </>
    )
}