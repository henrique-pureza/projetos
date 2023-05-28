import { Container } from "react-bootstrap";
import { IconContext } from "react-icons";
import { BsPersonCircle } from "react-icons/bs";
import "./style.sass";

interface RequestCardProps {
    content?: string
}

export default function RequestContainer(props: RequestCardProps): JSX.Element {
    return (
        <IconContext.Provider value={{ size: "35px", className: "me-3" }}>
            <Container fluid className="request-container p-3">
                <Container className="request-content d-flex">
                    <div className="p-0">
                        <BsPersonCircle />
                    </div>
                    <div className="p-0 d-flex flex-grow-1" style={{ maxWidth: "100%" }}>
                        <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}>{props.content}</pre>
                    </div>
                </Container>
            </Container>
        </IconContext.Provider>
    );
}
