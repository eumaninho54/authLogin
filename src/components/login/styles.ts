import styled from "styled-components";

import banner from "../../assets/banner.png"

export const LoginStyles = styled.div`

  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 30%;
  height: 100vh;

  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  user-select: none;

  .bg {
    max-width: 300px;
    width: 100%;
    border-radius: 5px;
    background-color: white;
    padding: 30px;
    box-shadow: rgb(204 204 204) 0px 0px 5px;
    transition: all 0.7s ease 0s;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 24px;
    margin-bottom: 40px;
  }

  .socialMidia {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    text-decoration: none;
  }

  .logo {
    width: 15%;
    border: 1px solid;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .name {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    height: 40px;
    width: 70%;
    border: 1px solid;
    font-size: 14px;
  }
`;
