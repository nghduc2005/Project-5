import { Suspense } from "react";
import Section1 from "./section1";

export default function SearchPage() {
    return (
      <>
        <Suspense>
          <Section1/>
        </Suspense>
      </>
    );
  }
  