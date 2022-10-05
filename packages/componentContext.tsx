import React, { useContext } from 'react';
import { ComponentInfo } from './packageInfo';
import { generic } from './packageList';



export interface IComponentContext {
    component        : ComponentInfo
    nestedComponent ?: ComponentInfo
    baseComponents  ?: ComponentInfo|ComponentInfo[]
}
export const ComponentContext = React.createContext<IComponentContext>(/*defaultValue :*/{
    component        : generic,
    nestedComponent  : undefined,
    baseComponents   : undefined,
});



export const useComponentInfo = () => {
    return useContext(ComponentContext);
}



export interface ComponentContextProviderProps extends IComponentContext {
    children ?: React.ReactNode
}
export const ComponentContextProvider = (props: ComponentContextProviderProps) => {
    const {
        children,
    ...restComponentContext} = props;
    
    return (
        <ComponentContext.Provider value={restComponentContext}>
            {children}
        </ComponentContext.Provider>
    );
}



export interface CommaSeparatedProps {
    components: React.ReactNode
}
export const CommaSeparated = ({components}: CommaSeparatedProps) => (<>{
    [components].flat().map((component, index, {length}) => (
        <React.Fragment key={index}>
            {component}
            { (index < (length - 1)) ? ((index === (length - 2)) ? ' and ' : ', ') : undefined }
        </React.Fragment>
    ))
}</>);



export const TheComponentDisplay = () : React.ReactElement => {
    const {component} = useComponentInfo();
    return <>{component.packageDisplay}</>;
}
export const TheComponentLink = () : React.ReactElement => {
    const {component} = useComponentInfo();
    return <>{component.packageLink}</>;
}

export const TheNestedComponentDisplay = () : React.ReactElement => {
    const {nestedComponent} = useComponentInfo();
    return <>{nestedComponent?.packageDisplay}</>;
}
export const TheNestedComponentLink = () : React.ReactElement => {
    const {nestedComponent} = useComponentInfo();
    return <>{nestedComponent?.packageLink}</>;
}

export const TheBaseComponentDisplay = () : React.ReactElement|null => {
    const {baseComponents} = useComponentInfo();
    if (!baseComponents) return null;
    return <CommaSeparated components={[baseComponents].flat().map((baseComponent) => baseComponent.packageDisplay)} />
}
export const TheBaseComponentLinks = () : React.ReactElement|null => {
    const {baseComponents} = useComponentInfo();
    if (!baseComponents) return null;
    return <CommaSeparated components={[baseComponents].flat().map((baseComponent) => baseComponent.packageLink)} />
}