import Image from "next/image"
import { SectionMediosPago, TitleM, Bcp, Interbank, Yape, ShapeSup, ShapeInf } from "./PaymentMStyle"
import cornerLeft from "../../public/cornerOrange.png"
import cornerRight from "../../public/cornerLeft.png"
import bcp from "../../public/logos/bcp.svg"
import interbank from "../../public/logos/interbank.svg"
import yape from "../../public/logos/yape.svg"

const MediosDePago = ()=>{

    return(

        <SectionMediosPago>

            <TitleM >Medios de pago</TitleM>

            <Bcp 
            cb='N° de cuenta: 191 95923027044'
            ci='CI: 002-191195923027044-55'
            logo={bcp}
            alt='logo-bcp'
            />

            <Interbank 
            cb='N° de cuenta: 0523 092277738'
            ci='CI: 003-05201309227773883'
            logo={interbank}
            alt='logo-interbank'
            />

            <Yape 
            cb='Número: +51 940 767 038'
            ci='Titular: Alexander Aparicio Meza.'
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