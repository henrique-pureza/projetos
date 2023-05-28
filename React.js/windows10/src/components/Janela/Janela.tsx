import { useState, useRef, useEffect } from "react";
import "./Janela.sass";

interface JanelaProps {
    titulo?: string;
};

export default function Janela(props: JanelaProps): JSX.Element {
    const minBtnRef = useRef<HTMLButtonElement>(null);
    const maxBtnRef = useRef<HTMLButtonElement>(null);
    const closeBtnRef = useRef<HTMLButtonElement>(null);
    const janelaRef = useRef<HTMLDivElement>(null);

    const [isMaximized, setIsMaximized] = useState<boolean>(false);
    const [positions, setPositions] = useState<Object>({
        startX: 0,
        startY: 0,
        offsetX: 0,
        offsetY: 0
    });
    const [isDragging, setIsDragging] = useState<boolean>(false);

    function minBtnLostFocus(): void {
        minBtnRef.current.style.animation = "min_max_lostfocus .3s";
        setTimeout(() => {
            minBtnRef.current.style.animation = "";
        }, 100)
    }

    function maxBtnLostFocus(): void {
        maxBtnRef.current.style.animation = "min_max_lostfocus .3s";
        setTimeout(() => {
            maxBtnRef.current.style.animation = "";
        }, 100)
    }

    function closeBtnLostFocus(): void {
        closeBtnRef.current.style.animation = "close_lostfocus .3s";
        setTimeout(() => {
            closeBtnRef.current.style.animation = "";
        }, 100)
    }

    function closeWindow(): void {
        janelaRef.current.style.animation = "close .2s";
        setTimeout(() => {
            janelaRef.current.style.animation = "";
            janelaRef.current.style.display = "none";
        }, 175);
    }

    function maximizeWindow(): void {
        if (!isMaximized) {
            janelaRef.current.style.width = "90%";
            janelaRef.current.style.height = "90%";
            janelaRef.current.style.top = "";
            janelaRef.current.style.left = "";
            janelaRef.current.style.right = "5px";
            janelaRef.current.style.bottom = "5px";

            setIsMaximized(true);

            setTimeout(() => {
                janelaRef.current.style.animation = "maximize .25s";
                janelaRef.current.style.animationTimingFunction = "cubic-bezier(0,.52,.66,1)";
            }, 12);
            setTimeout(() => {
                janelaRef.current.style.width = "100%";
                janelaRef.current.style.height = "100%";
                janelaRef.current.style.right = "";
                janelaRef.current.style.bottom = "";
                janelaRef.current.style.top = "0";
                janelaRef.current.style.left = "0";
            }, 250);
        } else {
            janelaRef.current.style.width = "660px";
            janelaRef.current.style.height = "500px";
            janelaRef.current.style.top = "20px";
            janelaRef.current.style.left = "20px";

            setIsMaximized(false);

            janelaRef.current.style.animation = "restore .3s";
            janelaRef.current.style.animationTimingFunction = "cubic-bezier(0,.52,.66,1)";

            setTimeout(() => {
                janelaRef.current.style.width = "640px";
                janelaRef.current.style.height = "480px";
                janelaRef.current.style.top = "40px";
                janelaRef.current.style.left = "40px";
            }, 250);
        }
    }

    function handleMouseDown(e: MouseEvent): void {
        if (!isDragging) {
            if (e.target.classList.contains("janela-header")) {
                setIsDragging(true);
                setPositions({
                    startX: e.clientX,
                    startY: e.clientY,
                    offsetX: e.target.offsetLeft,
                    offsetY: e.target.offsetTop
                });
            }
        } else {
            setPositions({
                startX: e.clientX,
                startY: e.clientY,
                offsetX: e.target.offsetLeft,
                offsetY: e.target.offsetTop
            });
        }
    }

    function handleMouseMove(e: MouseEvent): void {
        if (isDragging) {
            const newX = e.clientX - positions.startX;
            const newY = e.clientY - positions.startY;

            janelaRef.current.style.left = positions.offsetX + newX + "px";
            janelaRef.current.style.top = positions.offsetY + newY + "px";
        }
    }

    function handleMouseUp(): void {
        setIsDragging(false);
    }

    useEffect(() => {
        janelaRef.current.style.animation = "open .4s";
        janelaRef.current.style.top = `${Math.random() * 100}px`;
        janelaRef.current.style.left = `${Math.random() * 750}px`;
    }, []);

    return (
        <div className="janela"
            ref={janelaRef}
            onMouseDown={isMaximized ? undefined : (e: MouseEvent) => handleMouseDown(e)}
            onMouseMove={isMaximized ? undefined : (e: MouseEvent) => handleMouseMove(e)}
            onMouseUp={isMaximized ? undefined : handleMouseUp}
        >
            <div className="janela-header">
                <span className="janela-title">
                    {props.titulo}
                </span>
                <div className="btn">
                    <button
                        className="button minimizar"
                        ref={minBtnRef}
                        onMouseLeave={minBtnLostFocus}
                    ></button>
                    <button
                        className={isMaximized ? "button maximized" : "button maximizar"}
                        ref={maxBtnRef}
                        onMouseLeave={maxBtnLostFocus}
                        onClick={maximizeWindow}
                    ></button>
                    <button
                        className="button fechar"
                        ref={closeBtnRef}
                        onMouseLeave={closeBtnLostFocus}
                        onClick={closeWindow}
                    ></button>
                </div>
            </div>
            <div className="janela-content">
                {props.children}
            </div>
        </div>
    );
}
