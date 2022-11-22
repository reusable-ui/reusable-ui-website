import React, {  } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { basic, badge } from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Badge as OriBadge, BadgeProps, List, ListItem, CardBody } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { ExpandedProperty } from '../../properties/sections/stateProperties'
import { useFlipFlop } from '../../hooks/flipFlop'
import { LazyProperty } from '../../properties/sections/behaviorProperties'
import { FloatingAutoFlipProperty, FloatingAutoShiftProperty, FloatingOffsetProperty, FloatingOnProperty, FloatingPlacementProperty, FloatingProperties, FloatingShiftProperty, FloatingStrategyProperty, OnFloatingUpdateProperty } from '../../properties/sections/floatableProperties'



const Badge = (props: BadgeProps) => <OriBadge {...props} theme={props.theme ?? 'primary'} expanded={props.expanded ?? true} />

const DemoBadge = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '4rem'}}>
            <Badge expanded={isFlip} theme='danger' size='lg'>
                Hurry up!
            </Badge>
        </CardBody>
    );
}
const DemoExpanded = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '6rem', justifyContent: 'start'}}>
            <p>
                <code>{`<Badge expanded={${isFlip}}>`}</code>
            </p>
            <Badge expanded={isFlip} theme='primary'>
                Hopla!
            </Badge>
        </CardBody>
    );
}



const BadgePage: NextPage = () => {
    return (<ComponentContextProvider component={badge} baseComponents={basic} componentFactory={<Badge />}>
        <Head>
            <title>{`${badge.componentTag} Component`}</title>
            <meta name="description" content={`${badge.componentTag} represents counters or labels.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> represents counters or labels.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='down' stretch={false} cardBodyComponent={<DemoBadge />} />
            </HeroSection>
            <ComponentInstallation />
            <ExpandedProperty>
                    <Preview display='down' stretch={true} cardBodyComponent={<DemoExpanded />} />
                    <p></p>
                    <TypeScriptCode>{
`
<Badge
    expanded={true}
    theme='primary'
>
    Hopla!
</Badge>
`
                    }</TypeScriptCode>
            </ExpandedProperty>
            <LazyProperty />
            <FloatingProperties>
                <FloatingOnProperty />
                <FloatingPlacementProperty />
                <FloatingStrategyProperty />
                <FloatingAutoFlipProperty />
                <FloatingAutoShiftProperty />
                <FloatingOffsetProperty />
                <FloatingShiftProperty />
                <OnFloatingUpdateProperty />
            </FloatingProperties>
            <VariantProperties>
                <SizeProperty>
                    <Preview>
                        {sizeOptions.map((sizeName, index) =>
                            <Badge
                                key={index}
                                size={sizeName}
                            >
                                A {'<Badge>'} with {sizeName ?? 'default'} size
                            </Badge>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<Badge
    size=${sizeName ? `'${sizeName}'` : '{undefined}'}
    theme='primary'
>
    A {'<Badge>'} with ${sizeName ?? 'default'} size
</Badge>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Badge
                                key={index}
                                theme={themeName}
                            >
                                A {'<Badge>'} with {themeName} theme
                            </Badge>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Badge
    theme='${themeName}'
>
    A {'<Badge>'} with ${themeName} theme
</Badge>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Badge
                                key={index}
                                gradient={true}
                                theme={themeName}
                            >
                                A {'<Badge>'} with gradient mode
                            </Badge>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Badge
    gradient={true}
    theme='${themeName}'
>
    A {'<Badge>'} with gradient mode
</Badge>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Badge
                                key={index}
                                outlined={true}
                                theme={themeName}
                            >
                                A {'<Badge>'} with outlined mode
                            </Badge>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Badge
    outlined={true}
    theme='${themeName}'
>
    A {'<Badge>'} with outlined mode
</Badge>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Badge
                                key={index}
                                mild={true}
                                theme={themeName}
                            >
                                A {'<Badge>'} without mild mode
                            </Badge>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Badge
    mild={true}
    theme='${themeName}'
>
    A {'<Badge>'} without mild mode
</Badge>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Badge
                                key={index}
                                nude={true}
                                theme={themeName}
                            >
                                A {'<Badge>'} with nude mode
                            </Badge>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Badge
    nude={true}
    theme='${themeName}'
>
    A {'<Badge>'} with nude mode
</Badge>
`
                        ).join('')}
                    </TypeScriptCode>
                </NudeProperty>
            </VariantProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='Animations'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>animExpand</code>
                                <p>Represents <strong>expanding animation</strong>, a transition from <code>{`expanded={false}`}</code> to <code>{`expanded={true}`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>animCollapse</code>
                                <p>Represents <strong>collapsing animation</strong>, a transition from <code>{`expanded={true}`}</code> to <code>{`expanded={false}`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {badges, badgeValues} from '@reusable-ui/badge';

badges.filterActive = [[
    'contrast(150%)',
    'brightness(120%)',
]];
console.log('filterActive variable name: ', badges.filterActive);
console.log('filterActive variable value: ', badgeValues.filterActive);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default BadgePage
