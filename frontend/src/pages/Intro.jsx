import './intro.scss'
import { Link } from 'react-router'

export default function Intro () {
    return(

       <>
       <div className="intro-page">
       <div className="background-animation"></div>

<div className="intro-container">
<h1>Bem-vindo ao agente de IA</h1>
<p>Descubra sua profissão</p>
<Link to={'/Agt'} className='enter-button' > Iniciar </Link>
</div>
       </div>
       </>
    )
}