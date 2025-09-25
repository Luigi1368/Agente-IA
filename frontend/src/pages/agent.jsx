import './agentStyle.scss'


export default function Agente() {
    return (
        <section className="Container">
            <div className="formul">
            <h1>Conclua abaixo</h1>
            </div>

            <div className="main">
                <h1>Escolha</h1>
                <label htmlFor="">
                <input type="radio" />
                A
                </label>
                <label htmlFor="">
                <input type="radio" />
                B
                </label>
                <label htmlFor="">
                <input type="radio" />
                C
                </label>
               <label htmlFor="">
               <input type="radio" />
               D
               </label>
            </div>
        </section>
    )
}