import React, {useEffect, useState} from 'react'
import '../assets/sass/modal.scss'
import contract from './conract/NFT1.json';
import { ethers } from 'ethers';

const contractAddress = "0xE5dcFa4c7a2764fecC68454E406869A41cBFA0db";
const abi = contract.abi;

const Modal = ({active, setActive, connect, account}) => {
    const [wallet, setWallet] = useState('');
    const [isWallet, setIsWallet] = useState(null);
    const [price, setPrice] = useState(null)
    const [currentAccount, setCurrentAccount] = useState(null);
    const [proof, setProof] = useState(null)
    
    const [quantity, setQuantity] = useState(1)
    const [statusContract, setStatusContarct] = useState(null)
    useEffect(() => {
        checkWalletIsConnected();
        if(currentAccount) {
            checkStatusContract()
            createProof()
        }
    }, [currentAccount])

    const checkWalletIsConnected = async () => {
        const { ethereum } = window;
    
        if (!ethereum) {
          alert("Make sure you have Metamask installed!");
          return;
        } else {
          console.log("Wallet exists! We're ready to go!")
        }
    
        const accounts = await ethereum.request({ method: 'eth_accounts' });
    
        if (accounts.length !== 0) {
          const account = accounts[0];
          setCurrentAccount(account);
        } else {
          console.log("No authorized account found");
        }
    }

    const connectWalletHandler = async () => {
        const { ethereum } = window;

        if (!ethereum) {
            alert("Please install Metamask!");
        }

        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            setCurrentAccount(accounts[0]);
        } catch (err) {
            console.log(err)
        }
    }
    const createProof = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ adress: currentAccount })
        };
        fetch('https://mfsproject.site:3002/api/createProof/', requestOptions)
            .then(response => response.json())
            .then(data => {
                setProof(data.proof)
        });
    }
    const checkStatusContract = async () => {
        const { ethereum } = window;
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const nftContract = new ethers.Contract(contractAddress, abi, signer);
            await nftContract.saleState()
                .then(data => {
                    setStatusContarct(data)
                })
            await nftContract.MINT_PRICE()
                .then(data => setPrice(Number(data)/(10**18)))
        }
    }
    const mintNftHandler = async () => {
        try {
            const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const nftContract = new ethers.Contract(contractAddress, abi, signer);
                let nftTxn
                if(statusContract == 2) {
                    nftTxn = await nftContract.mint(1, proof,{ value: ethers.utils.parseEther(price.toString()) });
                }
                if(statusContract == 3) {
                    //TODO: DOUBLE CHECK CONDITIONS
                    const availableForMint = await nftContract.getAvailableForMintByCurrentStage(currentAccount);
                    if(quantity>0&&quantity<=availableForMint) {
                        console.log(`price 1 ${price} price 2 ${price*quantity}`)
                        nftTxn = await nftContract.mint(quantity, ["0x0000000000000000000000000000000000000000000000000000000000000000"], {value: ethers.utils.parseEther((price*quantity).toString())});
                    }
                }
                await nftTxn.wait();    
            } else {
                console.log("Ethereum object does not exist");
            }
        } catch (err) {
            console.log(err);
        }
    }

    const checkWallet = () => {
        if(wallet.length > 0) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ adress: wallet })
            };
            fetch('https://mfsproject.site:3002/api/checkAdress/', requestOptions)
                .then(response => response.json())
                .then(data => {
                    if(data.isWallet) {
                        setIsWallet('success')
                    } else if (data.message) {
                        setIsWallet(false)
                    } else {
                        setIsWallet('error')
                    }
                });
        }
    }
    return (
        <>
        {
            active &&
            <div className="modal" onClick={()=>{setActive(false)}}>
                <div className="block"  onClick={e => e.stopPropagation()}>
                    <div className="logo"/>
                    <div className="btns">
                    {currentAccount ? 
                    <div className="btn mint" onClick={mintNftHandler}>Mint</div>
                    : 
                    <div className="btn" onClick={connectWalletHandler}>connect</div>
                    }
                    </div>
                    {
                        (currentAccount &&  statusContract == 3) &&
                        <div className="check">
                            <div className="input">
                                <input type="number" placeholder='Insert the desired amount of NFT (max 10)' value={quantity} min={1} max={10} onChange={e => setQuantity(e.target.value)}/>
                            </div>
                        </div>
                    }
                    {/* <div className="check">
                        <div className="input">
                            <input type="text" placeholder='your wallet'maxLength={60} onChange={e => (setWallet(e.target.value))}/>
                            <div className={!isWallet ? 'mark': isWallet == 'success' ? 'mark success' : isWallet == 'error' ? "mark error" : null}/>
                        </div>
                        {
                            !isWallet &&
                            <div className="check-btn" onClick={()=>{checkWallet()}}>Check wallet</div>
                        }
                        {
                            isWallet == 'error' ?
                            <div className="check-btn sign" onClick={()=>{checkWallet()}}>Sign up</div>
                            :null
                        }
                        
                    </div> */}

                </div>
            </div>
        }
        </>
    );
}
export default Modal;