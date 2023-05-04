import axios from "axios";
import { useState } from "react";
import {RiDeleteBinLine } from "react-icons/ri"
function TodoCard({title, getToDoList ,index, isDone}) {

  const onClickIsDone =  async () =>{
    try {
      const response = await axios.put(`${
        process.env.REACT_APP_BACKEND_URL}/todo/done/${index}`);

        if(response.status !== 200){
          alert("에러발생!");
          return;
        }
    } catch (error) {
      console.error(error);
    }
    
  }

  const onClickDelete = async () =>{
    try {
      const response = await axios.delete(`${
        process.env.REACT_APP_BACKEND_URL}/todo/${index}`);

        if(response.status !== 200){
          alert("에러발생!");
          return;
      }

    } catch (error) {
      console.error(error);
    }
  }
      getToDoList();
    return(
      <div className="flex my-4">
      {isDone ? (
        <>
          <button  className="relative" onClick={onClickIsDone}>
          <div className="border-4 border-green-400 w-8 h-8 rounded-xl bg-green-300 p-2"></div>
          <div className="absolute border-4 border-white top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-8 h-8 scale-75 rounded-xl bg-green-400 p-2"></div>
          </button>
          <div className="text-2xl ml-4">{title}</div>
         
        </>
      ) : (
        <>
          <button className="border-4 border-green-400 w-8 h-8 rounded-xl" onClick={onClickIsDone}></button>
          <div className="text-2xl ml-4">{title}</div>
        </>
      )}
      <button onClick={onClickDelete}  
      className="ml-4 hover:text-purple-300 hover:scale-150 ease-in duration-300">
      <RiDeleteBinLine size={28}/>
      </button>
    </div>
          
    )
}
export default TodoCard;