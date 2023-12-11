import React, { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import Base from './screens/Base';


export default function App() {
  return (
    <RecoilRoot>
      <Base/>
    </RecoilRoot>
  );
}