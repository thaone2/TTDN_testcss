import InputHover from "./InputHover";
import "@/loading.css";
function App() {
  return (
    <div className="">
      <div className="bg-gray-800 h-screen">
        <div className="flex justify-center items-center p-36">
          <InputHover />
        </div>
      </div>

      <div className="flex mt-10 ringg w-40 h-40">
        <div className="span1"></div>
      </div>
    </div>
  );
}

export default App;
