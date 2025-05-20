import { useEffect } from "react";
const App = () => {
  const url = "https://kf-fullstack-test.onrender.com/api/users";

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("something went wrong");
      }

      const data = await res.json();
      console.log(data);
    };
    getUsers();
  }, []);
  return (
    <div>
      <h1 className="heading">Hello World</h1>
    </div>
  );
};

export default App;
