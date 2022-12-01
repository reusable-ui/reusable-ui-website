import React, { useEffect, useRef, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { generic, modal } from '../../packages/packageList'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Modal as OriModal, ModalProps, List, ListItem, CardBody, ModalExpandedChangeEvent, BackdropStyle, Button } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { ExpandedProperty, OnExpandedChangeProperty } from '../../properties/sections/stateProperties'
import { useFlipFlop } from '../../hooks/flipFlop'
import { LazyProperty } from '../../properties/sections/behaviorProperties'
import { ModalUiProperty, ModalViewportProperty } from '../../properties/sections/modalProperties'
import { DummyUiBig, DummyUiBigger } from '../../components/DummyUi'
import { backdropStyleOptions, BackdropStyleProperty } from '../../properties/sections/variantProperties'
import { EventHandler } from '@reusable-ui/core'



const Modal = (props: Partial<ModalProps>) => <OriModal {...props} expanded={props.expanded ?? true} setFocus={props.setFocus ?? false} restoreFocus={props.restoreFocus ?? false}>
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

interface DemoBackdropProps {
    backdropStyle : BackdropStyle
}
const DemoBackdrop = ({backdropStyle}: DemoBackdropProps) => {
    const viewportRef = useRef<HTMLElement>(null);
    const [expanded, setExpanded] = useState<boolean>(true);
    let cancelReset : ReturnType<typeof setTimeout>|undefined = undefined;
    
    const handleClose = () => {
        setExpanded(false);
        
        clearTimeout(cancelReset);
        cancelReset = setTimeout(() => {
            setExpanded(true);
        }, 2000);
    };
    useEffect(() => {
        // cleanups:
        return () => {
            clearTimeout(cancelReset);
        };
    }, [])
    
    
    
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
                <Modal expanded={expanded} onExpandedChange={handleClose} backdropStyle={backdropStyle} modalViewport={viewportRef} />
            </div>
        </CardBody>
    );
}

interface DemoModalViewportProps {
    bodyViewport : boolean
}
const DemoModalViewport = ({bodyViewport}: DemoModalViewportProps) => {
    const viewportRef = useRef<HTMLElement>(null);
    const [expanded, setExpanded] = useState<boolean>(false);
    const handleOpen = () => {
        setExpanded(true);
    };
    const handleClose = () => {
        setExpanded(false);
    };
    const handleExpandedChange : EventHandler<ModalExpandedChangeEvent> = (event) => {
        setExpanded(event.expanded);
    };
    
    
    
    return (
        <CardBody elmRef={viewportRef}>
            <div style={{
                display      : 'grid',
                justifyItems : 'center',
                alignItems   : 'center',
                
                blockSize    : 'calc(256px + 2rem)',
                alignContent : 'start',
                
                overflow     : 'hidden',
            }}>
                <Button theme='primary' gradient={true} onClick={handleOpen}>
                    Show Modal Covering <strong>The Whole {bodyViewport ? 'Page' : 'Section'}</strong>
                </Button>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, aliquid in! Veritatis ipsa nisi non doloremque saepe officia pariatur quisquam reiciendis ipsum, assumenda, doloribus illum? Adipisci pariatur cumque odio rem?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, aliquid in! Veritatis ipsa nisi non doloremque saepe officia pariatur quisquam reiciendis ipsum, assumenda, doloribus illum? Adipisci pariatur cumque odio rem?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, aliquid in! Veritatis ipsa nisi non doloremque saepe officia pariatur quisquam reiciendis ipsum, assumenda, doloribus illum? Adipisci pariatur cumque odio rem?
                </p>
                <Modal expanded={expanded} onExpandedChange={handleExpandedChange} modalViewport={bodyViewport ? null : viewportRef} setFocus={true} restoreFocus={true}>
                    <DummyUiBigger>
                        <p>
                            Press <kbd>esc</kbd> key or <Button theme='primary' size='sm' onClick={handleClose}>Close</Button> to close the <TheComponentLink />.
                        </p>
                    </DummyUiBigger>
                </Modal>
            </div>
        </CardBody>
    );
}



const ModalPage: NextPage = () => {
    return (<ComponentContextProvider component={modal} baseComponents={generic} componentFactory={
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
                    You need to place <code>{'<YourComponent>'}</code> inside the <TheComponentLink /> in order to make an interactive UI.
                </p>
                <p>
                    <TheComponentLink /> handles <kbd>esc</kbd> key to close itself.
                    Once closed, the <TheComponentLink /> restores the focus to the previously focused element.
                </p>
                <p>
                    <TheComponentLink /> also handles <kbd>tab</kbd> key to <strong>switch focus</strong> only for the focusable elements inside <code>{'<YourComponent>'}</code>.
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
            <ModalViewportProperty>
                <Preview display='right' stretch={false} transpMask={false} title={<code>{`modalViewport={null}`}</code>} cardBodyComponent={<DemoModalViewport bodyViewport={true} />} />
                <p></p>
                <TypeScriptCode>{
`
const [expanded, setExpanded] = useState(false);
const handleOpen = () => {
    setExpanded(true);
};
const handleClose = () => {
    setExpanded(false);
};
const handleExpandedChange = (event) => {
    setExpanded(event.expanded);
};

/* ... */

<Button theme='primary' onClick={handleOpen}>Open</Button>
<Modal
    expanded={expanded}
    onExpandedChange={handleExpandedChange}
    modalViewport={null}
>
    <YourComponent>
        <p>
            Press <kbd>esc</kbd> key or <Button theme='primary' size='sm' onClick={handleClose}>Close</Button> to close the {'<Modal>'}.
        </p>
    </YourComponent>
</Modal>
`
                }</TypeScriptCode>
                <hr />
                <Preview display='right' stretch={false} transpMask={false} title={<code>{`modalViewport={fooSectionRef}`}</code>} cardBodyComponent={<DemoModalViewport bodyViewport={false} />} />
                <p></p>
                <TypeScriptCode>{
`
const fooSectionRef = useRef(null);
const [expanded, setExpanded] = useState(false);
const handleOpen = () => {
    setExpanded(true);
};
const handleClose = () => {
    setExpanded(false);
};
const handleExpandedChange = (event) => {
    setExpanded(event.expanded);
};

/* ... */

<section ref={fooSectionRef}>
    <Button theme='primary' onClick={handleOpen}>Open</Button>
    <Modal
        expanded={expanded}
        onExpandedChange={handleExpandedChange}
        modalViewport={fooSectionRef}
    >
        <YourComponent>
            <p>
                Press <kbd>esc</kbd> key or <Button theme='primary' size='sm' onClick={handleClose}>Close</Button> to close the {'<Modal>'}.
            </p>
        </YourComponent>
    </Modal>
</section>
`
                }</TypeScriptCode>
            </ModalViewportProperty>
            <BackdropStyleProperty>
                {backdropStyleOptions.map((backdropStyle, index) => <React.Fragment key={index}>
                    {(index !== 0) && <p></p>}
                    <Preview display='right' stretch={false} transpMask={false} title={<code>{`backdropStyle='${backdropStyle}'`}</code>} cardBodyComponent={<DemoBackdrop backdropStyle={backdropStyle} />} />
                </React.Fragment>)}
            </BackdropStyleProperty>
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
