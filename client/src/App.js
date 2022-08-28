import React, {useState, useEffect} from 'react'
import './assets/sass/global.scss';
import useMetaMask from './hooks/metamask';


import MainBlock from './components/MainBlock';
import Modal from './components/Modal';
import TeamBlock from './components/TeamBlock';

function App() {
  const [active, setActive] = useState(false);
  const { connect, disconnect, isActive, account } = useMetaMask()
  useEffect(() => {
    if(active) {
      document.body.classList.add('show-modal')
  } else {
      document.body.classList.remove('show-modal')
  }
  }, [active]);
  return (
    <div className='page'>
      <MainBlock setActive={setActive}/>
      <TeamBlock/>
      <Modal active={active} setActive={setActive} connect={connect} disconnect={disconnect} isActive={isActive} account={account}/>
    </div>
  );
}

export default App;

