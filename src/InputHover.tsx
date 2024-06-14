import { useState } from "react";

function InputHover() {
  const [hover, setHover] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div
      className="overflow-hidden flex flex-col w-fit text-gray-600 hover:text-blue-400"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <label
        className={`flex flex-col pl-4  ${
          hover || inputValue ? "text-blue-400  " : ""
        }`}
      >
        Username
      </label>

      <input
        className={`bg-blue-400 border-t-2 pl-2 justify-center items-center flex border-blue-400 rounded-[8px] text-black focus:outline-none transition-all ease-out ${
          hover || inputValue ? "h-12 p-2 opacity-100" : "h-0"
        }`}
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
    </div>
  );
}

export default InputHover;
