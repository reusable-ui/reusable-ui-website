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
    
    // pages:
    get basePage() : string {
        return '';
    }
    get segmentPage() : string {
        return this._propertyName;
    }
}