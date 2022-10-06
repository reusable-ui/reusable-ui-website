import { Alert, AlertProps } from '@reusable-ui/components'



export const Warning = (props: AlertProps) => {
    return (
        <Alert
            {...props}
            tag={props.tag ?? 'aside'}
            theme={props.theme ?? 'warning'}
            expanded={props.expanded ?? true}
            controlComponent={<></>}
        >
            {props.children}
        </Alert>
    );
}

export const Tips = (props: AlertProps) => {
    return (
        <Alert
            {...props}
            tag={props.tag ?? 'aside'}
            theme={props.theme ?? 'info'}
            expanded={props.expanded ?? true}
            controlComponent={<></>}
        >
            {props.children}
        </Alert>
    );
}