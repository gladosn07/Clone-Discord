import React from 'react'
import ChannellButton from '../ChannelButton';

import { Container, Category, AddCategory } from './styles';

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais de Texto</span>

                <AddCategory />
            </Category>

            <ChannellButton channelName='Chat-Livre' selected />
            <ChannellButton channelName='Trabalho' />
            <ChannellButton channelName='Lolzinho' />
            <ChannellButton channelName='CsGo' />
            <ChannellButton channelName='Valorant' />
        </Container>
    )
}

export default ChannelList