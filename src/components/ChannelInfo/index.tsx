import React from 'react'

import { Container, HashtagIcon, Title, Description, Separator } from './styles';

const ChannelInfo: React.FC = () => {
    return (
        <Container>
            <HashtagIcon />

            <Title>Chat-Livre</Title>

            <Separator />

            <Description>Descrição do canal</Description>
        </Container>
    )
}

export default ChannelInfo