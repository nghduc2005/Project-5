"use client"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { useRouter, useSearchParams } from "next/navigation";
import { FaMagnifyingGlass } from "react-icons/fa6";
export default function Search() {
    const router = useRouter()
    const params = useSearchParams()
    const keywordDefault = params.get("keyword") || ""
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSearch = (event:any) => {
      event.preventDefault()
      const keyword = event.target.keyword.value
      if(keyword) {
        router.push(`/search?keyword=${keyword}`)
      }
    }
    return (
      <>
        <form
        onSubmit={handleSearch}
        className="bg-[#212121] rounded-[50px] mt-[20px] sticky top-[20px] left-[20px] z-[999] py-[15px] px-[30px] flex items-center">
            <input type="text" name="keyword" placeholder="Tìm kiếm..." defaultValue={keywordDefault}
            className="order-2 flex-1 text-[16px] font-[600] text-white bg-transparent outline-none"/>
            <button type="submit" className="order-1 text-[22px] text-white mr-[20px]
            "><FaMagnifyingGlass /></button>
        </form>
      </>
    );
  }
  