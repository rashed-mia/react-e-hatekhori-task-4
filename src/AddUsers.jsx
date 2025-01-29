import PropTypes from "prop-types"
export default function AddUsers({onClick}){
    return (
        <button 
        onClick={onClick}
        className="bg-green-400 text-white font-semibold px-3 py-2 rounded-full">
        Add Users +
        </button>
    );
}

AddUsers.propTypes = {
    onClick:PropTypes.func.isRequired
}