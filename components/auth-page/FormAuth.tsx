'use client'
import { useState } from "react"
import Input from "./ui/MyInput"


export default function CreateProfile() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [pass, setPass] = useState('')

    return (
        <section className='grid justify-center  auto-cols-[300px]'>
            <h1 className="relative text-3xl top-16 left-3 " >Создайте учетную запись</h1>
            <div className="z-0 bg-secondary-theme w-0 h-0 fixed opacity-80 top-1/2 left-1/2 rounded-full shadow-blick-shadow"></div>
            
            <form className="grid mt-[30%] h-96 border-solid border-secondary-theme border-2 rounded-xl auto-rows-[27px] content-center justify-center" >
            
                <Input typeInp="email" name="email" value={email} setValue={setEmail} classNameInp="w-52 outline-none bg-black border-none border-b-secondary-theme border-b-2"  placeholderInput="Введите ваш E-mail"/><br />
                <Input typeInp="text"  name="name" value={name} setValue={setName} classNameInp="w-52 outline-none bg-black border-none border-b-secondary-theme border-b-2" placeholderInput="Ваше имя"/><br />
                <Input typeInp="text" value={userName} setValue={setUserName} classNameInp="w-52 outline-none bg-black border-none border-b-secondary-theme border-b-2"placeholderInput="Пользовательское имя" name="name"/><br />
                <Input typeInp="password" value={pass} setValue={setPass} name="password" classNameInp="w-52 outline-none bg-black border-none border-b-secondary-theme border-b-2" placeholderInput="Пароль"/> <br />
                
                <input className="bg-secondary-theme border-none text-white h-7 rounded-sm cursor-pointer transition-transform duration-700 ease-out hover:scale-105 active:scale-100" type='reset' value="Зарегестрироватся" />
                
                <a className="no-underline text-xs mt-3" href="/login">Уже зарегестрированны?</a>
            </form>
        
        </section>
    )
}

