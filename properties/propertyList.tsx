import { PropertyInfo } from "./propertyInfo";



// semantics:
export const tag                = new PropertyInfo('tag')
export const role               = new PropertyInfo('role')
export const aria               = new PropertyInfo('aria-*')

export const semanticTag        = new PropertyInfo('semanticTag')
export const semanticRole       = new PropertyInfo('semanticRole')



// global:
export const elmRef             = new PropertyInfo('elmRef')
export const outerRef           = new PropertyInfo('outerRef')

export const id                 = new PropertyInfo('id')

export const style              = new PropertyInfo('style')



// classes:
export const mainClass          = new PropertyInfo('mainClass')
export const variantClasses     = new PropertyInfo('variantClasses')
export const stateClasses       = new PropertyInfo('stateClasses')
export const classes            = new PropertyInfo('classes')
export const className          = new PropertyInfo('className')



// variants:
export const orientation        = new PropertyInfo('orientation')
export const size               = new PropertyInfo('size')
export const theme              = new PropertyInfo('theme')
export const gradient           = new PropertyInfo('gradient')
export const outlined           = new PropertyInfo('outlined')
export const mild               = new PropertyInfo('mild')
export const nude               = new PropertyInfo('nude')



// states:
export const excited            = new PropertyInfo('excited')

export const expanded           = new PropertyInfo('expanded')

export const enabled            = new PropertyInfo('enabled')
export const inheritEnabled     = new PropertyInfo('inheritEnabled')

export const readOnly           = new PropertyInfo('readOnly')
export const inheritReadOnly    = new PropertyInfo('inheritReadOnly')

export const active             = new PropertyInfo('active')
export const inheritActive      = new PropertyInfo('inheritActive')
export const defaultActive      = new PropertyInfo('defaultActive')
export const onActiveChange     = new PropertyInfo('onActiveChange')

export const focused            = new PropertyInfo('focused')

export const arrived            = new PropertyInfo('arrived')

export const pressed            = new PropertyInfo('pressed')

export const enableValidation   = new PropertyInfo('enableValidation')
export const isValid            = new PropertyInfo('isValid')
export const inheritValidation  = new PropertyInfo('inheritValidation')

export const checkable          = new PropertyInfo('checkable')



// appearances:
export const icon               = new PropertyInfo('icon')
export const iconPosition       = new PropertyInfo('iconPosition')



// actions:
export const href               = new PropertyInfo('href')
export const onClick            = new PropertyInfo('onClick')



// navigations:
export const caseSensitive      = new PropertyInfo('caseSensitive')
export const end                = new PropertyInfo('end')




// components:
export const buttonComponent    = new PropertyInfo('buttonComponent')
export const buttonRef          = new PropertyInfo('buttonRef')
export const buttonOrientation  = new PropertyInfo('buttonOrientation')
export const buttonStyle        = new PropertyInfo('buttonStyle')
export const buttonChildren     = new PropertyInfo('buttonChildren')

export const iconComponent      = new PropertyInfo('iconComponent')
