import { useState } from "react"

export default function Forms(){
    const [formData,updateFormData]= useState({
        email:"",
        password:"",
        password2:"",
        checkbox:false
    })
    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData);
    }
    function handleOnChange(event){
        event.preventDefault()
        const {name,value,type,checked}=event.target
        updateFormData((prevFormData)=>{
            return {
                ...prevFormData,
                // [event.target.name]: 
                [name]: type==="checkbox"? checked : value
            }
        })
        
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" placeholder="Email" onChange={handleOnChange} />
                <input type="text" name="password" placeholder="Password" onChange={handleOnChange}/>
                <input type="text" name="password2" placeholder="Confirm Password" onChange={handleOnChange}/>
                <input type="checkbox" name="checkbox" onChange={handleOnChange} />
                <button>submit</button>
            </form>
        </>
    )
}