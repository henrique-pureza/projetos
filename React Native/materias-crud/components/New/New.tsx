import        React, { useState }  from "react";
import type { NewProps }           from "../../App";
import      { Flex, Text, Button } from "@react-native-material/core";
import      { AppBar, TextInput }  from "@react-native-material/core";
import      { IconButton }         from "@react-native-material/core";
import      { ActivityIndicator }  from "@react-native-material/core";
import      { List }               from "react-native-paper";
import        MaterialIcon         from "@expo/vector-icons/MaterialIcons";
import        axios                from "axios";

export default function New({ navigation }: NewProps): JSX.Element {
    const [ materia,          setMateria          ] = useState<string>  ("");
    const [ tipo,             setTipo             ] = useState<string>  ("Tipo de matéria");
    const [ isSending,        setIsSending        ] = useState<boolean> (false);
    const [ isComboBoxOpened, setIsComboBoxOpened ] = useState<boolean> (false);
    const [ isEditingMateria, setIsEditingMateria ] = useState<boolean> (false);

    function chooseTipo(tipo: string) {
        setTipo(tipo);
        setIsComboBoxOpened(false);
    }

    async function submit() {
        setIsSending(true);

        const response = await axios.post("https://api-python-mxqq.onrender.com/create", {
            materia: materia,
            tipo: tipo
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response.status === 200) {
            setIsSending(false);
            navigation.navigate("Home");
        }
    }

    return (
        <>
            <AppBar
                title="Criar matéria"
                leading={(props) => (
                    <IconButton
                        icon={(props) => <MaterialIcon name="arrow-back" {...props} />}
                        onPress={() => navigation.navigate("Home")}
                        {...props}
                    />
                )}
            />
            <Flex fill p={10}>
                <Text variant="h6" style={{ marginBottom: 20 }}>Nova matéria</Text>
                <TextInput
                    label={materia === "" ? "Matéria" : isEditingMateria ? "Matéria" : undefined}
                    variant="filled"
                    style={{ marginBottom: 5 }}
                    onChangeText={(text) => setMateria(text)}
                    defaultValue={materia}
                    onFocus={() => setIsEditingMateria(true)}
                    onBlur={() => setIsEditingMateria(false)}
                />
                <List.Accordion
                    title={tipo}
                    expanded={isComboBoxOpened}
                    onPress={() => setIsComboBoxOpened(!isComboBoxOpened)}
                >
                    <List.Item title="Linguagem"            onPress={() => chooseTipo("Linguagem")}            />
                    <List.Item title="Ciência Humana"       onPress={() => chooseTipo("Ciência Humana")}       />
                    <List.Item title="Ciência Exata"        onPress={() => chooseTipo("Ciência Exata")}        />
                    <List.Item title="Itinerário Formativo" onPress={() => chooseTipo("Itinerário Formativo")} />
                    <List.Item title="Outros"               onPress={() => chooseTipo("Outros")}               />
                </List.Accordion>
                <Button
                    title="Criar"
                    style={{ marginVertical: 20 }}
                    onPress={submit}
                />
                {
                    isSending && <ActivityIndicator size="large" />
                }
            </Flex>
        </>
    );
}
