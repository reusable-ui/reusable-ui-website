import React from 'react';
import Link from 'next/link'
import { pascalCase } from 'pascal-case'
import { DetermineCurrentPageProps, useDetermineCurrentPage } from '@reusable-ui/core'
import { ButtonProps, Button } from '@reusable-ui/components'



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



export class PackageInfo {
    readonly packageName : string
    readonly shortName   : string|undefined
    
    constructor(packageName: string, shortName?: string) {
        this.packageName = packageName;
        this.shortName   = shortName;
    }
    
    // props:
    get packageFullName() : string {
        return `@reusable-ui/${this.packageName}`;
    }
    get packageShortName() : string {
        return this.shortName ?? this.packageName;
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
    get packageDisplay() : React.ReactNode {
        return (
            <code>
                {this.packageName}
            </code>
        );
    }
    get packageLink() : React.ReactNode {
        return (
            <ConditionalLink packageUrl={this.packageUrl}>
                {this.packageDisplay}
            </ConditionalLink>
        );
    }
    get packageShortLink() : React.ReactNode {
        return (
            <ConditionalLink packageUrl={this.packageUrl}>
                {this.packageShortName}
            </ConditionalLink>
        );
    }
    get packageShortDisplay() : React.ReactNode {
        return this.shortName ? <code>{this.packageShortName}</code> : this.packageLink
    }
    
    // pages:
    get basePage() : string {
        return '';
    }
    get segmentPage() : string {
        return this.packageName;
    }
}



export class CoreInfo extends PackageInfo {
    readonly _packageDisplay : string|undefined;
    constructor(packageName: string, shortName?: string, packageLink?: string) {
        super(packageName, shortName);
        this._packageDisplay = packageLink;
    }
    
    get basePage() : string {
        return 'core';
    }
    get packageDisplay() : React.ReactNode {
        return (
            <code>
                &lt;{this._packageDisplay ?? pascalCase(this.packageName)}&gt;
            </code>
        );
    }
}

export class PackageCoreInfo extends PackageInfo {
    get basePage() : string {
        return 'core';
    }
}

export class ConfigInfo extends PackageCoreInfo {
    get packageDisplay() : React.ReactNode {
        return <code>{this.packageName} config</code>
    }
}
export class UtilityInfo extends PackageCoreInfo {
    get packageDisplay() : React.ReactNode {
        return <code>{this.packageName} utility</code>
    }
}
export class FeatureInfo extends PackageCoreInfo {
    get packageDisplay() : React.ReactNode {
        return <code>{this.packageName} feature</code>
    }
}
export class CapabilityInfo extends PackageCoreInfo {
    get packageDisplay() : React.ReactNode {
        return <code>{this.packageName} capability</code>
    }
}
export class VariantInfo extends PackageCoreInfo {
    get packageDisplay() : React.ReactNode {
        return <code>{this.packageName} variant</code>
    }
}
export class StateInfo extends PackageCoreInfo {
    get packageDisplay() : React.ReactNode {
        return <code>{this.packageName} state</code>
    }
}



export class ComponentInfo extends PackageInfo {
    readonly _packageDisplay : string|undefined;
    constructor(packageName: string, shortName?: string, packageLink?: string) {
        super(packageName, shortName);
        this._packageDisplay = packageLink;
    }
    
    get basePage() : string {
        return 'components';
    }
    get packageDisplay() : React.ReactNode {
        return (
            <code>
                &lt;{this._packageDisplay ?? pascalCase(this.packageName)}&gt;
            </code>
        );
    }
}



export class BarrelComponentInfo extends ComponentInfo {
    get packageDisplay() : React.ReactNode {
        return (
            <strong>
                {this._packageDisplay ?? pascalCase(this.packageName)}
            </strong>
        );
    }
    get packageLink() : React.ReactNode {
        return (
            <ConditionalLink packageUrl={this.packageUrl} currentPageComponent={<strong />}>
                {this._packageDisplay ?? pascalCase(this.packageName)}
            </ConditionalLink>
        );
    }
}
export class BarrelCoreInfo extends CoreInfo {
    get packageDisplay() : React.ReactNode {
        return (
            <strong>
                {this._packageDisplay ?? pascalCase(this.packageName)}
            </strong>
        );
    }
    get packageLink() : React.ReactNode {
        return (
            <ConditionalLink packageUrl={this.packageUrl} currentPageComponent={<strong />}>
                {this._packageDisplay ?? pascalCase(this.packageName)}
            </ConditionalLink>
        );
    }
}
