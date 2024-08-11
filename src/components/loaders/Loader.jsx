import { ClipLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <ClipLoader color="#25434d" />
        </div>
    );
};

export default Loader;
