import { BarrelPackageInfo, CapabilityInfo, ComponentInfo, ConfigInfo, FeatureInfo, StateInfo, UtilityInfo, VariantInfo } from './packageInfo'



// reusable-ui configs:
export const colors                 = new ConfigInfo('colors')
export const borders                = new ConfigInfo('borders')
export const spacers                = new ConfigInfo('spacers')
export const breakpoints            = new ConfigInfo('breakpoints')
export const typos                  = new ConfigInfo('typos')

// reusable-ui utilities:
export const numbers                = new UtilityInfo('numbers')
export const nodes                  = new UtilityInfo('nodes')
export const stripouts              = new UtilityInfo('stripouts')
export const layouts                = new UtilityInfo('layouts')
export const hooks                  = new UtilityInfo('hooks')
export const semantics              = new UtilityInfo('semantics')
export const accessibilities        = new UtilityInfo('accessibilities')
export const validations            = new UtilityInfo('validations')
export const focuses                = new UtilityInfo('focuses')
export const clientSides            = new UtilityInfo('client-sides')
export const navigations            = new UtilityInfo('navigations')

// reusable-ui features:
export const background             = new FeatureInfo('background')
export const foreground             = new FeatureInfo('foreground')
export const border                 = new FeatureInfo('border')
export const ring                   = new FeatureInfo('ring')
export const animation              = new FeatureInfo('animation')
export const padding                = new FeatureInfo('padding')

// reusable-ui capabilities:
export const floatable              = new CapabilityInfo('floatable')
export const groupable              = new CapabilityInfo('groupable')

// reusable-ui variants:
export const orientationable        = new VariantInfo('orientationable')
export const resizable              = new VariantInfo('resizable'       , 'sizes')
export const themable               = new VariantInfo('themable'        , 'themes')
export const gradientable           = new VariantInfo('gradientable'    , 'gradient')
export const outlineable            = new VariantInfo('outlineable'     , 'outlined')
export const mildable               = new VariantInfo('mildable'        , 'mild')
export const nudible                = new VariantInfo('nudible'         , 'nude')
export const colorable              = new VariantInfo('colorable')
export const basicVariants          = new VariantInfo('basic-variants')

// reusable-ui states:
export const excitable              = new StateInfo('excitable')
export const collapsible            = new StateInfo('collapsible')
export const disableable            = new StateInfo('disableable'       , 'disabled state')
export const activatable            = new StateInfo('activatable'       , 'active state')
export const focusable              = new StateInfo('focusable'         , 'focus feedback')
export const interactable           = new StateInfo('interactable'      , 'interactive feedback')
export const clickable              = new StateInfo('clickable'         , 'clicking feedback')
export const activeAsClick          = new StateInfo('active-as-click')
export const invalidable            = new StateInfo('invalidable'       , 'valid/invalid indicator')
export const checkable              = new StateInfo('checkable')
export const validationIcon         = new StateInfo('validation-icon'   , 'validation icon')

// supports:
export const reactRouterCompatLink  = new ComponentInfo('react-router-compat-link')

// base-components:
export const generic                = new ComponentInfo('generic')
export const basic                  = new ComponentInfo('basic')
export const indicator              = new ComponentInfo('indicator')
export const control                = new ComponentInfo('control')
export const actionControl          = new ComponentInfo('action-control')
export const editableControl        = new ComponentInfo('editable-control')
export const editableTextControl    = new ComponentInfo('editable-text-control')
export const editableActionControl  = new ComponentInfo('editable-action-control')

// base-content-components:
export const container              = new ComponentInfo('container')
export const content                = new ComponentInfo('content')

// simple-components:
export const visuallyHidden         = new ComponentInfo('visually-hidden')
export const icon                   = new ComponentInfo('icon')
export const label                  = new ComponentInfo('label')
export const button                 = new ComponentInfo('button')
export const toggleButton           = new ComponentInfo('toggle-button')
export const navButton              = new ComponentInfo('nav-button')
export const buttonIcon             = new ComponentInfo('button-icon')
export const closeButton            = new ComponentInfo('close-button')
export const form                   = new ComponentInfo('form')
export const input                  = new ComponentInfo('input')
export const range                  = new ComponentInfo('range')
export const check                  = new ComponentInfo('check')
export const radio                  = new ComponentInfo('radio')
export const hamburgerMenuButton    = new ComponentInfo('hamburger-menu-button')

// layout-components:
export const list                   = new ComponentInfo('list')
export const card                   = new ComponentInfo('card')
export const masonry                = new ComponentInfo('masonry')

// status-components:
export const popup                  = new ComponentInfo('popup')
export const badge                  = new ComponentInfo('badge')
export const busy                   = new ComponentInfo('busy')

// notification-components:
export const alert                  = new ComponentInfo('alert')
export const tooltip                = new ComponentInfo('tooltip')

// menu-components:
export const collapse               = new ComponentInfo('collapse')
export const dropdown               = new ComponentInfo('dropdown')
export const dropdownButton         = new ComponentInfo('dropdown-button')
export const dropdownList           = new ComponentInfo('dropdown-list')
export const dropdownListButton     = new ComponentInfo('dropdown-list-button')

// dialog-components:
export const modal                  = new ComponentInfo('modal')
export const modalCard              = new ComponentInfo('modal-card')
export const modalSide              = new ComponentInfo('modal-side')

// composite-components:
export const progress               = new ComponentInfo('progress')
export const group                  = new ComponentInfo('group')
export const nav                    = new ComponentInfo('nav')
export const navscroll              = new ComponentInfo('navscroll')
export const accordion              = new ComponentInfo('accordion')
export const exclusiveAccordion     = new ComponentInfo('exclusive-accordion')
export const carousel               = new ComponentInfo('carousel')
export const navbar                 = new ComponentInfo('navbar')
export const details                = new ComponentInfo('details')

// utility-components:
export const useElementCssSize      = new ComponentInfo('dimensions'    , undefined, 'UseElementCssSize')
export const useWindowCssSize       = new ComponentInfo('dimensions'    , undefined, 'UseWindowCssSize')
export const responsiveProvider     = new ComponentInfo('responsives'   , undefined, 'ResponsiveProvider')

// barrels:
export const components             = new BarrelPackageInfo('components', undefined, 'Reusable-UI Components')
export const core                   = new BarrelPackageInfo('core'      , undefined, 'Reusable-UI Core')
