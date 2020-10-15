import React from 'react'
import { useParams, useHistory } from 'react-router-dom';

export default function Post() {

    const { id } = useParams()
    const history = useHistory()

    return (
        <div>
            <h4>Post ke - {id}</h4>
            <p>
                ini adalah artikel ke {id}
                </p>     

                <button onClick={() => history.push("/")}>
                    Back
                    </button>   
        </div>
    )
}
