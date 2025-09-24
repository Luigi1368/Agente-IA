import './intro.scss'
import { Link } from 'react-router'

export default function Intro () {
    return(

       <>
       <div className="background-animation"></div>

    <div className="intro-container">
    <h1>Bem-vindo ao Nosso Site</h1>
    <p>Descubra experiências incríveis clicando abaixo</p>
    <Link to={'/Agt'} className='enter-button' > Cagado </Link>
    </div>
       </>
    )
}