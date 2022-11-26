import { PropertyInfo } from "./propertyInfo";



// semantics:
export const tag                 = new PropertyInfo('tag')
export const role                = new PropertyInfo('role')
export const aria                = new PropertyInfo('aria-*')

export const semanticTag         = new PropertyInfo('semanticTag')
export const semanticRole        = new PropertyInfo('semanticRole')



// global:
export const elmRef              = new PropertyInfo('elmRef')
export const outerRef            = new PropertyInfo('outerRef')

export const id                  = new PropertyInfo('id')

export const style               = new PropertyInfo('style')



// classes:
export const mainClass           = new PropertyInfo('mainClass')
export const variantClasses      = new PropertyInfo('variantClasses')
export const stateClasses        = new PropertyInfo('stateClasses')
export const classes             = new PropertyInfo('classes')
export const className           = new PropertyInfo('className')



// variants:
export const orientation         = new PropertyInfo('orientation')
export const size                = new PropertyInfo('size')
export const theme               = new PropertyInfo('theme')
export const gradient            = new PropertyInfo('gradient')
export const outlined            = new PropertyInfo('outlined')
export const mild                = new PropertyInfo('mild')
export const nude                = new PropertyInfo('nude')

export const labelStyle          = new PropertyInfo('labelStyle')
export const buttonStyle         = new PropertyInfo('buttonStyle')
export const checkStyle          = new PropertyInfo('checkStyle')
export const listStyle           = new PropertyInfo('listStyle')
export const cardStyle           = new PropertyInfo('cardStyle')
export const badgeStyle          = new PropertyInfo('badgeStyle')



// states:
export const excited             = new PropertyInfo('excited')

export const expanded            = new PropertyInfo('expanded')
export const onExpandedChange    = new PropertyInfo('onExpandedChange')

export const enabled             = new PropertyInfo('enabled')
export const inheritEnabled      = new PropertyInfo('inheritEnabled')

export const readOnly            = new PropertyInfo('readOnly')
export const inheritReadOnly     = new PropertyInfo('inheritReadOnly')

export const active              = new PropertyInfo('active')
export const inheritActive       = new PropertyInfo('inheritActive')
export const defaultActive       = new PropertyInfo('defaultActive')
export const onActiveChange      = new PropertyInfo('onActiveChange')

export const focused             = new PropertyInfo('focused')

export const arrived             = new PropertyInfo('arrived')

export const pressed             = new PropertyInfo('pressed')

export const enableValidation    = new PropertyInfo('enableValidation')
export const isValid             = new PropertyInfo('isValid')
export const inheritValidation   = new PropertyInfo('inheritValidation')

export const checkable           = new PropertyInfo('checkable')



// appearances:
export const icon                = new PropertyInfo('icon')
export const iconPosition        = new PropertyInfo('iconPosition')



// behaviors:
export const actionCtrl          = new PropertyInfo('actionCtrl')
export const lazy                = new PropertyInfo('lazy')
export const expandDelay         = new PropertyInfo('expandDelay')
export const collapseDelay       = new PropertyInfo('collapseDelay')



// actions:
export const href                = new PropertyInfo('href')
export const onClick             = new PropertyInfo('onClick')



// navigations:
export const caseSensitive       = new PropertyInfo('caseSensitive')
export const end                 = new PropertyInfo('end')



// floatable:
export const floatingOn         = new PropertyInfo('floatingOn')
export const floatingPlacement  = new PropertyInfo('floatingPlacement')
export const floatingMiddleware = new PropertyInfo('floatingMiddleware')
export const floatingStrategy   = new PropertyInfo('floatingStrategy')
export const floatingAutoFlip   = new PropertyInfo('floatingAutoFlip')
export const floatingAutoShift  = new PropertyInfo('floatingAutoShift')
export const floatingOffset     = new PropertyInfo('floatingOffset')
export const floatingShift      = new PropertyInfo('floatingShift')
export const onFloatingUpdate   = new PropertyInfo('onFloatingUpdate')



// components:
export const controlComponent    = new PropertyInfo('controlComponent')

export const buttonComponent     = new PropertyInfo('buttonComponent')
export const buttonRef           = new PropertyInfo('buttonRef')
export const buttonOrientation   = new PropertyInfo('buttonOrientation')
export const buttonChildren      = new PropertyInfo('buttonChildren')

export const iconComponent       = new PropertyInfo('iconComponent')

export const trackComponent      = new PropertyInfo('trackComponent')
export const trackLowerComponent = new PropertyInfo('trackLowerComponent')
export const trackUpperComponent = new PropertyInfo('trackUpperComponent')
export const thumbComponent      = new PropertyInfo('thumbComponent')
export const trackRef            = new PropertyInfo('trackRef')
export const trackLowerRef       = new PropertyInfo('trackLowerRef')
export const trackUpperRef       = new PropertyInfo('trackUpperRef')
export const thumbRef            = new PropertyInfo('thumbRef')
export const trackClasses        = new PropertyInfo('trackClasses')
export const trackLowerClasses   = new PropertyInfo('trackLowerClasses')
export const trackUpperClasses   = new PropertyInfo('trackUpperClasses')
export const thumbClasses        = new PropertyInfo('thumbClasses')
export const trackStyle          = new PropertyInfo('trackStyle')
export const trackLowerStyle     = new PropertyInfo('trackLowerStyle')
export const trackUpperStyle     = new PropertyInfo('trackUpperStyle')
export const thumbStyle          = new PropertyInfo('thumbStyle')

export const arrowComponent      = new PropertyInfo('arrowComponent')
export const arrowRef            = new PropertyInfo('arrowRef')



// children:
export const children            = new PropertyInfo('children')
