"use client"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import Title from "@/app/components/Title/title";
import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { error } from "console";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useRouter } from "next/navigation";
export default function RegisterPage() {
    const router = useRouter()
    const handleRegister = (event: any) => {
      event.preventDefault()
      const fullName = event.target.fullName.value
      const email = event.target.email.value
      const password = event.target.password.value
      createUserWithEmailAndPassword(authFirebase, email, password)
        .then((userCredential) => {
          const user = userCredential.user
          set(ref(dbFirebase, `users/${user.uid}`), {
            fullName:fullName
          }).then(() => {
            router.push("/")
          })
        })
        .catch ((error) => {
          console.log(error)
        })
    }
    return (
      <>
        <div className="mt-[60px] w-[500px] mx-auto">
          <Title text="Đăng Ký Tài Khoản" className="text-center"/>
          <form className="" onSubmit={handleRegister}>
            <div className="mb-[15px]">
              <label className="block mb-[5px] font-[600] text-[14px]" htmlFor="fullName">
                <span className="text-white">Họ Tên</span>
                <span className="text-red-500 ml-[5px]">*</span>
              </label>
              <input type="text" name="fullName" id="fullName" placeholder="Ví dụ: Le Van A"
              className="h-[50px] w-full rounded-[6px] bg-white px-[16px] text-[14px] font-[600] outline-none" 
              required={true}/>
            </div>
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
              Đăng Ký
            </button>
          </form>
        </div>
      </>
    );
  }
  