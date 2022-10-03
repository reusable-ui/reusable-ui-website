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
}
const ConditionalLink = (props: ConditionalLinkProps): React.ReactElement => {
    const {
        caseSensitive,
        end,
        
        packageUrl,
        
        children,
    ...restButtonProps} = props;
    
    const isCurrentPage = useDetermineCurrentPage({ caseSensitive, end, children }) ?? false;
    if (isCurrentPage) return <>{props.children}</>
    return (
        <Button {...restButtonProps} theme={props.theme ?? 'primary'} buttonStyle={props.buttonStyle ?? 'link'}>
            <Link href={packageUrl}>
                {children}
            </Link>
        </Button>
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
            ['', this.basePage, this.packageName]
            .filter((segment) => !!segment)
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
        return 'libs';
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

export class ConfigInfo extends PackageInfo {
    get packageDisplay() : React.ReactNode {
        return <code>{this.packageName} config</code>
    }
}
export class UtilityInfo extends PackageInfo {
    get packageDisplay() : React.ReactNode {
        return <code>{this.packageName} utility</code>
    }
}
export class FeatureInfo extends PackageInfo {
    get packageDisplay() : React.ReactNode {
        return <code>{this.packageName} feature</code>
    }
}
export class CapabilityInfo extends PackageInfo {
    get packageDisplay() : React.ReactNode {
        return <code>{this.packageName} capability</code>
    }
}
export class VariantInfo extends PackageInfo {
    get packageDisplay() : React.ReactNode {
        return <code>{this.packageName} variant</code>
    }
}
export class StateInfo extends PackageInfo {
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
    get basePage() : string {
        return '';
    }
    get packageDisplay() : React.ReactNode {
        return (
            <strong>
                {this._packageDisplay ?? pascalCase(this.packageName)}
            </strong>
        );
    }
    get packageLink() : React.ReactNode {
        return (
            <ConditionalLink packageUrl={this.packageUrl}>
                {this._packageDisplay ?? pascalCase(this.packageName)}
            </ConditionalLink>
        );
    }
}
export class BarrelCoreInfo extends CoreInfo {
    get basePage() : string {
        return '';
    }
    get packageDisplay() : React.ReactNode {
        return (
            <strong>
                {this._packageDisplay ?? pascalCase(this.packageName)}
            </strong>
        );
    }
    get packageLink() : React.ReactNode {
        return (
            <ConditionalLink packageUrl={this.packageUrl}>
                {this._packageDisplay ?? pascalCase(this.packageName)}
            </ConditionalLink>
        );
    }
}
