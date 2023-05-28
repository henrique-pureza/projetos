import { Container } from "react-bootstrap";
import { IconContext } from "react-icons";
import { SiOpenai } from "react-icons/si";
import { useState, useEffect } from "react";

import "./style.sass";

interface ResponseContainerProps {
    content?: string
}

export default function ResponseContainer(props: ResponseContainerProps): JSX.Element {
    const [content, setContent] = useState<string[]>([]);

    useEffect(() => {
        if (props.content) {
            const propsContent: string[] = props.content.split(" ");

            propsContent.forEach((word, index) => {
                setTimeout(() => {
                    setContent((prev) => [...prev, word]);
                }, index * 100);
            });
        }
    }, [props.content]);

    return (
        <IconContext.Provider value={{ size: "35px", className: "me-3" }}>
            <Container fluid className="response-container p-3">
                <Container className="response-content d-flex">
                    <div className="p-0">
                        <SiOpenai />
                    </div>
                    <div className="p-0 d-flex flex-grow-1" style={{ maxWidth: "100%" }}>
                        <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{content.join(" ")}</pre>
                    </div>
                </Container>
            </Container>
        </IconContext.Provider>
    );
}
