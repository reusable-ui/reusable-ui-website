import React, { useContext } from 'react';
import { IntLink } from '../components/IntLink';
import { ComponentInfo } from './packageInfo';
import { generic } from './packageList';



export interface IComponentContext {
    component         : ComponentInfo
    nestedComponent  ?: ComponentInfo|ComponentInfo[]
    nestedProperties ?: boolean
    baseComponents   ?: ComponentInfo|ComponentInfo[]
}
export const ComponentContext = React.createContext<IComponentContext>(/*defaultValue :*/{
    component        : generic,
    nestedComponent  : undefined,
    nestedProperties : true,
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
        nestedProperties = true,
    ...restComponentContext} = props;
    
    return (
        <ComponentContext.Provider value={{nestedProperties, ...restComponentContext}}>
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



export const TheComponentPackage = () : React.ReactElement => {
    const {component} = useComponentInfo();
    return <code>{component.packageFullName}</code>;
}

export const TheComponentTag = () : React.ReactElement => {
    const {component} = useComponentInfo();
    return <>{component.componentTag}</>;
}
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
    if (!nestedComponent) return <></>;
    if (Array.isArray(nestedComponent)) return <CommaSeparated components={
        nestedComponent.map((nestedComponent) => nestedComponent.packageDisplay)
    } />;
    return <>{nestedComponent.packageDisplay}</>;
}
export const TheNestedComponentLink = () : React.ReactElement => {
    const {nestedComponent} = useComponentInfo();
    if (!nestedComponent) return <></>;
    if (Array.isArray(nestedComponent)) return <CommaSeparated components={
        nestedComponent.map((nestedComponent) => nestedComponent.packageLink)
    } />;
    return <>{nestedComponent.packageLink}</>;
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
export const SeeBaseComponentLinks = () : React.ReactElement|null => {
    const {baseComponents} = useComponentInfo();
    if (!baseComponents) return null;
    return (
        <p>
            You can <CommaSeparated components={[baseComponents].flat().map((baseComponent) => baseComponent.packageSeeDocumentationLink)} />.
        </p>
    );
}



