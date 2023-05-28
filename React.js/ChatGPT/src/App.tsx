import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { BsSend } from "react-icons/bs";
import "./App.sass";
import axios from "axios";

import RequestContainer from "./components/RequestContainer/RequestContainer";
import ResponseContainer from "./components/ResponseContainer/ResponseContainer";

export default function App(): JSX.Element {
  const [request, setRequest] = useState<string>();
  const [chat, setChat] = useState<{role?: string, content?: string}[]>([
    {
      role: "system",
      content: "You are a helpful assistant."
    }
  ]);

  async function sendToGPT(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setChat((prev) => [...prev, {
      role: "user",
      content: request
    }]);

    const response = await axios.post("https://api.pawan.krd/v1/chat/completions", {
      model: "gpt-3.5-turbo",
      messages: chat
    }, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer pk-XcXRpvvuuWTLBjRHyWZyllGZEcAmVanvjOmrnYkVXQHVALlk`
      }
    });

    console.log(response.data);

    if (response.status === 200) {
      setChat((prev) => [...prev, {
        role: "assistant",
        content: response.data.choices[0].message.content
      }]);
    }
  }

  return (
    <Container fluid className="wrapper p-0">
      <Container fluid className="chat-stack p-0">
        {
          chat.map((chat, index) => {
            if (chat.role === "assistant") {
              return <ResponseContainer key={index} content={chat.content} />;
            } else if (chat.role === "user") {
              return <RequestContainer key={index} content={chat.content} />;
            }
          })
        }
      </Container>

      <Container fluid className="footer">
        <Container className="p-2">
          <Form className="chat-controls" onSubmit={(event: React.FormEvent<HTMLFormElement>) => sendToGPT(event)}>
            <Form.Control
              type="text"
              placeholder="Mensagem"
              className="prompt me-2"
              value={request}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setRequest(event.target.value)}
            />
            <Button
              type="submit"
              variant="dark"
              className="submit-button"
            >
              <BsSend />
            </Button>
          </Form>
        </Container>
      </Container>
    </Container>
  );
}
