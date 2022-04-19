import styled from "styled-components";
import banner from "../../assets/banner.png";

export const HomeStyles = styled.div`
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 30%;
  height: 100vh;
  display: flex;
  justify-content: left;
  align-items: center;

  .content {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 5%;
    margin-bottom: 70px;
  }

  h1 {
    margin: 0;
    font-family: "Noto Sans Mono", monospace;
    font-size: 45px;
    margin-bottom: 15px;
    text-shadow: 2px 2px 6px #00000079;
    user-select: none;
  }

  .btSignUp {
    border-radius: 50px;
    color: white;
    border-color: #48c4de;
    padding: 3px 25px;
  }

  @media only screen and (max-width: 800px) {
    justify-content: center;

    .content {
      margin-left: 0;
    }

    h1{
      font-size: 32px;
      text-align: center;
    }
  }
`;
