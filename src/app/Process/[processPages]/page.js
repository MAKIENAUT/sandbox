import '../../../styles/styles.css';
import { ProcessPages } from "@/data/ProcessData";

export async function getPages() {
   const response = await fetch("../../../data/ProcessData");
   const data = await response.json();
   return data;
}

export default function Process({ params }) {
   const { processPages } = params;
   const data = ProcessPages[processPages];

   return (
      <main>
         <div>
            {data.map((page) => (
                  <div key={page.id}>
                     <h1>{page.name}</h1>
                     <h2>{page.header}</h2>
                     <div>
                        {page.steps.map((step) => (
                           <div key={step.stepID}>
                              <h3>{step.stepTitle}</h3>
                              <p>{step.stepDesc}</p>
                           </div>
                        ))}
                     </div>
                  </div>
               ))}
         </div>
      </main>
   );
}