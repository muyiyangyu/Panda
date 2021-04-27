import React from "react";
import styled from "styled-components/native";

import { Text, View } from "react-native";

interface HeaderTitleProps {
  title: string;
}

const Layout = styled(View)`
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
`;

const Title = styled(Text)`
  //font-family: bold;
  //font-size: large;
  color: black;
`;

const HeaderTitle: React.FC<HeaderTitleProps> = ({ title }) => {
  return (
    <Layout>
      <Title>{title}</Title>
    </Layout>
  );
};

export default HeaderTitle;
