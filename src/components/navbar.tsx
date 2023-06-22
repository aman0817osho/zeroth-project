import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";


export const Navbar = () => {
  const [user] = useAuthState(auth);
  const signUserOut=async () =>{
    await signOut(auth);

  }
  return (
    <div>
      <Link to="/">Home</Link>
      {!user ?(<Link to="/Login">Login</Link>):(<Link to="/createpost">Create Post</Link>)}
      

      
      <div>
        <p>{user?.displayName}</p>

        <div className="pp">

        <img src={user?.photoURL || "" } width="100"  />
        </div>
        
      </div>
      <div><button onClick={signUserOut}>LogOut</button></div>

    </div>
  );
};
