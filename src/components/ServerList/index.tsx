import React from 'react'
import ServerButton from '../ServerButton'
import { Container, Separator, } from './styles'

const ServerList: React.FC = () => {
    return (
        <Container>
            <ServerButton isHome hasNotifications mentions={51} />

            <Separator />

            <ServerButton />
            <ServerButton mentions={4} />
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton />
            <ServerButton mentions={12} />
            <ServerButton />
            <ServerButton />

        </Container>
    )
}

export default ServerList