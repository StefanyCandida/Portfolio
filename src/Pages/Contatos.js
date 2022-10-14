import React, {useRef} from "react";
import * as S from '../Components/Styled/ContatoStyled'
import { FiGithub } from "react-icons/fi";
import { ImLinkedin2 } from "react-icons/im";
import { SiWhatsapp } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import emailjs from '@emailjs/browser';

export default function Contatos() {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();     

    emailjs.sendForm('service_b101ta7', 'template_lopfyx6', form.current, '8QzIMBR8jyjpF3d92')
      .then((result) => {
          console.log("sucesso", result.status, result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
 
    return (
    <S.Div >
        <S.Form ref={form} onSubmit={sendEmail}> 
            <S.DivDados>
                <S.Label for="nome">Nome:</S.Label>
                <S.Input id="nome" placeholder="Seu nome" name="name" type="text"/>
            </S.DivDados>
            <S.DivDados>
                <S.Label for="email">Email</S.Label>
                <S.Input id="email" type="email" name="email" placeholder="Seu email"/>
            </S.DivDados>
            <S.DivT>
                <S.Label for="msg">Mensagem:</S.Label>
	            <S.Textarea id="msg" name="message" rows="9" cols="50" placeholder="Mensagem"></S.Textarea>
            </S.DivT>
            <S.Button value="Send"> Enviar</S.Button>            
        </S.Form>
        <S.DivIcone>
       
       
            <S.A href='https://github.com/StefanyCandida' target="_blanck">  <FiGithub/> Stefany Candida</S.A> 
            <S.A href='https://wa.me/5561993352499' target="_blanck" title="61 99335 2499" > <SiWhatsapp/> (61)9 9335 2499</S.A>
            <S.A href='https://www.linkedin.com/in/stefanycandida/' target="_blanck"><ImLinkedin2/> Stéfany Candida</S.A>
            <S.A href='https://www.linkedin.com/in/stefanycandida/' target="_blanck"><SiGmail/> stefany.candida</S.A>
        </S.DivIcone>

         
    </S.Div>
  );
}
