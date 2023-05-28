import Janela from "./Janela/Janela";
import BarraDeTarefas from "./BarraDeTarefas/BarraDeTarefas";
import "./../App.sass";
import "./../components/BarraDeTarefas/BarraDeTarefas.sass";

export default function Home(): JSX.Element {
    let openedWindows: [] = [
        {
            title: "Teste",
            body: <h1>Teste</h1>
        }
    ];

    return (
        <div className="windows">
            <div className="area-de-trabalho">
                {
                    openedWindows.map((window, index) => (
                        <Janela titulo={window.title} key={index}>
                            {window.body}
                        </Janela>
                    ))
                }
            </div>
            <BarraDeTarefas />
        </div>
    );
}
