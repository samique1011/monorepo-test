"use client";

import { useRef } from "react";
import axios from "axios";

export default function Home(){

    const u_ref = useRef<HTMLInputElement>(null);
    const p_ref = useRef<HTMLInputElement>(null);

    async function  submitHandler(){
        const body = {
            username : u_ref?.current?.value , 
            password : p_ref.current?.value
        }

        try{
            const res = await axios.post("http://localhost:3002/signin" , body);
            console.log(res.data.msg);
        }
        catch(e){
            console.log(e);
        }
    }
    return <div>
        <input type="text" ref={u_ref}></input>
        <input type="text" ref={p_ref}></input>
        <button onClick={submitHandler}>Submit</button>
    </div>
}