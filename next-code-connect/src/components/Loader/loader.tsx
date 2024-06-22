import loader from "./loader.module.css"
const Loader = () => {
    return (
        <span className={loader.spinner}></span>
    );
};

export default Loader;