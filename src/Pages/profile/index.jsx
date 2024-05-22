import { useState } from 'react';

import {FiArrowLeft , FiCamera , FiMail , FiLock, FiUser } from 'react-icons/fi'
  
import { useNavigate } from "react-router-dom";


import { useAuth } from '../../hook/auth';

import { api } from '../../service/api';

import avaterPlaceHold from '../../assets/avatar_placeholder.svg'

import { Container , Form , Avatar } from "./styles";

import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { TextButton } from '../../components/textButton'



export function Profile(){


        const { user, updateUser } = useAuth();

        const [name,setName] = useState(user.name);
        const [email,setEmail] = useState(user.email);
        const [oldpassword,setOldPassword] = useState();
        const [newPassword,setNewPassword] = useState();


        const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avaterPlaceHold;
        const [avatar , setAvatar] = useState(avatarURL);
        const [avatarFile , setAvatarFile] = useState(null);

        const navigate = useNavigate()

        function handleBack(){
            navigate(-1)
        }

       async function handleUpdateUser(){

            const update = {
                name,
                email,
                password: newPassword,
                old_password: oldpassword
            }


            const userUpdate = Object.assign(user , update);

            await updateUser({ user: userUpdate , avatarFile})
        }

        function handleAvatarChange(event){

           const file =  event.target.files[0];
           
           setAvatarFile(file)

           const imagePreview = URL.createObjectURL(file);
           setAvatar(imagePreview)

         


        }


    return (
        <Container>
            <header>
                <TextButton
                    icon={FiArrowLeft}
                    title="Voltar"
                    onClick={handleBack}
                />
            </header>
                 
                <Form>
                    <Avatar>
                        <img 
                        src={avatar}
                        alt={user.name} />

                        <label htmlFor="avatar">
                            <FiCamera/>
                            <input 
                            id='avatar'
                            type="file"
                            onChange={handleAvatarChange} />
                        </label>
                    </Avatar>

                    <Input 
                        placeholder="Nome"
                        type="text"
                        icon={ FiUser}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input 
                        placeholder="E-Mail"
                        type="email"
                        icon={ FiMail}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input 
                        placeholder="Senha atual"
                        type="password"
                        icon={ FiLock}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                    <Input 
                        placeholder="Nova senha"
                        type="password"
                        icon={ FiLock}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />

                    <Button 
                    title="Salvar"
                    onClick={handleUpdateUser}/>
               </Form>

        </Container>
    )

}