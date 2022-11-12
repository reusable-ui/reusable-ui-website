import React from 'react';
import Link from 'next/link'
import { pascalCase } from 'pascal-case'
import { DetermineCurrentPageProps, useDetermineCurrentPage } from '@reusable-ui/core'
import { ButtonProps, Button } from '@reusable-ui/components'
import { IntLink } from '../components/IntLink';



interface ConditionalLinkProps
    extends
        ButtonProps,
        DetermineCurrentPageProps,
        Pick<PackageInfo, 'packageUrl'>
{
    currentPageComponent ?: React.ReactElement
    buttonComponent      ?: React.ReactElement<ButtonProps>
}
const ConditionalLink = (props: ConditionalLinkProps): React.ReactElement => {
    const {
        caseSensitive,
        end,
        
        packageUrl,
        
        currentPageComponent = <></>,
        buttonComponent      = <Button /> as React.ReactElement<ButtonProps>,
        
        children,
    ...restButtonProps} = props;
    
    const linkWithChildren = (
        <Link href={packageUrl}>
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



export interface SeeDocumentationProps {
    component        : React.ReactElement
    startsUppercase ?: boolean
    endsDot         ?: boolean
}
export const SeeDocumentation = ({component, startsUppercase = false, endsDot = false}: SeeDocumentationProps) => {
    return (
        <>
            {startsUppercase ? 'See ' : 'see '}
            the documentation of {component} here{endsDot ? '.' : ''}
        </>
    )
}



export class PackageInfo {
    readonly packageName : string
    readonly shortName   : string|undefined
    readonly displayName : string|undefined
    
    constructor(packageName: string, shortName?: string, displayName?: string) {
        this.packageName = packageName
        this.shortName   = shortName
        this.displayName = displayName
    }
    
    // props:
    get packageFullName() : string {
        return `@reusable-ui/${this.packageName}`;
    }
    get packageShortName() : string {
        return this.shortName ?? this.packageName;
    }
    
    get packageDisplay() : React.ReactNode {
        return (
            <strong>
                {this.displayName ?? this.packageName}
            </strong>
        );
    }
    get packageShortDisplay() : React.ReactNode {
        return (
            <strong>
                {this.packageShortName}
            </strong>
        );
    }
    
    get packageUrl() : string {
        return (
            [
                '',
                
                ...[this.basePage, this.packageName]
                .filter((segment) => !!segment)
            ]
            .join('/')
        );
    }
    get packageLink() : React.ReactElement<ConditionalLinkProps> {
        return (
            <ConditionalLink packageUrl={this.packageUrl}>
                {/* a composite <element> : */}{this.packageDisplay}
                {/* a simple    "string"  : */}{/* {this.displayName ?? this.packageName} */}
            </ConditionalLink>
        );
    }
    get packageShortLink() : React.ReactElement<ConditionalLinkProps> {
        return (
            <ConditionalLink packageUrl={this.packageUrl}>
                {/* a composite <element> : */}{/* {this.packageShortDisplay} */}
                {/* a simple    "string"  : */}{this.packageShortName}
            </ConditionalLink>
        );
    }
    get packageSeeDocumentation() : React.ReactElement<SeeDocumentationProps> {
        return (
            <SeeDocumentation
                component={<>{this.packageDisplay}</>}
            />
        );
    }
    get packageSeeDocumentationLink() {
        return (
            <IntLink to={this.packageUrl}>
                {this.packageSeeDocumentation}
            </IntLink>
        );
    }
    get packageSeeDocumentationParagraph() {
        return (
            <p>
                <IntLink to={this.packageUrl}>
                    {React.cloneElement(this.packageSeeDocumentation, { startsUppercase: true, endsDot: true })}
                </IntLink>
            </p>
        );
    }
    
    // pages:
    get basePage() : string {
        return '';
    }
    get segmentPage() : string {
        return this.packageName;
    }
}



export class BarrelPackageInfo extends PackageInfo {
    get packageDisplay() : React.ReactNode {
        return (
            <strong>
                {this.displayName ?? pascalCase(this.packageName)}
            </strong>
        );
    }
    get packageLink() : React.ReactElement<ConditionalLinkProps> {
        return (
            <ConditionalLink packageUrl={this.packageUrl} currentPageComponent={<strong />}>
                {/* a composite <element> : */}{/* {this.packageDisplay} */}
                {/* a simple    "string"  : */}{this.displayName ?? pascalCase(this.packageName)}
            </ConditionalLink>
        );
    }
}



export class CoreInfo extends PackageInfo {
    get basePage() : string {
        return 'core';
    }
    
    get packagePrefix(): string {
        throw Error('not implemented');
    }
    get packageNameWithPrefix() : string {
        return `${this.packageName} ${this.packagePrefix}`;
    }
    get packageDisplay() : React.ReactNode {
        return <code>{this.packageNameWithPrefix}</code>
    }
    get packageSeeDocumentation() : React.ReactElement<SeeDocumentationProps> {
        return (
            <SeeDocumentation
                component={<>{`'${this.packageNameWithPrefix}'`}</>}
            />
        );
    }
}
export class ConfigInfo extends CoreInfo {
    get packagePrefix(): string {
        return 'config';
    }
}
export class UtilityInfo extends CoreInfo {
    get packagePrefix(): string {
        return 'utility';
    }
}
export class FeatureInfo extends CoreInfo {
    get packagePrefix(): string {
        return 'feature';
    }
}
export class CapabilityInfo extends CoreInfo {
    get packagePrefix(): string {
        return 'capability';
    }
}
export class VariantInfo extends CoreInfo {
    get packagePrefix(): string {
        return 'variant';
    }
}
export class StateInfo extends CoreInfo {
    get packagePrefix(): string {
        return 'state';
    }
}



export class ComponentInfo extends PackageInfo {
    get basePage() : string {
        return 'components';
    }
    
    get packageDisplay() : React.ReactNode {
        return (
            <code>
                {this.componentTag}
            </code>
        );
    }
    
    get componentName() : string {
        return this.displayName ?? pascalCase(this.packageName);
    }
    get componentTag() : string {
        return `<${this.componentName}>`;
    }
    get packageSeeDocumentation() : React.ReactElement<SeeDocumentationProps> {
        return (
            <SeeDocumentation
                component={<>{this.componentTag}</>}
            />
        );
    }
}
