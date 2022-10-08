import { ThemeName } from '@reusable-ui/core';

import { Select, SelectProps } from './Select';



const themes          : (ThemeName|undefined)[] = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];
const themesWithUnset : (ThemeName|undefined)[] = [undefined, ...themes];
const getNoName = () => null;



export interface SelectThemeProps extends Omit<SelectProps<ThemeName|undefined>, 'options'> {
    addUnset ?: boolean
    showName ?: boolean
}
const SelectTheme = (props: SelectThemeProps) => {
    const {
        label    = 'theme',
        
        addUnset = false,
        showName = true,
    ...restSelectProps} = props;
    
    return (
        <Select<ThemeName|undefined>
            {...restSelectProps}
            
            label={label}
            
            options={addUnset ? themesWithUnset : themes}
            getName={showName ? undefined : getNoName}
        />
    );
};
export {
    SelectTheme,
    SelectTheme as default,
}
