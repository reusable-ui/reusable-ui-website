import React, {  } from 'react'
import { PreviewProps, PropertySection } from '../../components/sections/PropertySection'
import * as properties from '../propertyList'
import { TheComponentLink, TheNestedComponentDisplay, useComponentInfo } from '../../packages/componentContext'



export const ItemsLimitProperty = ({children: preview}: PreviewProps) => {
    const {nestedComponent} = useComponentInfo();
    
    return (
        <PropertySection property={properties.itemsLimit} preview={preview}>
            <p>
                Specifies a positive number to <strong>limit</strong> the number of displayed <TheNestedComponentDisplay />s of the <TheComponentLink />.
            </p>
            <p>
                The <TheComponentLink /> should have <strong>exactly one</strong> of <code>{`<${[nestedComponent].flat()[0]?.componentName} active={true}>`}</code> in order to the <TheComponentLink /> display the correct position of limited displayed list.
            </p>
        </PropertySection>
    );
}

export const PrevItemsProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.prevItems} preview={preview}>
            <p>
                Specifies the <code>children</code> to be inserted <strong>before</strong> the <em>limited displayed list</em> appears.
            </p>
            <p>
                This property is useful to place a <code>{`<NavPrevItem>`}</code> component or <code>{`<YourCustomButton>`}</code> component.
            </p>
        </PropertySection>
    );
}
export const NextItemsProperty = ({children: preview}: PreviewProps) => {
    return (
        <PropertySection property={properties.nextItems} preview={preview}>
            <p>
                Specifies the <code>children</code> to be inserted <strong>after</strong> the <em>limited displayed list</em> appears.
            </p>
            <p>
                This property is useful to place a <code>{`<NavNextItem>`}</code> component or <code>{`<YourCustomButton>`}</code> component.
            </p>
        </PropertySection>
    );
}
