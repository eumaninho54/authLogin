import styled from "styled-components";

export const HeaderStyle = styled.div`
    background-color: #0F054C;
    margin: 0;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center ;
    align-items: center;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;

    .content{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .title {
        margin: 0;
        color: #4CB2CD;
        font-size: 30px;
        margin: 0px 10px;
        user-select: none;
    }
    
    .linkHeader{
        text-decoration: none;
        color: #4CB2CD;
        margin: 0px 10px;
    }
`