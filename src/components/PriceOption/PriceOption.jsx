import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({option}) => {
    return (
        <div className="bg-blue-500 rounded-md p-4 text-white flex flex-col">
            <h1 className="text-center">
                <span className="text-5xl">{option.price}</span>
                <span className="text-2xl">/mon</span>
            </h1> 
            <h4 className="text-3xl text-center mt-3">{option.priceName}</h4> 
            <div className="flex-grow">
            {
                option.features.map((feature,index) => <Feature key={index} feature={feature}></Feature>)
            }
            </div>
            <button className="mt-10 bg-green-500 hover:bg-green-400 duration-500 w-full p-2 rounded-md">Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;