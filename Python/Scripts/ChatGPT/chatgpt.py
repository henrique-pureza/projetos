import openai
from os import system, getenv
from dotenv import load_dotenv

load_dotenv()

openai.api_key = getenv("API_KEY")
system("cls")

prompt = input("Digite o que quer que o ChatGPT responda: ")

system("cls")
print(prompt)

create_response = openai.Completion.create(
    model="text-davinci-003",
    prompt=prompt,
    max_tokens=256,
    temperature=0
)

response = create_response.choices[0].text
print(response)
