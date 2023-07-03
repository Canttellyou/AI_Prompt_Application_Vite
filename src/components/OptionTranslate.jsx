import React, { useState } from 'react'
import { arrayItems } from '../AIOptions';
import { openai } from '../configurations/openai.config';
import OptionSelection from './OptionSelection';
import Translation from './Translation';
import detectLang from 'lang-detector';


export default function OptionTranslate() {
    const [option, setOption] = useState({});
    const [translateInput, setTranslateInput] = useState('');
    const [translateResult, setTranslateResult] = useState('');
    const [showTranslation, setShowTranslation] = useState(false);
    const [loading, setLoading] = useState(false);
    const selectOption = (option) => {
        setOption(option)
    }
    const translateText = async () => {
        setLoading(true);
        let object = { ...option, prompt: translateInput };
        const response = await openai.createCompletion(object);
        console.log(response)
        setTranslateResult(response.data.choices[0].text);
        console.log(detectLang(translateResult).toLowerCase());
        setLoading(false)
    }
    return (
        <div>{!showTranslation && option && (<OptionSelection arrayItems={arrayItems} selectOption={selectOption} setShowTranslation={setShowTranslation} />)}
            {showTranslation && (<Translation loading={loading} translateText={translateText} setShowTranslation={setShowTranslation} setTranslateInput={setTranslateInput} translateResult={translateResult} />)}
        </div>
    )
}
