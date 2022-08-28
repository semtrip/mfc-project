import '../assets/sass/teamBlock.scss'
const TeamBlock = () => {
    return (
        <div className="teamBlock">
            <div className="container">
                <h1 className="title">TEAM AND PROJECT</h1>
                <h1 className="title title-mobile">TEAM<br/>AND PROJECT</h1>
                <div className="content">
                    <div className="peds">
                        <div className="block">
                            <div className="ico one"/>
                            <div className="text">
                                <span className="name mg13">Wondcher</span>
                                <div className="line"/>
                                <span className="role mg13">CEO Lord Studio, indie.<br/>
                                team for games.</span>
                            </div>
                        </div>
                        <div className="block">
                            <div className="ico two"/>
                            <div className="text">
                                <span className="name">alex</span>
                                <div className="line"/>
                                <span className="role">professional<br/>
                                programmer.</span>
                            </div>
                        </div>
                        <div className="block">
                            <div className="ico three"/>
                            <div className="text">
                                <span className="name">DEUS</span>
                                <div className="line"/>
                                <span className="role">professional<br/>
                                advertising manager</span>
                            </div>
                        </div>
                        <div className="block">
                            <div className="ico four"/>
                            <div className="text">
                                <span className="name">Vladimir</span>
                                <div className="line"/>
                                <span className="role">NFT artist</span>
                            </div>
                        </div>
                        <a href='https://mfsproject.xyz/' target={'_blank'} rel="noreferrer" className="footer-mobile">
                            <div className="logo"/>
                            <p>Made in MFC project<br/>
                            All rights reserved</p>
                        </a>
                    </div>  
                    <div className="lists">
                        <div className="list">
                            <div className="head">
                                <div className="ped"/>
                                <div className="arrow"/>
                                <div className="sfer"/>
                            </div>
                            <p className='small'>Staking You send a knight on a crusade, and that’s how staking happen! He can<br/>
                             bring you various bonuses, the largest of which is NFT souls, which can be used on<br/>
                             the marketplace or upgrade a character in the GEN2 collection with them, from the<br/> 
                             journey, he can also bring whitelists, free spots from partner projects, free ethereum,<br/> 
                             subscriptions to various services and utilities.</p>
                             <ul>
                                <li className='mg-30'>He can bring:</li>
                                <li className='grey'>Soulsnft - used in the marketplace/upgrade a character in the cen2</li>
                                <li className='green'>Whitelists, free sports from partner projects</li>
                                <li className='blue'>Eth</li>
                                <li className='purple'>Subscription to partner</li>
                                <li className='red'>Tools and utilities</li>
                             </ul>
                        </div>
                        <div className="list noped">
                            <p><b>DAO</b> for people with 120 IQ<br/>
                            The project contains a system of hidden riddles,<br/>
                            riddles are wired in every action of the project, like a dog<br/>
                            whistle, not many people will be able to see them and go<br/>
                            to the end, in total <b>50</b> smartest people will be recruited<br/>
                            who will be the first to succeed, they will receive <b>NFT</b><br/>
                            <b>absolutely free</b> of charge and jointly will manage the<br/>
                            DAO whose capital will be replenish <b>50%</b> of the project<br/>
                            royalties, while the rest of the holders can observe the<br/>
                            actions of this DAO and receive <b>20%</b> of its income<br/>
                            between all holders.</p>
                            <p className='red'>1/1 PFP The project will contain 5x 1/1 PFPs with<br/>
                            special properties, they will also change at night! As well<br/>
                            as many 1/1 with our partners</p>
                        </div>
                    </div>
                </div>
                <a href='https://mfsproject.xyz/' target={'_blank'} rel="noreferrer" className="footer">
                    <div className="logo"/>
                    <p>Made in MFC project<br/>
                    All rights reserved</p>
                </a>
            </div>
        </div>
    );
}

export default TeamBlock;