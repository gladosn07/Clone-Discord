import React, { useState } from 'react'
import * as S from './styles';

const UserInfo: React.FC = () => {
    const [isOnline, setIsOnline] = useState(true);

    const hendleIsOnline = () => {
        setIsOnline(!isOnline);
    }

    return (
        <S.Container>
            <S.Profile>
                <S.Avatar onClick={hendleIsOnline} isOnline={isOnline} />

                <S.UserData>
                    <strong>Finamore</strong>
                    <span>#7777</span>
                </S.UserData>
            </S.Profile>

            <S.Icons>
                <S.MicIcon />
                <S.HeadphoneIcon />
                <S.SettingsIcon />
            </S.Icons>
        </S.Container>
    )
}

export default UserInfo