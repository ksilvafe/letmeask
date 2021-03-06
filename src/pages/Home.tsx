import { useHistory } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth';

import illustrationImg from '../assets/imagens/illustration.svg';
import logoImg from '../assets/imagens/logo.svg';
import googleiconImg from '../assets/imagens/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';


export function Home(){
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth()

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }
    history.push('/rom/new');
  }

  return(
    <div id="page-auth">
        <aside>
          <img src={illustrationImg} alt="ilustração de perguntas e respostas" />
          <strong>Crie sua sala de Q&A ao vivo</strong>
          <p>Tire suas dúvidas da sua audiência em tempo real.</p>
        </aside>
        <main>
          <div className="main-content">
            <img src={logoImg} alt="Letmeask" />
            <button onClick={handleCreateRoom} className="create-rom">
              <img src={googleiconImg} alt="Logo do google" />
              Crie sua sala com o Google
            </button>
            <div className="separator">ou entre em uma sala</div>
            <form>
              <input
              type="text"
              placeholder="Digite o código da sala"
               />
               <Button type="submit">
                  Entrar na sala
               </Button>
            </form>
          </div>
        </main>
    </div>
  )
  
}