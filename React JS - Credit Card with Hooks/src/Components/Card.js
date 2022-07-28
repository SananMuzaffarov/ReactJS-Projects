import React, {useState} from "react";

const CreditCard = () => {

    const [info, setInfo] = useState({
        cardNumber: '',
        fullName: '',
        month: '',
        year: ''
    });

    const handleChange = (e) => {
        setInfo({
            ...info, [e.target.name]: e.target.value})
    }
    return(
        <>
        <form>
                <input
                    type="text"
                    name="cardNumber"
                    placeholder="Kart Numarası"
                    maxlength="16"
                    onChange={handleChange} />
                <input
                    type="text"
                    name="fullName"
                    placeholder="Ad Soyad"
                    onChange={handleChange} />
                <input
                    type="text"
                    name="month"
                    placeholder="Ay"
                    maxlength="2"
                    onChange={handleChange} />
                <input
                    type="text"
                    name="year"
                    placeholder="Il"
                    maxlength="4"
                    onChange={handleChange} />
        </form>
        
        <div className="cardCredit">
            <div className="elements">
                <h1>{info.fullName}</h1>
                <p>{info.cardNumber}</p>
                <span>{info.year}/{info.month}</span>
            </div>
        </div>
            </>
    );
}
export default CreditCard;