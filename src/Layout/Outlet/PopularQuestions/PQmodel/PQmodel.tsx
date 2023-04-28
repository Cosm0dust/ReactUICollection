import React, {useState} from 'react';

interface PQmodelProps{
    question: string;
    answer: string;

}

const PQmodel = ({question, answer}: PQmodelProps) => {
    const [show, setShow] = useState<boolean>(false)

    return (
        <div>
            <h2>{question}</h2>
            <p>{answer}</p>
        </div>
    );
};

export default PQmodel;