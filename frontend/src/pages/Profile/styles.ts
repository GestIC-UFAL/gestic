import styled from '@emotion/styled';

import {
  Box as BoxUI,
  Flex as FlexUI,
  Container as ContainerUI,
  Image as ImageUI,
  Button as ButtonUI,
} from '@chakra-ui/react';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: aquamarine;
`;

export const Box = styled(BoxUI)`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 700px;
  min-height: 50%;
  max-width: 85%;
  background: #ffffff;
  padding: 0px;
  margin-top: -40px;
  border-radius: 14px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
`;

export const Flex = styled(FlexUI)`
  width: 90%;
  height: 440px;
  align-items: center;
  /* background: red; */
`;

export const ColorBlock = styled(FlexUI)`
  width: 5%;
  height: 70px;
  background: #008080;
`;

export const Pa = styled(BoxUI)`
  width: 95%;
  height: 70px;
  background: white;
  font-family: Roboto;
  font-style: normal;
  font-weight: 200;
  font-size: 40px;
  line-height: 28px;
  padding: 1ch;
  color: #000000;
`;
export const Subheader = styled(FlexUI)`
  width: 100%;
  height: 70px;

  background: blue;
  margin-top: -50px;
  margin-bottom: 20px;
`;

export const BoxDiv1 = styled(FlexUI)`
  width: 50%;
  height: 340px;
  margin: auto;
  align-items: center;
  flex-direction: column;
`;

export const Boxinside = styled(FlexUI)`
  width: 100%;
  height: 240px;
  margin: auto;
  margin-top: 30px;
  /* background: yellow; */
  align-items: left;
  flex-direction: column;
`;

export const Image = styled(ImageUI)`
  max-width: 35%;
  background: blue;
  border-radius: 100%;
  margin-top: 20px;
  background: #9decf9;
  align-items: center;
`;

export const Title = styled(BoxUI)`
  width: auto;
  height: auto;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  margin-top: 30px;
  align-content: center;
  font-size: 30px;
  line-height: 21px;
  color: #000000;
`;

export const User = styled(BoxUI)`
  width: auto;
  height: auto;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  margin-top: 30px;
  align-content: center;
  font-size: 40px;
  line-height: 21px;
  color: #000000;
`;

export const Info = styled(BoxUI)`
  width: auto;
  margin-top: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 14px;

  color: #000000;
`;

export const Info1 = styled(BoxUI)`
  width: auto;
  margin-top: 20px;
  margin-bottom: 25px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 14px;
  color: #000000;
`;

export const BoxDiv2 = styled(ContainerUI)`
  width: 40%;
  height: 340px;
  margin: auto;
  background: #fbfbfb;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.15);
  border-radius: 14px;
`;

export const Button = styled(ButtonUI)`
  width: 30%;
  height: 30px;
  margin: auto;
  background: #008080;
  border: 1px solid rgba(162, 162, 162, 0.5);
  box-sizing: border-box;
  border-radius: 26px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 14px;

  color: #ffffff;
`;
