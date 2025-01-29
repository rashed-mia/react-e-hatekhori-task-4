import PropTypes from "prop-types"
export default function TotalUsers({totalUsers}){
    return (
        <p className="text-2xl font-bold text-green-400">Total User: {totalUsers}</p>
    );
}

TotalUsers.propTypes = {
    totalUsers:PropTypes.number.isRequird
        
}