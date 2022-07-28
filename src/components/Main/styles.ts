import styled from 'styled-components';

export const Wrapper = styled.main`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    color: #fff;
    background-color: #06092b;

    text-align: center;
    align-items: center;
    justify-content: center;

    padding: 3rem;
`;

export const Logo = styled.img`
    width: 25rem;

    margin-bottom: 2rem;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 400;
    margin-bottom: 1rem;
`;

export const Description = styled.h2`
    font-size: 2rem;
    font-weight: 100;
`;

export const Illustration = styled.img`
    width: min(30rem, 100%);

    margin: 3rem;
`;
