import { Alert } from 'react-native'
import styled from 'styled-components/native'

import { theme } from './theme'

export default function App() {
    const handleDelete = () => {
        Alert.alert('Delete?', 'It will be deleteeeed', [
            {
                text: 'Yes',
                onPress: () => console.log('DELETED'),
                style: 'cancel',
            },
            {
                text: 'Cancel',
                onPress: () => console.log('NOT DELETED'),
                style: 'cancel',
            },
        ])
    }

    return (
        <Container>
            <TextContainer>
                <Label>Coffee</Label>
                <Button activeOpacity={0.8} onPress={handleDelete}>
                    <ButtonText>Delete</ButtonText>
                </Button>
            </TextContainer>
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.white};
`
const TextContainer = styled.View`
    border-bottom-color: ${theme.colors.cerulean};
    border-bottom-width: 1px;
    padding: 16px 8px;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Label = styled.Text`
    font-size: 18px;
    font-weight: 200;
`

const Button = styled.TouchableOpacity`
    background-color: ${theme.colors.black};
    padding: 8px;
    border-radius: 6px;
`

const ButtonText = styled.Text`
    color: ${theme.colors.white};
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1;
`
