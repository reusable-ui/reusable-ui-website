import React, {  } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { collapse, modal } from '../../packages/packageList'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Modal as OriModal, ModalProps, List, ListItem, CardBody } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { ExpandedProperty, OnExpandedChangeProperty } from '../../properties/sections/stateProperties'
import { useFlipFlop } from '../../hooks/flipFlop'
import { LazyProperty } from '../../properties/sections/behaviorProperties'
import { FloatingAutoFlipProperty, FloatingAutoShiftProperty, FloatingOffsetProperty, FloatingOnProperty, FloatingPlacementProperty, FloatingProperties, FloatingShiftProperty, FloatingStrategyProperty, OnFloatingUpdateProperty } from '../../properties/sections/floatableProperties'
import { ModalUiProperty } from '../../properties/sections/modalProperties'
import { DummyUiBig } from '../../components/DummyUi'



const Modal = (props: Partial<ModalProps>) => <OriModal {...props} expanded={props.expanded ?? true}>
    {React.isValidElement(props.children) ? props.children : <DummyUiBig />}
</OriModal>



const DemoModal = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef}>
            <div style={{
                display      : 'grid',
                justifyItems : 'center',
                alignItems   : 'center',
                
                blockSize    : 'calc(128px + 2rem)',
                alignContent : 'start',
                
                overflow     : 'hidden',
            }}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, aliquid in! Veritatis ipsa nisi non doloremque saepe officia pariatur quisquam reiciendis ipsum, assumenda, doloribus illum? Adipisci pariatur cumque odio rem?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, aliquid in! Veritatis ipsa nisi non doloremque saepe officia pariatur quisquam reiciendis ipsum, assumenda, doloribus illum? Adipisci pariatur cumque odio rem?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, aliquid in! Veritatis ipsa nisi non doloremque saepe officia pariatur quisquam reiciendis ipsum, assumenda, doloribus illum? Adipisci pariatur cumque odio rem?
                </p>
                <Modal expanded={isFlip} modalViewport={viewportRef} />
            </div>
        </CardBody>
    );
}
const DemoExpanded = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef}>
            <p>
                <code>{`<Modal expanded={${isFlip}}>`}{isFlip && <>&nbsp;</>}</code>
            </p>
            <div style={{
                display      : 'grid',
                justifyItems : 'center',
                alignItems   : 'center',
                
                blockSize    : 'calc(128px + 2rem)',
                alignContent : 'start',
                
                overflow     : 'hidden',
            }}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, aliquid in! Veritatis ipsa nisi non doloremque saepe officia pariatur quisquam reiciendis ipsum, assumenda, doloribus illum? Adipisci pariatur cumque odio rem?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, aliquid in! Veritatis ipsa nisi non doloremque saepe officia pariatur quisquam reiciendis ipsum, assumenda, doloribus illum? Adipisci pariatur cumque odio rem?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, aliquid in! Veritatis ipsa nisi non doloremque saepe officia pariatur quisquam reiciendis ipsum, assumenda, doloribus illum? Adipisci pariatur cumque odio rem?
                </p>
                <Modal expanded={isFlip} modalViewport={viewportRef} />
            </div>
        </CardBody>
    );
}



const ModalPage: NextPage = () => {
    return (<ComponentContextProvider component={modal} baseComponents={collapse} componentFactory={
        <Modal>
            <DummyUiBig />
        </Modal>
    }>
        <Head>
            <title>{`${modal.componentTag} Component`}</title>
            <meta name="description" content={`${modal.componentTag} overlays a dialog to the entire site's page or entire specified section.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> overlays a dialog to the entire site&apos;s page or entire specified section.<br />
                    You need to place a (dialog) component inside the <TheComponentLink /> in order to make the interactive UI.
                </p>
                <p>
                    <TheComponentLink /> handles <kbd>esc</kbd> key to close itself.
                    Once closed, the <TheComponentLink /> restores the focus to the previously focused element.
                </p>
                <p>
                    <TheComponentLink /> also handles <kbd>tab</kbd> key to <strong>switch focus</strong> only for the focusable elements inside the <TheComponentLink />.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='right' stretch={false} transpMask={false} cardBodyComponent={<DemoModal />} />
            </HeroSection>
            <ComponentInstallation />
            <ModalUiProperty />
            <ExpandedProperty>
                    <Preview display='down' stretch={false} transpMask={false} cardBodyComponent={<DemoExpanded />} />
                    <p></p>
                    <TypeScriptCode>{
`
<Modal
    expanded={true}
    modalViewport={cardBodyRef}
>
    <YourComponent />
</Modal>
`
                    }</TypeScriptCode>
            </ExpandedProperty>
            <OnExpandedChangeProperty />
            <LazyProperty />
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='Backgrounds, Foregrounds, Borders, &amp; Rings'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>backg</code>
                                <p>The background of <TheComponentLink />.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
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
                    <AccordionItem label='Modal UIs'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>modalUiFilter</code>
                                <p>A <code>filter</code> to apply to the <TheComponentLink />&apos;s <strong>Modal UI</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>modalUiFilterExcite</code>
                                <p>A <code>filter</code> to apply to the <TheComponentLink />&apos;s <strong>Modal UI</strong> when <em>excited</em> - when a user try to interact something <em>outside</em> the <TheComponentLink />.</p>
                            </ListItem>
                            <ListItem>
                                <code>modalUiAnimExcite</code>
                                <p>Represents <strong>exciting animation</strong> - when a user try to interact something <em>outside</em> the <TheComponentLink />.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {modals, modalValues} from '@reusable-ui/modal';

modals.opacity = 0.5;
console.log('opacity variable name: ', modals.opacity);
console.log('opacity variable value: ', modalValues.opacity);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default ModalPage
