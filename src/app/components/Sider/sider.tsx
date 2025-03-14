import Link from "next/link";
import SiderMenu from "./sider-menu";
export default function Sider() {
    return (
      <>
        <div className="bg-[#212121] w-[280px] h-[100vh] fixed">
            <div className="bg-[#1C1C1C] py-[25px] px-[20px]">
                <Link href="/">
                    <img
                        src="/Logo.svg"
                        alt="logo"
                        className="h-[42px] w-auto"
                    ></img>
                </Link>
            </div>
            <SiderMenu/>
        </div>
      </>
    );
  }
  