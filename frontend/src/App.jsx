import { useEffect, useState } from "react";
import TodoCard from "./components/TodoCard";
import axios from'axios';
import CreateToDo from "./components/CreateToDo";
function App() {
  const [toDoList,setToDoList] = useState();


//순차적인게 동기적 순차적이지 않은게 비동기적
//백엔드에서 불러오려면 에이신크 어 웨 이 트
const getToDoList = async ()=>{
  try { 
    const response = await axios.get(`${
      process.env.REACT_APP_BACKEND_URL}/todo`);

    if(response.status !== 200 ){
      alert("!에러발생");
      return;
    }

    setToDoList(response.data); //셋투두리스트에 있는것들을 담아오고 리스폰스데이터를 가져오기
  } catch (error) {
    console.error(error);
  }
} 


  //앱컴포넌트가 렌더링 될때 유즈이펙트 
  useEffect(()=>{
    getToDoList();
  },[]); 



  return (
    <div className="min-h-screen flex flex-col justify-start items-center pt-16 bg-gray-400 text-white">
      <h1 className="text-4xl font-bold">AWESOME TO DO LIST 😎</h1>
      <div>
        <div className="mt-8 text-sm font-semibold">
          If I only had an hour to chop down a tree, I would spend the first 45
          minutes sharpening my axe, Abrabam Lincoln
        </div>
        <div className="text-xs">
          나무 베는데 한 시간이 주어진다면, 도끼를 가는데 45분을 쓰겠다,
          에비브러햄 링컨
        </div>
        <CreateToDo getToDoList={getToDoList}/>
      </div>
      <div className="mt-16 flex flex-col w-1/2">
        {toDoList ? toDoList.map((v,i)=>{
          return <TodoCard key={i} 
          title={v.title} 
          index={i} 
          getToDoList={getToDoList}
          isDone={v.isDone}/> //투두리스트가 배열이니깐 맵
        }) : "로딩중입니다..."}
    
      </div>
    </div>

  );
}

export default App;