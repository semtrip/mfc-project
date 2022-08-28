import React, {useEffect} from 'react'
import '../assets/sass/modal.scss'
const Modal = ({active, setActive, connect, account}) => {
    useEffect(() => {
        console.log(account)
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ adress: account })
        // };
        // fetch('http://localhost:3002/api/checkAdress/', requestOptions)
        //     .then(response => response.json())
        //     .then(data => console.log(data.message));
    }, [account]);
    return (
        <>
        {
            active &&
            <div className="modal" onClick={()=>{setActive(false)}}>
                <div className="block"  onClick={e => e.stopPropagation()}>
                    <div className="logo"/>
                    <div className="btns">
                        <div className="btn" onClick={connect}>connect</div>
                        <div className="btn coming">Go to forest</div>
                    </div>
                </div>
            </div>
        }
        </>
    );
}
export default Modal;