import { Accordion as OriAccordion, AccordionProps } from '@reusable-ui/accordion'
export * from '@reusable-ui/accordion'



const Accordion = (props: AccordionProps) => <OriAccordion {...props} lazy={props.lazy ?? true} />
export {
    Accordion,
    Accordion as default,
}
