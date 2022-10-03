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
    get packageLink() : React.ReactNode {
        return (
            <ConditionalLink packageUrl={this.packageUrl}>
                {/* a composite <element> : */}{this.packageDisplay}
                {/* a simple    "string"  : */}{/* {this.displayName ?? this.packageName} */}
            </ConditionalLink>
        );
    }
    get packageShortLink() : React.ReactNode {
        return (
            <ConditionalLink packageUrl={this.packageUrl}>
                {/* a composite <element> : */}{/* {this.packageShortDisplay} */}
                {/* a simple    "string"  : */}{this.packageShortName}
            </ConditionalLink>
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
export class LibPackageInfo extends PackageInfo {
    get packageDisplay() : React.ReactNode {
        return (
            <code>
                &lt;{this.displayName ?? pascalCase(this.packageName)}&gt;
            </code>
        );
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
    get packageLink() : React.ReactNode {
        return (
            <ConditionalLink packageUrl={this.packageUrl} currentPageComponent={<strong />}>
                {/* a composite <element> : */}{/* {this.packageDisplay} */}
                {/* a simple    "string"  : */}{this.displayName ?? pascalCase(this.packageName)}
            </ConditionalLink>
        );
    }
}



export class CoreInfo extends LibPackageInfo {
    get basePage() : string {
        return 'core';
    }
}
export class ConfigInfo extends CoreInfo {
    get packageDisplay() : React.ReactNode {
        return <code>{this.packageName} config</code>
    }
}
export class UtilityInfo extends CoreInfo {
    get packageDisplay() : React.ReactNode {
        return <code>{this.packageName} utility</code>
    }
}
export class FeatureInfo extends CoreInfo {
    get packageDisplay() : React.ReactNode {
        return <code>{this.packageName} feature</code>
    }
}
export class CapabilityInfo extends CoreInfo {
    get packageDisplay() : React.ReactNode {
        return <code>{this.packageName} capability</code>
    }
}
export class VariantInfo extends CoreInfo {
    get packageDisplay() : React.ReactNode {
        return <code>{this.packageName} variant</code>
    }
}
export class StateInfo extends CoreInfo {
    get packageDisplay() : React.ReactNode {
        return <code>{this.packageName} state</code>
    }
}



export class ComponentInfo extends LibPackageInfo {
    get basePage() : string {
        return 'components';
    }
}
