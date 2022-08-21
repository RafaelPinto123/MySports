import React from 'react';
import useTimeout from '../ser/useTimeout';

function Slider({ imagenes, clasxs }) {
    const [ImagenActual, SetImagenActual] = React.useState(0);
    const Cantidad = imagenes?.length;
    const SiguienteImagen = () => {
        SetImagenActual(ImagenActual === Cantidad - 1 ? 0 : ImagenActual + 1);
    }
    useTimeout(() => SiguienteImagen(), 10000);


    return (
        <>
        {
            imagenes.map((imagen, index) => {
                if(ImagenActual === index){
                    return <img className={clasxs} key={index} src={imagen} alt="imagen" />
                }
            })
        }
        </>
    )
}

export default Slider