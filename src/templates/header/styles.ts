import styled from "styled-components";

export const HeaderStyle = styled.div`
    background-color: #081421;
    margin: 0;
    height: 60px;
    display: flex;
    justify-content: center ;
    align-items: center;

    .content{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .title {
        margin: 0;
        color: #33A3FF;
        font-size: 30px;
        margin: 0px 10px;
    }
    
    .linkHeader{
        text-decoration: none;
        color: #5BACEF;
        margin: 0px 10px;
    }
`