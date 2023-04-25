import { PropertyInfo } from "./propertyInfo";



// semantics:
export const tag                      = new PropertyInfo('tag')
export const role                     = new PropertyInfo('role')
export const aria                     = new PropertyInfo('aria-*')

export const semanticTag              = new PropertyInfo('semanticTag')
export const semanticRole             = new PropertyInfo('semanticRole')



// global:
export const elmRef                   = new PropertyInfo('elmRef')
export const outerRef                 = new PropertyInfo('outerRef')

export const id                       = new PropertyInfo('id')

export const style                    = new PropertyInfo('style')



// classes:
export const mainClass                = new PropertyInfo('mainClass')
export const variantClasses           = new PropertyInfo('variantClasses')
export const stateClasses             = new PropertyInfo('stateClasses')
export const classes                  = new PropertyInfo('classes')
export const className                = new PropertyInfo('className')



// variants:
export const orientation              = new PropertyInfo('orientation')
export const size                     = new PropertyInfo('size')
export const theme                    = new PropertyInfo('theme')
export const gradient                 = new PropertyInfo('gradient')
export const outlined                 = new PropertyInfo('outlined')
export const mild                     = new PropertyInfo('mild')
export const nude                     = new PropertyInfo('nude')
export const horzAlign                = new PropertyInfo('horzAlign')
export const vertAlign                = new PropertyInfo('vertAlign')

export const labelStyle               = new PropertyInfo('labelStyle')
export const buttonStyle              = new PropertyInfo('buttonStyle')
export const checkStyle               = new PropertyInfo('checkStyle')
export const listStyle                = new PropertyInfo('listStyle')
export const cardStyle                = new PropertyInfo('cardStyle')
export const badgeStyle               = new PropertyInfo('badgeStyle')
export const backdropStyle            = new PropertyInfo('backdropStyle')
export const modalCardStyle           = new PropertyInfo('modalCardStyle')
export const modalSideStyle           = new PropertyInfo('modalSideStyle')
export const progressStyle            = new PropertyInfo('progressStyle')
export const progressBarStyle         = new PropertyInfo('progressBarStyle')
export const detailsStyle             = new PropertyInfo('detailsStyle')



// states:
export const excited                  = new PropertyInfo('excited')

export const running                  = new PropertyInfo('running')

export const expanded                 = new PropertyInfo('expanded')
export const defaultExpanded          = new PropertyInfo('defaultExpanded')
export const onExpandedChange         = new PropertyInfo('onExpandedChange')

export const expandedListIndex        = new PropertyInfo('expandedListIndex')
export const defaultExpandedListIndex = new PropertyInfo('defaultExpandedListIndex')

export const enabled                  = new PropertyInfo('enabled')
export const inheritEnabled           = new PropertyInfo('inheritEnabled')

export const readOnly                 = new PropertyInfo('readOnly')
export const inheritReadOnly          = new PropertyInfo('inheritReadOnly')

export const active                   = new PropertyInfo('active')
export const inheritActive            = new PropertyInfo('inheritActive')
export const defaultActive            = new PropertyInfo('defaultActive')
export const onActiveChange           = new PropertyInfo('onActiveChange')

export const focused                  = new PropertyInfo('focused')

export const arrived                  = new PropertyInfo('arrived')

export const pressed                  = new PropertyInfo('pressed')

export const enableValidation         = new PropertyInfo('enableValidation')
export const isValid                  = new PropertyInfo('isValid')
export const inheritValidation        = new PropertyInfo('inheritValidation')

export const checkable                = new PropertyInfo('checkable')



// appearances:
export const icon                     = new PropertyInfo('icon')
export const iconPosition             = new PropertyInfo('iconPosition')



// behaviors:
export const actionCtrl               = new PropertyInfo('actionCtrl')
export const lazy                     = new PropertyInfo('lazy')
export const expandDelay              = new PropertyInfo('expandDelay')
export const collapseDelay            = new PropertyInfo('collapseDelay')
export const breakpoint               = new PropertyInfo('breakpoint')



// actions:
export const href                     = new PropertyInfo('href')
export const onClick                  = new PropertyInfo('onClick')



// navigations:
export const caseSensitive            = new PropertyInfo('caseSensitive')
export const end                      = new PropertyInfo('end')



// floatable:
export const floatingOn               = new PropertyInfo('floatingOn')
export const floatingPlacement        = new PropertyInfo('floatingPlacement')
export const floatingMiddleware       = new PropertyInfo('floatingMiddleware')
export const floatingStrategy         = new PropertyInfo('floatingStrategy')
export const floatingAutoFlip         = new PropertyInfo('floatingAutoFlip')
export const floatingAutoShift        = new PropertyInfo('floatingAutoShift')
export const floatingOffset           = new PropertyInfo('floatingOffset')
export const floatingShift            = new PropertyInfo('floatingShift')
export const onFloatingUpdate         = new PropertyInfo('onFloatingUpdate')



// scrolls:
export const scrollingOf              = new PropertyInfo('scrollingOf')
export const scrollingSelector        = new PropertyInfo('scrollingSelector')
export const scrollingFilter          = new PropertyInfo('scrollingFilter')
export const scrollingInterpolation   = new PropertyInfo('scrollingInterpolation')



// paginations:
export const itemsLimit               = new PropertyInfo('itemsLimit')
export const prevItems                = new PropertyInfo('prevItems')
export const nextItems                = new PropertyInfo('nextItems')



// modals:
export const modalViewport            = new PropertyInfo('modalViewport')



// carousel:
export const infiniteLoop             = new PropertyInfo('infiniteLoop')
export const scrollingRef             = new PropertyInfo('scrollingRef')



// components:
export const basicComponent           = new PropertyInfo('basicComponent')
export const bodyComponent         = new PropertyInfo('bodyComponent')
export const controlComponent         = new PropertyInfo('controlComponent')

export const buttonComponent          = new PropertyInfo('buttonComponent')
export const buttonRef                = new PropertyInfo('buttonRef')
export const buttonOrientation        = new PropertyInfo('buttonOrientation')
export const buttonChildren           = new PropertyInfo('buttonChildren')

export const toggleButtonComponent    = new PropertyInfo('toggleButtonComponent')

export const prevButtonComponent      = new PropertyInfo('prevButtonComponent')
export const nextButtonComponent      = new PropertyInfo('nextButtonComponent')

export const iconComponent            = new PropertyInfo('iconComponent')

export const trackComponent           = new PropertyInfo('trackComponent')
export const trackLowerComponent      = new PropertyInfo('trackLowerComponent')
export const trackUpperComponent      = new PropertyInfo('trackUpperComponent')
export const thumbComponent           = new PropertyInfo('thumbComponent')
export const trackRef                 = new PropertyInfo('trackRef')
export const trackLowerRef            = new PropertyInfo('trackLowerRef')
export const trackUpperRef            = new PropertyInfo('trackUpperRef')
export const thumbRef                 = new PropertyInfo('thumbRef')
export const trackClasses             = new PropertyInfo('trackClasses')
export const trackLowerClasses        = new PropertyInfo('trackLowerClasses')
export const trackUpperClasses        = new PropertyInfo('trackUpperClasses')
export const thumbClasses             = new PropertyInfo('thumbClasses')
export const trackStyle               = new PropertyInfo('trackStyle')
export const trackLowerStyle          = new PropertyInfo('trackLowerStyle')
export const trackUpperStyle          = new PropertyInfo('trackUpperStyle')
export const thumbStyle               = new PropertyInfo('thumbStyle')

export const arrowComponent           = new PropertyInfo('arrowComponent')
export const arrowRef                 = new PropertyInfo('arrowRef')

export const dropdownComponent        = new PropertyInfo('dropdownComponent')
export const dropdownRef              = new PropertyInfo('dropdownRef')
export const dropdownOrientation      = new PropertyInfo('dropdownOrientation')

export const listComponent            = new PropertyInfo('listComponent')
export const listRef                  = new PropertyInfo('listRef')
export const listOrientation          = new PropertyInfo('listOrientation')
export const listItems                = new PropertyInfo('listItems')

export const listItemComponent        = new PropertyInfo('listItemComponent')

export const navComponent             = new PropertyInfo('navComponent')

export const navscrollComponent       = new PropertyInfo('navscrollComponent')

export const accordionComponent       = new PropertyInfo('accordionComponent')

export const cardComponent            = new PropertyInfo('cardComponent')
export const cardRef                  = new PropertyInfo('cardRef')
export const cardOrientation          = new PropertyInfo('cardOrientation')
export const cardChildren             = new PropertyInfo('cardChildren')

export const popupComponent           = new PropertyInfo('popupComponent')
export const collapseComponent        = new PropertyInfo('collapseComponent')

export const modalComponent           = new PropertyInfo('modalComponent')
export const modalRef                 = new PropertyInfo('modalRef')



// children:
export const children                 = new PropertyInfo('children')
