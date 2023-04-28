import React, {useState} from 'react';
import PQmodel from "./PQmodel/PQmodel";



const PopularQuestions = () => {


    return (
        <div>
            <PQmodel question={'How to use concurrently with npm and json-server'} answer={`"json-server": "json-server --watch db.json --port 3001",
                "dev": "concurrently \"npm run json-server\" \"npm start\""`} />
        </div>
    );
};

export default PopularQuestions;