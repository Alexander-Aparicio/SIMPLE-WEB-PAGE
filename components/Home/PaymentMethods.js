import Image from "next/image"
import { SectionMediosPago, TitleM, Bcp, Interbank, Yape, ShapeSup, ShapeInf } from "../Globales/PaymentMethods"
import cornerLeft from "../../public/cornerOrange.png"
import cornerRight from "../../public/cornerLeft.png"
import bcp from "../../public/bcp.svg"
import interbank from "../../public/interbank.svg"
import yape from "../../public/yape.svg"

const MediosDePago = ()=>{

    return(

        <SectionMediosPago>

            <TitleM >Medios de pago</TitleM>

            <Bcp 
            cb='N° de cuenta: 194 97343462 0 27'
            ci='CI: 003-898-013263828153-46'
            logo={bcp}
            alt='logo-bcp'
            />

            <Interbank 
            cb='N° de cuenta: 898 3263828153'
            ci='CI: 002-19419734346202791'
            logo={interbank}
            alt='logo-interbank'
            />

            <Yape 
            cb='Número: +51 957 731 940'
            ci='Titular: Joel Moises Larico P.'
            logo={yape}
            alt='logo-yape'
            />

            <ShapeSup className="sup">
                <Image src={cornerLeft} alt='mancha-adorno' layout="intrinsic"/>
            </ShapeSup>
            
            <ShapeInf className="inf">
                <Image src={cornerRight} alt='mancha-adorno' layout="intrinsic" />
            </ShapeInf>
            
        </SectionMediosPago>

    )
}

export default MediosDePago