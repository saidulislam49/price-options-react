import PropTypes from "prop-types";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex items-center gap-2"><BsFillPatchCheckFill /> {feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}
export default Feature;