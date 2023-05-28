import { useState, useEffect } from "react";

export default function BarraDeTarefas(): JSX.Element {
    const [hora, setHora] = useState<string>();
    const [data, setData] = useState<string>();

    function getDate(): string {
        let date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        let formattedDay = day < 10 ? "0" + day : day;
        let formattedMonth = month < 10 ? "0" + month : month;

        return `${formattedDay}/${formattedMonth}/${year}`;
    }

    function getTime(): string {
        let date = new Date();

        let hours = date.getHours();
        let minutes = date.getMinutes();

        let formattedHours = hours < 10 ? "0" + hours : hours;
        let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

        return `${formattedHours}:${formattedMinutes}`;
    }

    useEffect(() => {
        setData(getDate());
        setHora(getTime());

        const time = setInterval(() => {
            setHora(getTime());
        }, 1000);

        return () => {
            clearInterval(time);
        }
    }, []);

    return (
        <>
            <div className="barra-de-tarefas">
                <div className="btn-iniciar">
                    <button
                        className="botao-iniciar"
                    ></button>
                </div>
                <div className="btn-janelas-abertas">

                </div>
                <div className="area-de-notificacao">
                    <div className="relogio">
                        <span>{hora}</span>
                        <span>{data}</span>
                    </div>
                </div>

            </div>
            <div className="blur"></div>
        </>

    );
}
