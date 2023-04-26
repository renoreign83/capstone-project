import axios from "axios";
import React from "react";
import ToDoForm from "./TodoForm";



const MainPage = ({ loggedIn, setLoggedIn, userId }) => {
  const setUserItems = (text) => {
    axios
      .get("http://127.0.0.1:5000/getall", {
        text: text,
        user_id: userId,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    

      {loggedIn ? (
        <ToDoForm
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          userId={userId}
          setUserItems={setUserItems}
        />
      ) : (
        <div className="">
          <div className="">
            <div className="home-container">
              <h1 className="title">ADHD No More</h1>

              

                
              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainPage;