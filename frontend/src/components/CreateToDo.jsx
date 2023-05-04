import axios from "axios";
import { useState } from "react";

function CreateToDo({getToDoList}){
    const [title,setTitle] = useState("");

    const onSubmitCreateToDo = async (e)=> {
        try {
            e.preventDefault();

            if(!title){
                alert("할일을 입력해주세요!");
                return;
            }
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/todo`,
            {
                title,
                desc : `${title} 냥냥`,
            });


            // console.log(response);

            if(response.status !== 200){
                alert("에러발생!");
                return;
            }
            getToDoList();
            setTitle("");
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <form className="flex mt-2" onSubmit={onSubmitCreateToDo}>
          <input 
            className="grow border-2 bg-gray-200 border-green-300 rounded-lg focus:outline-green-500 px-2 py-1 text-lg"
            type="text"
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
          />
          <input
            className="ml-4 px-2 py-1 bg-green-400 rounded-lg text-gray-50"
            type="submit"
            value="추가!"
          />
        </form>
    )
}
export default CreateToDo;