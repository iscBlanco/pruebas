import React from 'react'

function FormComponent (props){
    return(
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={props.item.completed}
                    onChange={()=>props.handleChange(props.item.id)}
                />
                {props.item.id} {props.item.activity}
            </label>
        </div>
    )
}
export default FormComponent