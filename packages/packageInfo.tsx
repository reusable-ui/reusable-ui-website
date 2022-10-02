import React from 'react';
import { pascalCase } from 'pascal-case'

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
            ['', this.basePage, this.categoryPage, this.packageName]
            .filter((segment) => !!segment)
            .join('/')
        );
    }
    get packageDisplay() : React.ReactNode {
        return <code>{this.packageName}</code>
    }
    get packageShortDisplay() : React.ReactNode {
        return this.shortName ? <code>{this.packageShortName}</code> : this.packageDisplay
    }
    
    // pages:
    get basePage() : string {
        return 'libs';
    }
    get categoryPage() : string {
        return '';
    }
    get segmentPage() : string {
        return this.packageName;
    }
}

export class ConfigInfo extends PackageInfo {
    get categoryPage(): string {
        return 'configs';
    }
    get packageDisplay() : React.ReactNode {
        return <code>{this.packageName} config</code>
    }
}
export class UtilityInfo extends PackageInfo {
    get categoryPage(): string {
        return 'utilities';
    }
    get packageDisplay() : React.ReactNode {
        return <code>{this.packageName} utility</code>
    }
}
export class FeatureInfo extends PackageInfo {
    get categoryPage(): string {
        return 'features';
    }
    get packageDisplay() : React.ReactNode {
        return <code>{this.packageName} feature</code>
    }
}
export class CapabilityInfo extends PackageInfo {
    get categoryPage(): string {
        return 'capabilities';
    }
    get packageDisplay() : React.ReactNode {
        return <code>{this.packageName} capability</code>
    }
}
export class VariantInfo extends PackageInfo {
    get categoryPage(): string {
        return 'variants';
    }
    get packageDisplay() : React.ReactNode {
        return <code>{this.packageName} variant</code>
    }
}
export class StateInfo extends PackageInfo {
    get categoryPage(): string {
        return 'states';
    }
    get packageDisplay() : React.ReactNode {
        return <code>{this.packageName} state</code>
    }
}

export class ComponentInfo extends PackageInfo {
    readonly _packageDisplay : string|undefined;
    constructor(packageName: string, shortName?: string, packageDisplay?: string) {
        super(packageName, shortName);
        this._packageDisplay = packageDisplay;
    }
    
    get basePage() : string {
        return 'components';
    }
    get categoryPage() : string {
        return '';
    }
    get packageDisplay() : React.ReactNode {
        return <code>&lt;{this._packageDisplay ?? pascalCase(this.packageName)}&gt;</code>
    }
}