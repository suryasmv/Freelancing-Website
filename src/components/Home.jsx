import {
  useNavigate,
} from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClientClick = () => {
    navigate("/client-login");
  };

  const handleFreelancerClick = () => {
    navigate("/freelancer-login");
  };

  return (
    <div
      className="bg-center bg-cover h-screen "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')",
      }}
    >
      <div className="flex justify-end h-full">
        <div className="bg-white p-8 rounded-2xl w-1/3 flex flex-col items-center m-10">
          <h2 className="text-2xl font-extrabold mb-4 text-black">
            Who are you
          </h2>
          <div className="flex flex-col justify-center">
            <div
              onClick={handleClientClick}
              className="card bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded h-44 w-72 m-4 flex items-center justify-center"
            >
              Client
            </div>
            <div
              onClick={handleFreelancerClick}
              className="card bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded h-44 w-72 m-4 flex items-center justify-center"
            >
              Freelancer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;