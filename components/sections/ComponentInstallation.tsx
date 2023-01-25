import { default as React } from 'react'
import { AccordionItem } from '../Accordion'
import { ExclusiveAccordion } from '@reusable-ui/components'
import { TheComponentLink, useComponentInfo } from '../../packages/componentContext';
import { BashCode } from '../Code';
import { Tips } from '../Warning';
import { Section } from './Section';



export interface ComponentInstallationProps {
    children ?: React.ReactNode
}
export const ComponentInstallation = ({children}: ComponentInstallationProps) => {
    const {component: {packageFullName}} = useComponentInfo();
    
    return (
        <Section title={<>Installing <TheComponentLink /> Component</>}>
            <p>
                There are 2 ways to install <TheComponentLink /> component into your react app project: 
            </p>
            <ExclusiveAccordion lazy={true} theme='primary'>
                <AccordionItem label={<>Install the <strong>Specific</strong> Package of <TheComponentLink /> Component</>}>
                    <p>
                        To install the <strong>minimal dependencies</strong> required by <TheComponentLink /> component,
                        open your terminal window on your code editor and type:
                    </p>
                    <BashCode collapsible={false}>{
`
# npm:
npm install ${packageFullName}

# yarn:
yarn add ${packageFullName}

# pnpm:
pnpm add ${packageFullName}
`
                    }</BashCode>
                </AccordionItem>
                <AccordionItem label={<>Install the <strong>Whole</strong> Reusable-UI Component Pack, including the <TheComponentLink /> Component</>}>
                    <p>
                        To install the <strong>whole collection</strong> of <em>official</em> Reusable-UI components,
                        open your terminal window on your code editor and type:
                    </p>
                    <BashCode collapsible={false}>{
`
# npm:
npm install @reusable-ui/components

# yarn:
yarn add @reusable-ui/components

# pnpm:
pnpm add @reusable-ui/components
`
                    }</BashCode>
                    <p>
                        In <em>most cases</em>, creating a website (react app) requires <em>a lot of</em> components.
                        This is the simples way to build a react app with our components. Enjoy 😊
                    </p>
                    <Tips>
                        <p>
                            Any component you don&apos;t use will automatically removed (tree shake) by Webpack/Parcel/Rollup or similar tool when you deploy your (React) app.
                        </p>
                    </Tips>
                </AccordionItem>
            </ExclusiveAccordion>
            {children}
        </Section>
    );
}
