import React from 'react';
import styled from 'styled-components';
import { Safe } from '@styled-icons/crypto';
import { Wallet } from '@styled-icons/entypo';
import { useHistory } from "react-router-dom";

import { StyledIcon } from '../../components';
import { InnerWrapper, HeaderWrapper, CancelButton, PageTitleSubtext } from './styles';
import { GridArea, Header, HeaderLeft, HeaderRight, PageTitle } from '../../components/layout';
import { blue500, darkGray, white, gray, offWhite } from '../../utils/colors';

const SelectAccountScreen = ({ setSetupOption, setStep, config }) => {
  const history = useHistory();

  return (
    <InnerWrapper>
      <HeaderWrapper>
        <HeaderModified>
          <HeaderLeft>
            <PageTitleSubtext>New Account</PageTitleSubtext>
            <PageTitle>Select account type</PageTitle>
          </HeaderLeft>
          <HeaderRight>
            {config.isEmpty && <CancelButton onClick={() => { history.push('login') }}>Return to Main Menu</CancelButton>}
          </HeaderRight>
        </HeaderModified>
      </HeaderWrapper>
      <SignupOptionMenu>
        <SignupOptionItem
          onClick={() => {
            setSetupOption(2);
            setStep(1);
          }}>
          <StyledIcon as={Wallet} size={48} style={{ marginBottom: '0.5em' }} />
          <SignupOptionMainText>Wallet</SignupOptionMainText>
          <SignupOptionSubtext>Create a new Bitcoin wallet</SignupOptionSubtext>
        </SignupOptionItem>

        <SignupOptionItem style={{ borderTop: `8px solid ${blue500}` }} onClick={() => { setSetupOption(1); setStep(1); }}>
          <StyledIcon as={Safe} size={48} style={{ marginBottom: '0.5em' }} />
          <SignupOptionMainText>Vault</SignupOptionMainText>
          <SignupOptionSubtext>Use multiple hardware wallets to create a vault for securing large amounts of Bitcoin</SignupOptionSubtext>
        </SignupOptionItem>
      </SignupOptionMenu>
    </InnerWrapper>
  )
}

const HeaderModified = styled(Header)`
  margin-bottom: 0;
`;

const SignupOptionMenu = styled(GridArea)`
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  max-width: 46.875em;
  width: 100%;
  padding: 1.5em 0;
`;

const SignupOptionMainText = styled.div`
  font-size: 1em;
`;

const SignupOptionSubtext = styled.div`
  font-size: .5em;
  margin-top: 0.5em;
  color: ${darkGray};
  padding: 0 3em;
`;

const SignupOptionItem = styled.div`
  background: ${white};
  border: 1px solid ${gray};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 0;
  border-radius: 4px;
  min-height: 200px;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  text-align: center;

  &:hover {
                background: ${offWhite};
    cursor: pointer;
  }
`;

export default SelectAccountScreen