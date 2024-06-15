import "@/loadingda.css";

function LoadingDA() {
  return (
    <div>
      <div className="container">
        <div className="loader">
          <span></span>
        </div>
        <div className="loader">
          <span></span>
        </div>
        <div className="loader">
          <i></i>
        </div>
        <div className="loader">
          <i></i>
        </div>
      </div>
    </div>
  );
}

export default LoadingDA;
