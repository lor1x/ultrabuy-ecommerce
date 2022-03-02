import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const RadioGr = ({ children }) => {
  const [selected, setSelected] = useState("");

  return (
    <div className="flex w-full">
      <div className="w-full">
        <RadioGroup value={selected} onChange={setSelected}>
          <div className="space-y-4 h-max">{children}</div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default RadioGr;
