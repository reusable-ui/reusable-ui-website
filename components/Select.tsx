import React from 'react'

import { Label, Radio } from '@reusable-ui/components';

import { ResponsiveGroup, ResponsiveGroupProps } from "./ResponsiveGroup";



export interface SelectProps<TValue = any> extends ResponsiveGroupProps {
    label    ?: string
    
    value    ?: TValue
    setValue ?: React.Dispatch<TValue>
    
    options   : TValue[]
    getName  ?: (value: TValue) => string|null
}
const Select = <TValue extends any = any>(props: SelectProps<TValue>) => {
    const {
        label,
        
        value,
        setValue,
        
        options,
        getName,
    ...restResponsiveGroupProps} = props;
    
    return (
        <>
            {label && <Label>{label}</Label>}
            
            <ResponsiveGroup
                {...restResponsiveGroupProps}
                
                theme={props.theme ?? 'primary'}
            >
                {options.map((option, index) =>
                    <Radio
                        key={index}
                        
                        mild={true}
                        nude={false}
                        
                        name={label}
                        
                        active={Object.is(value, option)}
                        onActiveChange={(event) => {
                            if (event.active) setValue?.(option);
                        }}
                    >
                        {getName?.(option) ?? ((option === undefined) ? 'unset' : `${option}`)}
                    </Radio>
                )}
            </ResponsiveGroup>
        </>
    );
}
export {
    Select,
    Select as default,
}
