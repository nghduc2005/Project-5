import CardInfo from "@/app/components/Card/cart-info";
import Title from "@/app/components/Title/title";
import Section3 from "./section3";
import Section1 from "./section1";
import Section2 from "./section2";

export default async function SongDetailPage({params}: any) {
    const {id} = await params

    return (
      <>
        <Section1 id={id}/>
        <Section2 id={id}/>
        {/* Bài hát cùng danh mục */}
        <Section3 id={id}/>
      </>
    );
  }
  