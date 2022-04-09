import React, { useRef, useEffect } from 'react'
import ChannelMessage, { Mention } from '../ChannelMessage'
import { Container, MessageList, Input, InputWrapper, InputIcon } from './styles'

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

    useEffect(() => {
        const div = messagesRef.current

        if (div) {
            div.scrollTop = div.scrollHeight
        }
    }, [])

    return (
        <Container>
            <MessageList ref={messagesRef}>
                {Array.from(Array(20).keys()).map((n) => (
                    <ChannelMessage
                        key={n}
                        author='Finamore07'
                        date='09/04/2020'
                        content='Como vocees estao?'
                    />
                ))}

                <ChannelMessage
                    author='Finamore07'
                    date='09/04/2020'
                    content={
                        <>
                            <Mention>@Finamore07</Mention>, Precisando de algo estou aqui!
                        </>
                    }
                    isBot
                    hasMention
                />
            </MessageList>

            <InputWrapper>
                <Input
                    placeholder='Conversar em #Chat-Livre'
                    type='text' />
                <InputIcon />
            </InputWrapper>
        </Container>
    )
}

export default ChannelData