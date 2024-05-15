import React ,{useState}from "react";

export default function Function(){
    const [fullName,setFullName] = useState<string>("penrose");
    const [age, setAge] = useState<number>(20);
    const [student,setStudent] = useState <string[]>([]);
    const [isActive, setIsActive] = useState<boolean>(true);
    const handleChange =(){
        setAge(99);
    }
        return (
        <div> 
            Function{
                /*
                - State : dùng để quản lí dữ liệu trong component 
                - Đối với function để quản lí dữ liệu dùng useState 
                đây là 1 hook sinh ra để giúp function có thể quản lí dữ liệu   
                */
            } 
            <p>{fullName} năm nay {age} tuổi </p>
            <button onClick = {handleChange}> change age </button>
        </div>
    )
}