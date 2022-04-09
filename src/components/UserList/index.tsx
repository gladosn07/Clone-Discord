import React, { useState } from 'react'

import * as S from './styles';

type Props = {
    name: string;
    isBot?: boolean;
}

const UserRow: React.FC<Props> = ({ name, isBot }) => {
    return (
        <S.User>
            <S.Avatar className={isBot ? 'bot' : ''} />

            <strong>{name}</strong>

            {isBot && <span>Bot</span>}
        </S.User>
    )
}

const UserList: React.FC = () => {
    const [isBot, setIsBot] = useState(true)

    return (
        <S.Container>
            <S.Role>Disponivel - 1</S.Role>
            <UserRow name='Finamore_07' />

            <S.Role>Offline - 18</S.Role>
            <UserRow name='Carlos' isBot={isBot} />

            <S.Role>Disponivel - 18</S.Role>
            <UserRow name='Carlos' isBot={isBot} />

            <S.Role>Offline - 18</S.Role>
            <UserRow name='Fulano' />

            <S.Role>Offline - 18</S.Role>
            <UserRow name='Fulano' isBot={isBot} />

            <S.Role>Offline - 18</S.Role>
            <UserRow name='Fulano' />

            <S.Role>Disponivel - 18</S.Role>
            <UserRow name='Fulano' isBot={isBot} />

            <S.Role>Offline - 18</S.Role>
            <UserRow name='Fulano' isBot={isBot} />

            <S.Role>Disponivel - 18</S.Role>
            <UserRow name='Fulano' />

            <S.Role>Offline - 18</S.Role>
            <UserRow name='Fulano' isBot={isBot} />

            <S.Role>Offline - 18</S.Role>
            <UserRow name='Fulano' isBot={isBot} />

            <S.Role>Disponivel - 18</S.Role>
            <UserRow name='Fulano' />

            <S.Role>Offline - 18</S.Role>
            <UserRow name='Fulano' isBot={isBot} />

            <S.Role>Offline - 18</S.Role>
            <UserRow name='Fulano' isBot={isBot} />

        </S.Container>
    )
}

export default UserList