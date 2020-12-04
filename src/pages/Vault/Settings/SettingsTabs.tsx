import React from 'react';
import styled from 'styled-components';

import { green500, gray200, gray300, gray500, gray700 } from '../../../utils/colors';

import { SetStateString } from '../../../types';

interface Props {
  currentTab: string
  setCurrentTab: SetStateString
}

const SettingsTabs = ({ currentTab, setCurrentTab }: Props) => {
  return (
    <TabsContainer>
      <TabItem active={currentTab === 'general'} onClick={() => setCurrentTab('general')}>
        General
      </TabItem>
      <TabItem active={currentTab === 'addresses'} onClick={() => setCurrentTab('addresses')} >
        Addresses
      </TabItem>
      <TabItem active={currentTab === 'utxos'} onClick={() => setCurrentTab('utxos')}>
        UTXOs
      </TabItem>
      <TabItem active={currentTab === 'export'} onClick={() => setCurrentTab('export')}>
        Export
      </TabItem>
    </TabsContainer>
  )
}

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${gray200};
`;

const TabItem = styled.button<{ active: boolean }>`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  border-bottom: 2px solid ${p => p.active ? green500 : 'none'};
  margin-left: 2rem;
  cursor: pointer;
  color: ${p => p.active ? green500 : gray500};
  font-weight: 600;
  text-decoration: none;

  &:nth-child(1) {
    margin-left: 0;
  }

  &:hover {
    border-bottom: 2px solid ${p => p.active ? 'none' : gray300};
    color: ${p => p.active ? 'inherit' : gray700};
  }
`;

export default SettingsTabs;