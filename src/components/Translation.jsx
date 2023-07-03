import React, { useState } from 'react';
import detectLang from 'lang-detector';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Highlight from 'react-highlight'

function Translation({ translateText, setTranslateInput, translateResult, setShowTranslation, loading }) {
    const [question, setQuestion] = useState([]);
    function useTargetValue(e) {
        setTranslateInput(e.target.value);
        setQuestion(e.target.value);
    }


    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: 'center',


        }}>
            <button style={{
                margin: '1.5rem 0'
            }} className='translate-button' onClick={() => setShowTranslation(false)}>Close</button>
            {translateResult && translateResult.length > 0 &&
                (<div style={{
                    borderRadius: "10px",
                }}>
                    {question.length !== 0 && <div style={{
                        background: "#c7c7c7",
                        color: "black",
                        padding: "1px 1.5rem",
                        borderRadius: "5px",
                        width: "80vw"
                    }}> <h2>Prompt:</h2> <p>{question}</p> </div>}

                    <div style={{
                        background: "#159172",
                        borderRadius: "5px",
                        padding: "1px 1.5rem",
                        marginBottom: "2rem",
                        width: "80vw"
                    }}><h2>Answer:</h2>

                        <h3>{translateResult.length > 0 ? <Highlight innerHTML={detectLang(translateResult).toLowerCase() === "unknown" ? true : false} language={detectLang(translateResult)}>
                            {translateResult}
                        </Highlight> : "Unavailable. Try again."}</h3></div>



                </div>)}
            <textarea className='translate-text-area' onChange={(e) => useTargetValue(e)}></textarea>
            <button style={{
                marginBottom: "1rem"
            }} className='translate-button' onClick={translateText} >{loading ? "Loading..." : "Do the thing"}</button>



        </div>
    );
}

export default Translation;