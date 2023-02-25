import Select from 'react-select'
import {useEffect, useState} from "react";

export const UserSelect = ({ user }) =>{
    const { hobbies } = user || {}
    const [options, setOptions] =useState()

    useEffect(()=>{
        if (hobbies){
            let x =  hobbies.map((one, i) => {
                    const option = {};

                    option.label = one;
                    option.value = i;
                    return option
                }
            )
            setOptions([...x])
        }


    }, [hobbies])

    return options ? (
        <>
            <Select
                options= {options}
            >
            </Select>
        </>

    ): <p> Hobbies Loading</p>

}