import React, { useState } from 'react';
import { openai } from '../../configurations/openai.config';

function ImageGeneration(props) {
    const [prompt, setPrompt] = useState("");
    const [image, setImage] = useState([]);

    const [loading, setLoading] = useState(false);



    const generateImage = async () => {
        setLoading(true)
        const response = await openai.createImage({
            prompt: prompt,
            n: 2,
            size: "1024x1024",
        });
        setImage(response.data.data);
        setLoading(false)
        console.log(response.data.data);

    }
    return (
        <div className='gen-image-container'>
            <h1>Generate an Image using AI</h1>
            <div className="-img-form"><input type="text" className='gen-image-input' onChange={(e) => setPrompt(e.target.value)} placeholder="Type something to generate image" />
                <button onClick={generateImage}>{loading ? "Loading..." : "Generate Image"}</button></div>

            {image.length > 0 &&
                <div style={{
                    display: "flex",
                    gap: "20px",

                }}>
                    {image.map((i) => (
                        <div key={i.url} style={{
                            background: "white",
                            padding: "0.75rem",
                            borderRadius: ".5rem"
                        }}><img className='result-image' src={i.url} alt={prompt} /></div>
                    ))}
                </div>
            }
        </div>
    );
}

export default ImageGeneration;