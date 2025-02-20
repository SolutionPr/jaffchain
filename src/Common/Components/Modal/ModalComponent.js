

import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { approveAbi, contractAddress, walletAddress, wallet_address } from '../../Constant/common';
import { readContract, writeContract } from '@wagmi/core'; // Import readContract from '@wagmi/core'
import { useDispatch, useSelector } from 'react-redux';
import { buyToken } from '../../../Utilities/Redux/Slices/Transactions/Transactions';
import { useAccount, useDisconnect, useEnsName, useWaitForTransactionReceipt, useWriteContract } from 'wagmi';
import Web3 from 'web3';
import { toast } from 'react-toastify';
import Loader from '../Loader/Loader';

const ModalComponent = ({ showModal, handleCloseModal }) => {
    const { data: hash, error, writeContract } = useWriteContract()
    const { address } = useAccount();
    const [usdtContract, setUsdtContract] = useState(null);
    const [formData, setFormData] = useState({
        fieldValue: ''
    });
    const { user_id, wallet_address } = useSelector(state => state?.auth?.user?.body || {});
    const dispatch = useDispatch();



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };



    const buyNftHandler = (e) => {
        e.preventDefault();
        console.log("UsdtRedeemAddress", contractAddress);

        const to = '0xbddaFCFc420e12c7c31f8AF78c569cdB1bffA1ee';
        // let amount = formData?.fieldValue * 10 * 18;
        let amount = 1000000000000000000;

        console.log(amount, 'amountamountamount')

        writeContract({
            address: contractAddress,
            abi: approveAbi,
            functionName: 'transfer',
            args: [to, amount], // Provide 'to' and 'amount' as arguments
        });
        // setFormData("")
    }

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
        useWaitForTransactionReceipt({
            hash,
        })

    console.log(isConfirming, "isConfirming");

    useEffect(() => {
        if (error) {
            console.log(error, 'errorerrorerror')
            toast.error(error)

        }
        if (isConfirmed) {
            toast.success("Transaction successful")
            setFormData({ fieldValue: '' });
            // let amount = formData?.fieldValue * 10 * 18;
            let amount = formData?.fieldValue * 10 * 18;
            dispatch(buyToken({ user_id, wallet_address, amount }));
            handleCloseModal();
            // setFormData({});
        }
    }, [isConfirmed, error])

    const isFieldEmpty = formData.fieldValue.trim() === '';
    const isButtonDisabled = isFieldEmpty
    return (
        <>
            {isConfirming && <Loader />}

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header className='modalheader' closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={buyNftHandler}>
                        <Form.Group controlId="formField">
                            <Form.Control
                                type="text"
                                name="fieldValue"
                                placeholder="Enter Your Amount"
                                value={formData?.fieldValue}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <div className="d-flex justify-content-end">
                            <button className={isButtonDisabled ? 'disabledButton' : 'butonsubmit'} type="submit" style={{ marginTop: "10px" }} disabled={isFieldEmpty}>
                                Submit
                            </button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalComponent;

