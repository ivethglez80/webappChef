import React, { useState } from "react";
import { Button, Label, Textarea, TextInput } from "flowbite-react";

const ContactForm = () => {

    const [state, setState] = useState({
        nombre: "",
        apellido: "",
        email: "",
        consulta: ""
    })

    const baseUrl = "http://localhost:3001";

    const sendEmail = async () => {
        let dataSend = {
            nombre: state.nombre,
            apellido: state.apellido,
            email: state.email,
            consulta: state.consulta
        }

        const res = await fetch(`${baseUrl}/contactus/form`,{
            method: "POST",
            body: JSON.stringify(dataSend),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((res)=>{
            console.log(res);
            if(res.ok ){
                alert ("Email sent succesfully")
            }else{
                console.log("Error sending email");
            }
        })
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setState((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const clearForm = () =>{
        setState({
            nombre: "",
            apellido: "",
            email: "",
            consulta: ""
          });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(state);
        await sendEmail();
        clearForm();
    }


    return (
        <div className="flex max-w-md flex-col sm:my-8">
        <div >
            <form onSubmit={handleSubmit} >
                <div className="mb-3">                   
                    <Label htmlFor="name1" value="Name:" className="font-txt text-slate-200"></Label>                   
                    <TextInput type="text" name="nombre" value={state.nombre} placeholder="name" required onChange={handleInput}></TextInput>
                </div>
                <div className="mb-3">                   
                    <Label htmlFor="lastName" value="Last Name:" className="font-txt text-slate-200"></Label>                   
                    <TextInput type="text" name="apellido" value={state.apellido} placeholder="Last Name" required  onChange={handleInput}></TextInput>
                </div>
                <div className="mb-3">                    
                    <Label htmlFor="email" value="E-mail:" className="font-txt text-slate-200"></Label>                    
                    <TextInput type="email" name="email" value={state.email} placeholder="name@mail.com" onChange={handleInput}></TextInput>
                </div>
                <div className="mb-3">
                    <Label htmlFor="detalle" value="Please provide a description of the service you are interested in:" className="font-txt text-slate-200"></Label> <br />
                    <Textarea
                        placeholder="I'm interested in..."
                        required rows={6}
                        name="consulta"
                        value={state.consulta}
                        onChange={handleInput}
                                                 
                    />
                </div>
                <div className="mb-3 flex justify-end">
                    
                    <Button type="submit" className="bg-yellow-400 enabled:hover:bg-yellow-500">Submit</Button>
                </div>
            </form>
        </div>        
        </div>
    )
}

export default ContactForm;