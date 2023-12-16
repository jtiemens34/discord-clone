import { SignedIn, SignedOut } from "@clerk/nextjs";
const Dashboard = () => {
  return ( 
    <>
      <SignedIn>
        <h1>Signed in</h1>
      </SignedIn>
      <SignedOut>
        <h1>Signed out</h1>
      </SignedOut>
    </>
  );
}
 
export default Dashboard;