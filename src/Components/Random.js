import React, {useState, useEffect} from 'react';
import './random.css';

const Random = () => {
    const [quotes, setQuotes] = useState("");

    const getQuote = () => {
        fetch('http://quotes.stormconsultancy.co.uk/quotes.json')
        // fetch('https://type.fit/api/quotes')
        .then((res) => res.json())
        .then((data) => {
            let random = Math.floor(Math.random()*data.length);
            setQuotes(data[random]);
        });
    };

    useEffect(() => {
        getQuote()
    }, [])

    return (
        <div className="App">
            <div className="quote">
                <p>"{quotes.quote} ✌"</p>  
                <p>Author:{quotes.author}</p>
                <div className="btnContainer">
               <button type="button" className="btn btn-dark" onClick={getQuote}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Random