import React from 'react';
import { Link } from 'react-router-dom';
import { arrayItems } from '../AIOptions';

function OptionSelection({ selectOption, setShowTranslation }) {
    function openTranslate(item) {
        setShowTranslation(true);
        item.option ? selectOption(item.option) : selectOption({})
    }

    return (
        <>
            <h1 className='opt-select-heading'>AI App</h1>
            <div className='opt-grid-main'>
                {arrayItems.map((item) => {
                    return (<div className='opt-grid-child' key={item.name} onClick={() => openTranslate(item)} >
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </div>)
                })}
                <Link to='/image-generation' style={{
                    color: "white"
                }}>
                    <div className="opt-grid-child image-gen">
                        <h3>Image Generation</h3>
                        <p>Generate images with AI</p>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default OptionSelection;