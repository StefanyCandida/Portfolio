import React, {useRef} from "react";
import * as S from '../Components/Styled/ContatoStyled'
import { FiGithub } from "react-icons/fi";
import { ImLinkedin2 } from "react-icons/im";
import { SiWhatsapp } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import emailjs from '@emailjs/browser';
import Stefany from '../Components/Img/Stefanycf.pdf'


export default function Contatos() {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sgzy7yn', '__ejs-test-mail-service__', form.current, '8QzIMBR8jyjpF3d92')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <S.Div >
        <S.Form ref={form} onSubmit={sendEmail}> 
            <S.DivDados>
                <S.Label for="nome">Nome:</S.Label>
                <S.Input id="nome" placeholder="Seu nome" name="user_name" type="text"/>
            </S.DivDados>
            <S.DivDados>
                <S.Label for="email">Email</S.Label>
                <S.Input id="email" type="Email" name="user_email" placeholder="Seu email"/>
            </S.DivDados>
            <S.DivT>
                <S.Label for="msg">Mensagem:</S.Label>
	            <S.Textarea id="msg" name="msg" rows="9" cols="50" placeholder="Mensagem"></S.Textarea>
            </S.DivT>
            <S.Button> Enviar</S.Button>
            



        </S.Form>
        <S.DivIcone>
        <button
            href={Stefany}
            download="Stefanycf.pdf"
            type="application/pdf"
          >
            Download Currículo
          </button>
            <S.A href='https://github.com/StefanyCandida' target="_blanck">  <FiGithub/> Stefany Candida</S.A> 
            <S.A href='https://wa.me/5561993352499' target="_blanck" title="61 99335 2499" > <SiWhatsapp/> (61)9 9335 2499</S.A>
            <S.A href='https://www.linkedin.com/in/stefanycandida/' target="_blanck"><ImLinkedin2/> Stéfany Candida</S.A>
            <S.A href='https://www.linkedin.com/in/stefanycandida/' target="_blanck"><SiGmail/> stefany.candida</S.A>
        </S.DivIcone>

         
    </S.Div>
  );
}
