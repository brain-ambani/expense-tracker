import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";

const Home = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold">Welcome {user.firstName}</h1>
    </div>
  );
};

export default Home;
