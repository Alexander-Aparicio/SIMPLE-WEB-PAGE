import ValidationRules from "../../../helpers/RegexForInputs"

const validations = (form)=>{

    let errores = {}
    const {RegexDni,RegexMobile,RegexName} = ValidationRules()

    if(form.nombre.trim() && !RegexName.test(form.nombre.trim())){
        errores.nombre = "El campo 'Nombre' solo acepta letras y espacios en blanco."
    }

    if(form.celular.trim() && !RegexMobile.test(form.celular.trim())){
        errores.celular = "Este campo solo acepta números"
    }

    if(form.edad && isNaN(form.edad.trim())){
        errores.edadF = "Solo se acepta caracteres númericos"
    }else if(form.edad && !isNaN(form.edad.trim()) && form.estado==="MiHijo" && 17<Number(form.edad.trim()) | Number(form.edad.trim())<7){
        errores.edadMenor = "Las clases para menores es a partir de 6 años hasta 17 años"
    }else if(form.edad && !isNaN(form.edad.trim()) && form.estado==="ParaMi" && Number(form.edad.trim())<18){
        errores.edadMayor = "La edad debe ser mayor a 17 años ya que indicó que las clases son para un adulto"
    }

    if(form.dni.trim() && !RegexDni.test(form.dni.trim())){
        errores.dni = "Este campo solo acepta números y debe contener 8 caracteres."
    }

    return errores

}

const validationsSubmit = (form)=>{

    const horarios = [form.check1, form.check2, form.check3, form.check4]
    const elegidos = horarios.filter((el)=> el === true)
    console.log(horarios)
    console.log(elegidos)

    let errores = {}
    const {RegexDni,RegexMobile,RegexName} = ValidationRules()

    if(!form.nombre.trim()){
        errores.nombre = "El nombre es requerido"
    }else if(!RegexName.test(form.nombre.trim())){
        errores.nombre = "El campo 'Nombre' solo acepta letras y espacios en blanco."
    }

    if(!form.celular.trim()){
        errores.celular = "Este campo es necesario"
    }else if(!RegexMobile.test(form.celular.trim())){
        errores.celular = "Este campo solo acepta números"
    }

    if(!form.edad.trim()){
        errores.edad = "Este campo es necesario"
    }else if(form.edad && isNaN(form.edad.trim())){
        errores.edadF = "Solo se acepta caracteres númericos"
    }else if(!isNaN(form.edad.trim()) && form.estado==="MiHijo" && 17<Number(form.edad.trim()) | Number(form.edad.trim())<7){
        errores.edadMenor = "Las clases para menores es a partir de 6 años hasta 17 años"
    }else if(!isNaN(form.edad.trim()) &&form.estado==="ParaMi" && Number(form.edad.trim())<18 ){
        errores.edadMayor = "La edad debe ser mayor a 17 años ya que indicó que las clases son para un adulto"
    }

    if(!form.dni.trim()){
        errores.dni = "Este campo es necesario"
    }else if(!RegexDni.test(form.dni.trim())){
        errores.dni = "Este campo solo acepta números y debe contener 8 caracteres."
    }

    // if(!form.select.trim()){
    //     errores.select = "Este campo es necesario"
    // }
    // if(form.check1 !== undefined && Number( elegidos.length ) !== Number(form.select)){
    //     errores.check = "Debe marcar una cantidad de horarios igual a la frecuencia semanal"
    // }
    return errores

}


export { validations, validationsSubmit }