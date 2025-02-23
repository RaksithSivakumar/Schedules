import { useState } from "react";
import Academic from "./academic";
import Personal from "./personal";
import Communication from "./communication";
import Additional from "./Addition";
import Health from "./Health";
import Class from "./classadvisor";

const steps = [
  { id: "01", name: "Personal", completed: true,status:true },
  { id: "02", name: "Academic", completed: true,status:false  },
  { id: "03", name: "Communication", completed: true,status:false  },
  { id: "04", name: "Class Advisor", completed: true,status:false  },
  { id: "05", name: "Health", completed: true,status:false  },
  { id: "06", name: "Additional Info", completed: true,status:false  },
];

const Timeline = () => {
  const [lock,setlock]=useState(1);
  const render = () => {
    if (lock === 1) {
      return <Personal />;
    }else if (lock === 2) {
      return <Academic />;
    }else if(lock === 3){
      return <Communication />
    }else if(lock === 4){
      return <Class />
    }else if(lock === 5){
      return <Health />
    }else if(lock === 6){
      return <Additional />
    }
    return null;
  };
  return (
    <div>
    <div className="w-3/5 max-w-6xl mx-auto p-8">
      <div className="flex flex-row justify-between items-center">
        {steps.map((step, index) => (
          <div key={step.id} className="relative flex flex-col items-center flex-1">
            <div
              onClick={()=>{setlock(index+1)}} 
              className={`relative z-10 h-12 w-12 rounded-full flex justify-center items-center transition-all duration-300
                ${step.completed 
                  ? "bg-green-500 shadow-lg shadow-green-200" 
                  : "bg-gray-700 shadow-lg shadow-gray-200"
                }`}
            >
              <p className="text-white font-bold text-lg " onClick={()=>{setlock(index+1)}} >{index + 1}</p>
            </div>
            
            <p className={`mt-4 text-sm font-medium text-center
              ${step.completed ? "text-green-600" : "text-gray-600"}`}>
              {step.name}
            </p>

            {index < steps.length - 1 && (
              <div className="absolute top-6 left-1/2 w-full h-1 z-2">
                <div className={`h-full rounded-full transition-all duration-300
                  ${step.completed ? "bg-green-500" : "bg-gray-300"}`}>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    {render()}

    </div>
  );
};

export default Timeline;