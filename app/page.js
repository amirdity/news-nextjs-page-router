import Image from "next/image";
import Login from "./components/axios-auth/Login";
// import Login from "./components/firebase/LogIn";
// import SignUp from "./components/firebase/SignUp";
// import LoginSignup from "./components/LogIn/LoginSignup";
export default function Home() {
  return (
    <main>
      <div>
        {/* <Login/>
        <SignUp/>
        <LoginSignup/> */}
        <Login/>
      </div>
    </main>
  );
}
