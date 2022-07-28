import React from 'react';

import { Wrapper, Logo, Title, Description, Illustration } from './styles';

const Main = () => (
    <Wrapper>
        <Logo
            src="/img/logo.svg"
            alt="Imagem de um átomo e React Avançado escrito ao lado"
        />
        <Title>React Avançado</Title>
        <Description>
            A simple project starter to work with TypeScript, React, NextJS e
            Styled Components
        </Description>
        <Illustration
            src="/img/hero-illustration.svg"
            alt="Imagem de uma pessoa de costas em frente ao computador"
        />
    </Wrapper>
);

export default Main;
