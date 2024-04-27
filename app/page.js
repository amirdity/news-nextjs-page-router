import Image from "next/image";
import Login from "./components/LogIn";
import SignUp from "./components/SignUp";
export default function Home() {
  return (
    <main>
      <div>
        <Login/>
        <SignUp/>
      </div>
      
    </main>
  );
}
