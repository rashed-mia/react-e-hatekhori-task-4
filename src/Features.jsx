import TotalUsers from "./TotalUsers";
import AddUsers from "./AddUsers";
import PropTypes from "prop-types"
export default function Features({onClick, totalUsers}){
    return (
        <div className="container mx-auto flex justify-between items-center">
        <TotalUsers totalUsers={totalUsers}/>
        <AddUsers onClick={onClick}/>
        </div>
    );
}

Features.propTypes = {
    onClick: PropTypes.func.isRequired,
    totalUsers: PropTypes.number.isRequird,
}