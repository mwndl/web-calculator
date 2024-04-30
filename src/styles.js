import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const Top = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;

    h1 {
        font-size: 32px;
        display: flex;  
    }

    p {
        font-size: 14px;
    }
`

export const Content = styled.div`
    background-color: #585858;
    width: 50%;
    min-width: 300px;
    max-width: 400px;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
`

export const Footer = styled.div`
    a {
        font-size: 16px;
        color: inherit; 
        text-decoration: none; 
        transition: text-decoration 0.3s; 
    }

    a:hover {
        text-decoration: underline; 
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3px;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`