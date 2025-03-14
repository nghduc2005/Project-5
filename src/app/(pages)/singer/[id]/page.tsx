// eslint-disable-next-line @typescript-eslint/no-explicit-any
import Section2 from "./section2";
import Section1 from "./section1";

export default async function SingerDetailPage({params}: any) {
    const {id} = await params
    return (
      <>
        <Section1 id ={id}/>
        {/* Danh sách bài hát */}
        <Section2 id={id}/>
      </>
    );
  }
  