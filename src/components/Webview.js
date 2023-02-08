import React from "react";
import { useState } from "react";
export default function Webview(props) {
  const [value, setValue] = useState(100)
    const[str,setStr]=useState("this is a string");
    const[bool, setBool]= useState(true);
    const[obj,setObj]=useState({name:"sagar",age:20});
    const[price,setprice]=useState(500);

    const changestate=()=>{
      setStr("hello its a string");
    }

    const changeobj=()=>{
      setObj({name:"aakash",age:30});
    }
    const changevalue=()=>{
      setValue(500);
    }
    const changebool=()=>{
      setBool(false);
    }
    const changeprice=()=>{
      setprice(100000);
    }
    return (
    <div>
        
        <p>{value}</p>
        {props.doler ?
        <p>price is 500 inr</p>:<p>price is 5.65 usd</p>
        }
        {
          props.inr ?
          <p>{price}inr</p>:<p> {price/80}usd</p>
        }
        <p>string is{str}</p>
        <p>boolean is{bool}</p>
        <p>object is {obj.name}  {obj.age}</p>
        <p> {bool?"hello":"welcome"}</p>

        <button onClick={changeobj}>change object value</button>
        <button onClick={changestate}>change this state</button>
        <button onClick={changevalue}>change this value</button>
        <button onClick={changeprice}>change this state</button>
        <button onClick={changebool}>change this state</button>
        
        <p> {props.data.age}</p>
        <p> {props.data.name}</p>
        <p> {props.data.salary}</p>
        
        
    </div>
    
  )
}
