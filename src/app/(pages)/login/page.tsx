"use client"
import Title from "@/app/components/Title/title";
import { authFirebase } from "@/app/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter()
    const handleLogin = (event: any) => {
      event.preventDefault()
      const email = event.target.email.value
      const password = event.target.password.value
      signInWithEmailAndPassword(authFirebase, email, password)
        .then((userCredential) => {
          const user = userCredential.user
          if(user) {
            router.push("/")
          }
        })
        .catch((error) => {
          alert("Tài khoản hoặc mật khẩu không chính xác")
        })
    }
    return (
      <>
        <div className="mt-[60px] w-[500px] mx-auto">
          <Title text="Đăng Nhập Tài Khoản" className="text-center"/>
          <form className="" onSubmit={handleLogin}>
            <div className="mb-[15px]">
              <label className="block mb-[5px] font-[600] text-[14px]" htmlFor="email">
                <span className="text-white">Email</span>
                <span className="text-red-500 ml-[5px]">*</span>
              </label>
              <input type="email" name="email" id="email" placeholder="Ví dụ: levana@gmail.com"
              className="h-[50px] w-full rounded-[6px] bg-white px-[16px] text-[14px] font-[600] outline-none" 
              required={true}/>
            </div>
            <div className="mb-[15px]">
              <label className="block mb-[5px] font-[600] text-[14px]" htmlFor="password">
                <span className="text-white">Mật Khẩu</span>
                <span className="text-red-500 ml-[5px]">*</span>
              </label>
              <input type="password" name="password" id="password"
              className="h-[50px] w-full rounded-[6px] bg-white px-[16px] text-[14px] font-[600] outline-none" 
              required={true}/>
            </div>
            <button type="submit" 
              className="h-[50px] w-full rounded-[6px] bg-[#00ADEF] px-[16px] text-[14px] font-[600] outline-none">
              Đăng Nhập
            </button>
          </form>
        </div>
      </>
    );
  }
  