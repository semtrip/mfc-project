import '../assets/sass/mainBlock.scss'
const MainBlock = ({setActive}) => {
    return (
        <div className="mainBlock">
            <div className="header">
                <div className="container">
                    <div className="header--content">
                        <div className="social">
                            <a href='https://mfsproject.xyz/' target={'_blank'} rel="noreferrer" className="item logo"/>
                            <a  target={'_blank'} rel="noreferrer" className="item discord coming"/>
                            <a href='https://twitter.com/knightsroseseth?s=21&t=h4mZou_4kGnz0oj6rwJTEw' rel="noreferrer" target={'_blank'} className="item twiter"/>
                            <a target={'_blank'} rel="noreferrer" className="item opensea coming"/>
                        </div>
                        <div className="btn"onClick={()=>{setActive(true)}}>connect wallet</div>
                    </div>
                </div>
            </div>
            <div className="content">
                <ul>
                    <li>Welcome to WEB3 Kingdom</li> 
                    <li>5005 Supply</li>
                    <li>0.03 ETH</li>
                    <li>Exclusive sale for KnightList only </li>
                    <li>7 September</li>
                </ul>
                <p>Knight and roses is the most mysterious NFT<br/>
                project, no one knows what happens when the<br/>
                castle doors close. No roadmap, I lied, you'll have<br/>
                to find it yourself. Register a wallet and get the<br/>
                opportunity to pick up one of 100<br/>
                NFTs for free.</p>
                <ul>
                    <li>CCO. The knights forgot the Smart contract.</li> 
                    <li>Look for the benefit yourself, the knights<br/>are too lazy)))</li>
                </ul>
            </div>
        </div>
    );
}

export default MainBlock;