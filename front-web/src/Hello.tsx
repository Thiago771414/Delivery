//typescript .tsx

import { useEffect } from "react";

//Quando o React vê um elemento representando um componente definido pelo usuário, 
//ele passa atributos JSX e componentes filhos para esse componente como um único objeto. 
//Nós chamamos esse objeto de “props”.
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