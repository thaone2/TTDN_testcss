import InputHover from "./InputHover";
import InputHoverDA from "./InputHoverDA";
import Loading from "./Loading";
import LoadingDA from "./LoadingDA";
function App() {
  return (
    <>
      <div className="bg-gray-700 h-screen grid grid-cols-2">
        <div className="m-20 p-2">
          <div className="pt-20">
            <InputHover />
          </div>
          <div className="pt-20">
            <InputHoverDA />
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className=" pt-[300px] ">
            <Loading />
          </div>
          <div className="pt-[200px]">
            <LoadingDA />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
