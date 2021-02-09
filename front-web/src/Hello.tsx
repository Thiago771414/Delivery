//typescript .tsx

import { useEffect } from "react";

type Props = {
    message: string;
}
    
//componente sempre retorna html ou outros componentes
    //componente Hello   
    function Hello({message}: Props) {

        // chamada para API para buscar os produtos
        useEffect(() => {
            
            //console.log('componente iniciou!');
        }, []);

        return (
            <h1>Hello {message} !</h1>
        )
    }

    //exportar o componente
    export default Hello;