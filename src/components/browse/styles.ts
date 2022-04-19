import styled from "styled-components";
import banner from "../../assets/banner.png"

export const BrowseStyles = styled.div`
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 30%;
  height: 100vh;

  width: 100vw;
  color: black;
  user-select: none;

  .bg {
    position: absolute;
    left: -50%;
    right: -50%;
    margin: 30vh auto;
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

  .imageProfile{
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 250px;
    width: 100%;
  }

  .title {
    font-size: 18px;
  }

  @media only screen and (max-width: 390px) {
    .content{
      h1 {
        font-size: 14px;
      }

      span{
        font-size: 12px;
      }
    }

    .bg{
      width: 240px;
      padding: 10px;
    }
  }
`;
