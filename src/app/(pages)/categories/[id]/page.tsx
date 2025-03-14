// eslint-disable-next-line @typescript-eslint/no-explicit-any
import Section2 from "./section2";
import Section1 from "./section1";

export default async function SongByCategoryPage({params} : any) {
    const {id} = await params
    return (
      <>
          <Section1 id = {id}/>
        {/* Section2 */}
          <Section2 id = {id}/>
        {/* end Section2 */}
      </>
    );
  }
  