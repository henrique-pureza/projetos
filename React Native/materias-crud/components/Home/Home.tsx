import        React                         from "react";
import      { useState, useEffect }         from "react";
import type { HomeProps }                   from "../../App";
import        axios                         from "axios";
import        CommunityIcon                 from "@expo/vector-icons/MaterialCommunityIcons";
import        MaterialIcon                  from "@expo/vector-icons/MaterialIcons";
import      { ScrollView }                  from "react-native";
import      { CSS }                         from "./../Styles/css";
import      { Divider, Flex, Button }       from "@react-native-material/core";
import      { FAB, Text, Dialog }           from "@react-native-material/core";
import      { ActivityIndicator, AppBar }   from "@react-native-material/core";
import      { DialogHeader, DialogContent } from "@react-native-material/core";
import      { DialogActions }               from "@react-native-material/core";
import      { useIsFocused }                from "@react-navigation/native";

export default function Home({ navigation }: HomeProps): JSX.Element {
    const   isFocused                                 = useIsFocused                                ();
    const [ result,            setResult            ] = useState<{materia: string, tipo: string}[]> ();
    const [ isResultAvailable, setIsResultAvailable ] = useState<boolean>                           (false);
    const [ isEditing,         setIsEditing         ] = useState<boolean>                           (false);
    const [ isDeleting,        setIsDeleting        ] = useState<boolean>                           (false);
    const [ materiaToEdit,     setMateriaToEdit     ] = useState<string>                            ();
    const [ materiaToDelete,   setMateriaToDelete   ] = useState<string>                            ();

    async function getMateria(): Promise<void> {
        const response = await axios.get("https://api-python-mxqq.onrender.com/");
        if (response.status === 200) {
            setIsResultAvailable(true);
            setResult(response.data);
        }
    }

    useEffect(() => {
        if (isFocused) {
            setIsResultAvailable(false);
            getMateria();
        }
    }, [isFocused]);

    return (
        <>
            <AppBar title="Matérias CRUD" />
            {
                isResultAvailable
                    ?
                        <>
                                <ScrollView style={CSS.scrollView}>
                                {
                                    result && result.map((row, index) => (
                                        <Flex pt={20} key={index}>
                                            <Flex>
                                                <Text>{row.materia}</Text>
                                                <Text variant="caption" style={{ marginBottom: 10 }}>{row.tipo}</Text>
                                                <Flex direction="row" style={{ width: "100%" }}>
                                                    <Button
                                                        leading={(props) => <MaterialIcon name="edit" {...props} />}
                                                        title="Editar"
                                                        style={[CSS.actionButton, { marginRight: 5 }]}
                                                    />
                                                    <Button
                                                        leading={(props) => <MaterialIcon name="delete-outline" {...props} />}
                                                        title="Deletar"
                                                        style={CSS.actionButton}
                                                        color="error"
                                                    />
                                                </Flex>
                                            </Flex>
                                            <Divider style={CSS.divider} />
                                        </Flex>
                                    ))
                                }
                            </ScrollView>
                            <FAB
                                icon={(props) => <CommunityIcon name="plus" {...props} />}
                                color="primary"
                                style={CSS.addButton}
                                onPress={() => navigation.navigate("New")}
                            />
                        </>
                    :
                    <Flex fill justify="center" items="center">
                        <ActivityIndicator size="large" />
                    </Flex>
            }

            <Dialog
                visible={isEditing}
                onDismiss={() => setIsEditing(false)}
            ></Dialog>
        </>
    );
}
