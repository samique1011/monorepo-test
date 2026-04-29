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
        <p>This is the signin page</p>
        <p>This is a signin page pt2</p>
        <p>This is check number 3</p>
        <p>This is check number 4</p>
        <p>Check number 5</p>
        <input type="text" ref={u_ref}></input>
        <input type="text" ref={p_ref}></input>
        <button onClick={submitHandler}>Submit</button>
    </div>
}