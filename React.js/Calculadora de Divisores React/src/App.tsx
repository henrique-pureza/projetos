import {Card, Button, Form} from 'react-bootstrap';
import React, {useState} from 'react';

export default function Calculadora(): JSX.Element {
    const [value, setValue] = useState<string>("0");

    function click(numero: number): void {
        if (value === "0") {
            setValue(numero.toString());
        } else {
            let originalValue: string = value;
            let valueToJoin: string = numero.toString();
            let joined: string[] = [originalValue, valueToJoin];
            let joinedArr: string = joined.join("");
            setValue(joinedArr);
        }
    }

    function click0(): void {
        if (value !== "0") {
            let originalValue: string = value;
            let valueToJoin: string = "0";
            let joined: string[] = [originalValue, valueToJoin];
            let joinedArr: string = joined.join("");
            setValue(joinedArr);
        }
    }

    function apagar(): void {
        setValue("0");
    }

    function igual(): void {
        let resultado: string[] = [];
        let getValue: number = parseInt(value);

        for (let i: number = 1; i <= getValue; i++) {
            if (getValue % i === 0) {
                let dividedNumber: number = getValue / i;
                resultado.push(dividedNumber.toString());
            }
        }

        let resultadoSemNulos = resultado.filter((i) => i);
        resultado = resultadoSemNulos;

        resultado.sort((a: any, b: any) => a - b);

        let resultadoString: string = resultado.join(", ");
        setValue(resultadoString);
    }

    function clickInput(): void {
        if (value === "0") {
            setValue("");
        }
    }

    function unClickInput(): void {
        if (value === "") {
            setValue("0");
        }
    }

    document.addEventListener("keydown", (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            igual();
        } else if (e.key === "Backspace" || e.key === "Delete" || e.key === "Escape") {
            apagar();
        } else if (e.key === "1" || e.key === "2" || e.key === "3" || e.key === "4" || e.key === "5" || e.key === "6" || e.key === "7" || e.key === "8" || e.key === "9") {
            const key: number = parseInt(e.key);
            click(key);
        } else if (e.key === "0") {
            click0();
        }
    });

    return (
        <Card className="corpo">
            <Card.Body>
                <div className="elementos">
                    <Form.Control className="visor" type="text" style={{fontWeight: "bold", fontSize: "5vh"}} value={value} onClick={() => clickInput()} onBlur={() => unClickInput()} />
                    <div className="botoes">
                        <div className="linha1">
                            <Button variant="outline-dark" className="botao" onClick={() => click(1)}>1</Button>
                            <Button variant="outline-dark" className="botao" onClick={() => click(2)}>2</Button>
                            <Button variant="outline-dark" className="botao" onClick={() => click(3)}>3</Button>
                        </div>
                        <div className="linha">
                            <Button variant="outline-dark" className="botao" onClick={() => click(4)}>4</Button>
                            <Button variant="outline-dark" className="botao" onClick={() => click(5)}>5</Button>
                            <Button variant="outline-dark" className="botao" onClick={() => click(6)}>6</Button>
                        </div>
                        <div className="linha">
                            <Button variant="outline-dark" className="botao" onClick={() => click(7)}>7</Button>
                            <Button variant="outline-dark" className="botao" onClick={() => click(8)}>8</Button>
                            <Button variant="outline-dark" className="botao" onClick={() => click(9)}>9</Button>
                        </div>
                        <div className="linha">
                            <Button variant="outline-dark" className="botao" onClick={() => apagar()}>
                                <img src="https://cdn.glitch.global/afb73b3b-68b2-4da3-b9d4-45b35d80e49c/apagar.png?v=1664675974077" alt="Apagar" width="20" height="20" />
                            </Button>
                            <Button variant="outline-dark" className="botao" onClick={() => click0()}>0</Button>
                            <Button variant="outline-dark" className="botao" onClick={() => igual()}>=</Button>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}
