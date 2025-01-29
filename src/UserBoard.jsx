import UserDetails from "./UserDetails"
import PropTypes from "prop-types";

export default function UserBoard({users}){
    
    
    return (
        <ul className="container mx-auto grid grid-cols-3 py-12 gap-4">
            {
                users.map((user) =>(
                    <li key={user.id} className="bg-green-400 p-4 rounded-2xl text-white"><UserDetails user={user}/></li>
                ))
            }
        </ul>
    )
        
     
}

UserBoard.propTypes = {
    users: PropTypes.array.isRequired
};