import { useState } from "react";

function InputHover() {
  const [hover, setHover] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div
      className={`overflow-hidden flex flex-col w-fit text-gray-600 ${
        onclick ? "text-blue-400" : ""
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      // onClick={() => {
      //   setHover(!hover);
      // }}
    >
      <span
        className={`flex flex-col pl-4  ${
          hover || inputValue
            ? "text-blue-400 -translate-x-3 duration-500  "
            : "text-[#646F79] translate-x-3 duration-500"
        }`}
      >
        Username
      </span>
      <input
        className={`bg-blue-400 border-t-2 pl-2 justify-center items-center flex border-blue-400 rounded-[8px] text-black focus:outline-none transition-all duration-700 ease-out ${
          hover || inputValue ? "h-12 p-2 opacity-100" : "h-0"
        }`}
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        required
        autoFocus
      />
    </div>
  );
}

export default InputHover;
