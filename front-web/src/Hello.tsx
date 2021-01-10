import { useEffect } from "react";

type Props = {
    message: String
}

function Hello( { message }: Props ){

    useEffect(() => {
        //chama a API para buscar os componentes
    }, []);

    return (
        <h1>Hello {message}!</h1>    
    )
}

export default Hello;