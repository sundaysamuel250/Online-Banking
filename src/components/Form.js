import React, { useState } from "react";
import bankData from "../api/data";

const Form = () => {
  const [bankName, setBankName] = useState("");
  const [destinationAccount, setDestinationAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [bankAccountName, setBankAccountName] = useState("");
  const [error, setError] = useState(false);
  const fetchBankDetails = () => {
    var paystackSecret = "sk_test_e23f24b6c24cef6702def9d2505c8a846ffefd16";

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${paystackSecret}`);
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(
      `https://api.paystack.co/bank/resolve?account_number=${destinationAccount}&bank_code=${bankName}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status === true) {
          // display result div
          if (destinationAccount.length < 10) {
            setError(true);
          }
          setBankAccountName(result.data.account_name);
        } else {
          // display not found
          return;
        }
      })
      .catch((error) => console.log("error", error));
  };
  const handleDestinationAccount = (e) => {
    setDestinationAccount(e.target.value);

    // bank_account_number CODE
    // is empty return false
    if (destinationAccount === null) {
      return false;
    }

    // Return true if the bank_account_number
    // matched the ReGex

    if (destinationAccount.length < 10) {
      return false;
    }

    if (bankName === "") return false;

    fetchBankDetails();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      bankName,
      destinationAccount,
      amount,
    };
    setBankName("");
    setDestinationAccount("");
    setAmount("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Bank Name</label>
          <select
            onChange={(e) => setBankName(e.target.value)}
            value={bankName}
            id="name"
          >
            <option className="select-bank" value="">
              Select Bank
            </option>
            {bankData.map((bank, index) => (
              <option key={index} value={bank.code}>
                {bank.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="name">Destination Account Number</label>

          <input
            type="text"
            placeholder="Enter destination account"
            required
            onChange={handleDestinationAccount}
            value={destinationAccount}
            id="name"
          />
          <div>
              { bankAccountName }
          </div>
        </div>

        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="amount"
            placeholder="Enter Amount"
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            id="amount"
          />
        </div>

        <div className="send-btn">
          <button type="submit">continue</button>
        </div>
      </form>
    </div>
  );
};
export default Form;
