import { useState } from 'react'
import Button from './Button'

// props
// maxValue
// minValue

const Counter = (props) => {

    const [ valorNumerico, setValorNumerico ] = useState(props.minValue || 0)

    const sumar = () => {
        if(valorNumerico === props.maxValue) return
        setValorNumerico(valorNumerico + 1)
    }

    const restar = () => {
        if(valorNumerico === props.minValue) return
        setValorNumerico(valorNumerico - 1)
    }

    return (
        <>
            <Button callback={restar}>
                -
            </Button>
            { valorNumerico }
            <Button callback={sumar}>
                +
            </Button>
        </>
    )
    
}

export default Counter