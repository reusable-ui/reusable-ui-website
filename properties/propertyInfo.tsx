import React from 'react';
import Link from 'next/link'
import { DetermineCurrentPageProps, useDetermineCurrentPage } from '@reusable-ui/core'
import { ButtonProps, Button } from '@reusable-ui/components'



interface ConditionalLinkProps
    extends
        ButtonProps,
        DetermineCurrentPageProps,
        Pick<PropertyInfo, 'propertyUrl'>
{
    currentPageComponent ?: React.ReactElement
    buttonComponent      ?: React.ReactElement<ButtonProps>
}
const ConditionalLink = (props: ConditionalLinkProps): React.ReactElement => {
    const {
        caseSensitive,
        end,
        
        propertyUrl,
        
        currentPageComponent = <></>,
        buttonComponent      = <Button /> as React.ReactElement<ButtonProps>,
        
        children,
    ...restButtonProps} = props;
    
    const linkWithChildren = (
        <Link href={propertyUrl}>
            {children}
        </Link>
    );
    const isCurrentPage = useDetermineCurrentPage({ caseSensitive, end, children: linkWithChildren }) ?? false;
    if (isCurrentPage) return React.cloneElement(currentPageComponent, undefined, props.children);
    return React.cloneElement(buttonComponent,
        // props:
        {
            ...restButtonProps,
            
            theme       : buttonComponent.props.theme       ?? props.theme       ?? 'primary',
            buttonStyle : buttonComponent.props.buttonStyle ?? props.buttonStyle ?? 'link',
        },
        
        // children:
        linkWithChildren,
    );
}



export class PropertyInfo {
    readonly _propertyName : string
    readonly _defaultValue : any|undefined
    
    constructor(propertyName: string, defaultValue : any|undefined = undefined) {
        this._propertyName = propertyName
        this._defaultValue = defaultValue
    }
    
    // props:
    get propertyName() : string {
        return this._propertyName;
    }
    get propertyDisplay() : React.ReactNode {
        return (
            <code>
                {this.propertyName}
            </code>
        );
    }
    
    get defaultValue() : string {
        return this._defaultValue;
    }
    get defaultValueDisplay() : React.ReactNode {
        const defaultValue = this._defaultValue;
        if (defaultValue === undefined) return undefined;
        return (
            <code>
                {defaultValue}
            </code>
        );
    }
    get defaultValueParagraph() : React.ReactNode {
        const defaultValueDisplay = this.defaultValueDisplay;
        if (defaultValueDisplay === undefined) return undefined;
        return (
            <p>
                This is the <strong>default</strong> value if the {this.propertyDisplay} property is not specified.
            </p>
        );
    }
    
    get propertyUrl() : string {
        return (
            [
                '',
                
                ...[this.basePage, this.propertyName]
                .filter((segment) => !!segment)
            ]
            .join('/')
        );
    }
    get propertyLink() : React.ReactNode {
        return (
            <ConditionalLink propertyUrl={this.propertyUrl}>
                {this.propertyDisplay}
                property
            </ConditionalLink>
        );
    }
    get propertyShortLink() : React.ReactNode {
        return (
            <ConditionalLink propertyUrl={this.propertyUrl}>
                {this.propertyDisplay}
            </ConditionalLink>
        );
    }
    
    // pages:
    get basePage() : string {
        return '';
    }
    get segmentPage() : string {
        return this._propertyName;
    }
}