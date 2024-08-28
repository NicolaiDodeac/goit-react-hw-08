import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="">
      <img
        className="flex justify-center items-center min-h-screen flex-col gap-2"
        src="https://voidcoders.com/wp-content/uploads/2018/09/featured-404-error-image.png"
        alt="Not Found"
      />
      <button className="bg-orange-400 text-cyan-600 text-lg border border-red-400 border-b-4 font-bold overflow-hidden absolute right-80 bottom-5 px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
        <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
        <Link to="/">Come Home</Link>
      </button>
    </div>
  );
};

export default NotFound;
