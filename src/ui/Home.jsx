import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="px-4 my-10 text-center transition-all duration-150 transform sm:my-16">
      <h1 className="mb-8 text-xl font-semibold uppercase md:text-3xl">
        The best pizza.
        <br />
        <span className="font-semibold text-yellow-500 ">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
