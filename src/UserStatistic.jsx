import { useState, Fragment} from 'react';
import Features from "./Features";
import Header from "./Header";
import UserBoard from "./UserBoard";
export default function UserStatistic(){
    const Users = [
        
        {id:crypto.randomUUID(),
            Name: "Mr. Shahid",
            Age: 37,
            Occupation: "teacher"
         },
         {id:crypto.randomUUID(),
            Name: "Mr. Jamil",
            Age: 32,
            Occupation: "Doctor"
         },
         {id:crypto.randomUUID(),
            Name: "Saikat Ahemed",
            Age: 35,
            Occupation: "Engineer"
         },
         {id:crypto.randomUUID(),
            Name: "Mr. Akash",
            Age: 22,
            Occupation: "Student"
         },
         {id:crypto.randomUUID(),
            Name: "Mamun Hossain",
            Age: 30,
            Occupation: "Blogger"
         },
   ]

   const name = (length) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

  const newUser = {
    id:crypto.randomUUID(),
    Name:`Mr. ${name(6)}`,
    Age:Math.floor(Math.random() * (50 - 20 + 1)) + 20,
    Occupation:`professional ${name(4)}`
    };
   const [addUsers, setAddUser] = useState(Users);
   function handleClick() {
    setAddUser(
        [...addUsers, newUser]
    )
   }

    return (
        <Fragment>
        <Header />
        <Features onClick={handleClick} totalUsers= {addUsers.length}/>
        <UserBoard users={addUsers}/>
        </Fragment>
    );
}