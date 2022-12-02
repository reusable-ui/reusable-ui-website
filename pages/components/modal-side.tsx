import React, { useEffect, useRef, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { card, modalSide } from '../../packages/packageList'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { ModalSide as OriModalSide, ModalSideProps, List, ListItem, CardBody, ModalExpandedChangeEvent, BackdropStyle, Button, CardHeader, CardFooter, CloseButton, ModalSideStyle } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { ExpandedProperty, OnExpandedChangeProperty } from '../../properties/sections/stateProperties'
import { useFlipFlop } from '../../hooks/flipFlop'
import { LazyProperty } from '../../properties/sections/behaviorProperties'
import { ModalViewportProperty } from '../../properties/sections/modalProperties'
import { backdropStyleOptions, BackdropStyleProperty, modalSideStyleOptions, ModalSideStyleProperty } from '../../properties/sections/variantProperties'
import { EventHandler } from '@reusable-ui/core'
import { CardComponentProperty, ComponentProperties, ModalComponentProperty, ModalRefProperty, CollapseComponentProperty } from '../../properties/sections/componentProperties'



interface CardSampleItemsProps {
    onClose ?: () => void
}
const cardSampleItems = ({onClose: handleClose}: CardSampleItemsProps = {}) => {
    return [
        <CardHeader key={0}>
            Test Card
            <CloseButton onClick={handleClose} />
        </CardHeader>,
        <CardBody key={1}>
            <p>
                Lorem ipsum dolor sit amet
                <br />
                consectetur adipisicing elit.
            </p>
            <p>
                Explicabo aut deserunt nulla
                <br />
                iusto quod a est debitis.
            </p>
        </CardBody>,
        <CardFooter key={2}>
            <Button onClick={handleClose}>
                Close
            </Button>
        </CardFooter>,
    ];
}

const ModalSide = (props: ModalSideProps & CardSampleItemsProps) => <OriModalSide {...props} theme={props.theme ?? 'primary'} expanded={props.expanded ?? true} setFocus={props.setFocus ?? false} restoreFocus={props.restoreFocus ?? false}>
    {[props.children].flat().every((child) => React.isValidElement(child)) ? props.children : cardSampleItems(props)}
</OriModalSide>



const DemoModalSide = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef}>
            <div style={{
                display      : 'grid',
                justifyItems : 'center',
                alignItems   : 'center',
                
                blockSize    : '20rem',
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
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, aliquid in! Veritatis ipsa nisi non doloremque saepe officia pariatur quisquam reiciendis ipsum, assumenda, doloribus illum? Adipisci pariatur cumque odio rem?
                </p>
                <ModalSide modalSideStyle='inlineStart' expanded={isFlip} modalViewport={viewportRef} />
            </div>
        </CardBody>
    );
}
const DemoExpanded = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef}>
            <p>
                <code>{`<ModalSide expanded={${isFlip}}>`}{isFlip && <>&nbsp;</>}</code>
            </p>
            <div style={{
                display      : 'grid',
                justifyItems : 'center',
                alignItems   : 'center',
                
                blockSize    : '20rem',
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
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, aliquid in! Veritatis ipsa nisi non doloremque saepe officia pariatur quisquam reiciendis ipsum, assumenda, doloribus illum? Adipisci pariatur cumque odio rem?
                </p>
                <ModalSide modalSideStyle='inlineStart' expanded={isFlip} modalViewport={viewportRef} />
            </div>
        </CardBody>
    );
}

interface DemoModalSideViewportProps {
    bodyViewport : boolean
}
const DemoModalSideViewport = ({bodyViewport}: DemoModalSideViewportProps) => {
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
                
                blockSize    : '20rem',
                alignContent : 'start',
                
                overflow     : 'hidden',
            }}>
                <Button theme='primary' gradient={true} onClick={handleOpen}>
                    Show ModalSide Covering <strong>The Whole {bodyViewport ? 'Page' : 'Section'}</strong>
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
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, aliquid in! Veritatis ipsa nisi non doloremque saepe officia pariatur quisquam reiciendis ipsum, assumenda, doloribus illum? Adipisci pariatur cumque odio rem?
                </p>
                <ModalSide modalSideStyle='inlineStart' expanded={expanded} onExpandedChange={handleExpandedChange} onClose={handleClose} modalViewport={bodyViewport ? null : viewportRef} setFocus={true} restoreFocus={true}>
                    <CardHeader>
                        Test Card
                        <CloseButton onClick={handleClose} />
                    </CardHeader>
                    <CardBody>
                        <p>
                            Press <kbd>esc</kbd> key
                            <br />
                            or
                            <br />
                            <Button theme='primary' size='sm' onClick={handleClose}>Close</Button>
                            <br />
                            to close the <TheComponentLink />.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet
                            <br />
                            consectetur adipisicing elit.
                        </p>
                    </CardBody>
                    <CardFooter>
                        <Button onClick={handleClose}>
                            Close
                        </Button>
                    </CardFooter>
                </ModalSide>
            </div>
        </CardBody>
    );
}

interface DemoModalSideStyleProps {
    modalSideStyle : ModalSideStyle
}
const DemoModalSideStyle = ({modalSideStyle}: DemoModalSideStyleProps) => {
    const viewportRef = useRef<HTMLElement>(null);
    
    
    return (
        <CardBody elmRef={viewportRef}>
            <div style={{
                display      : 'grid',
                justifyItems : 'center',
                alignItems   : 'center',
                
                blockSize    : '25rem',
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
                <ModalSide expanded={true} modalSideStyle={modalSideStyle} modalViewport={viewportRef} />
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
    const handleExpandedChange : EventHandler<ModalExpandedChangeEvent> = (event) => {
        handleClose();
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
                
                blockSize    : '20rem',
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
                <ModalSide modalSideStyle='inlineStart' expanded={expanded} onExpandedChange={handleExpandedChange} onClose={handleClose} backdropStyle={backdropStyle} modalViewport={viewportRef} />
            </div>
        </CardBody>
    );
}



const ModalSidePage: NextPage = () => {
    return (<ComponentContextProvider component={modalSide} baseComponents={card} componentFactory={<ModalSide modalSideStyle='inlineStart' />}>
        <Head>
            <title>{`${modalSide.componentTag} Component`}</title>
            <meta name="description" content={`${modalSide.componentTag} overlays a ${card.componentTag} to the side of site's page or the side of specified section.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> overlays a {card.packageLink} to the side of site&apos;s page or the side of specified section.
                </p>
                <p>
                    <TheComponentLink /> handles <kbd>esc</kbd> key to close itself.
                    Once closed, the <TheComponentLink /> restores the focus to the previously focused element.
                </p>
                <p>
                    <TheComponentLink /> also handles <kbd>tab</kbd> key to <strong>switch focus</strong> only for the focusable elements inside the {card.packageLink}.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='right' stretch={false} transpMask={false} cardBodyComponent={<DemoModalSide />} />
            </HeroSection>
            <ComponentInstallation />
            <ExpandedProperty>
                    <Preview display='down' stretch={false} transpMask={false} cardBodyComponent={<DemoExpanded />} />
                    <p></p>
                    <TypeScriptCode>{
`
<ModalSide
    modalSideStyle='inlineStart'
    expanded={true}
    modalViewport={cardBodyRef}
    theme='primary'
>
    <CardHeader>
        Test Card
        <CloseButton onClick={handleClose} />
    </CardHeader>
    <CardBody>
        <p>
            Lorem ipsum dolor sit amet
            <br />
            consectetur adipisicing elit.
        </p>
        <p>
            Explicabo aut deserunt nulla
            <br />
            iusto quod a est debitis.
        </p>
    </CardBody>
    <CardFooter>
        <Button onClick={handleClose}>
            Close
        </Button>
    </CardFooter>
</ModalSide>
`
                    }</TypeScriptCode>
            </ExpandedProperty>
            <OnExpandedChangeProperty />
            <ModalViewportProperty>
                <Preview display='right' stretch={false} transpMask={false} title={<code>{`modalViewport={null}`}</code>} cardBodyComponent={<DemoModalSideViewport bodyViewport={true} />} />
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
<ModalSide
    modalSideStyle='inlineStart'
    expanded={expanded}
    onExpandedChange={handleExpandedChange}
    modalViewport={null}
    theme='primary'
>
    <CardHeader>
        Test Card
        <CloseButton onClick={handleClose} />
    </CardHeader>
    <CardBody>
        <p>
            Press <kbd>esc</kbd> key
            <br />
            or
            <br />
            <Button theme='primary' size='sm' onClick={handleClose}>Close</Button>
            <br />
            to close the <TheComponentLink />.
        </p>
        <p>
            Lorem ipsum dolor sit amet
            <br />
            consectetur adipisicing elit.
        </p>
    </CardBody>
    <CardFooter>
        <Button onClick={handleClose}>
            Close
        </Button>
    </CardFooter>
</ModalSide>
`
                }</TypeScriptCode>
                <hr />
                <Preview display='right' stretch={false} transpMask={false} title={<code>{`modalViewport={fooSectionRef}`}</code>} cardBodyComponent={<DemoModalSideViewport bodyViewport={false} />} />
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
    <ModalSide
        modalSideStyle='inlineStart'
        expanded={expanded}
        onExpandedChange={handleExpandedChange}
        modalViewport={fooSectionRef}
        theme='primary'
    >
        <CardHeader>
            Test Card
            <CloseButton onClick={handleClose} />
        </CardHeader>
        <CardBody>
            <p>
                Press <kbd>esc</kbd> key
                <br />
                or
                <br />
                <Button theme='primary' size='sm' onClick={handleClose}>Close</Button>
                <br />
                to close the <TheComponentLink />.
            </p>
            <p>
                Lorem ipsum dolor sit amet
                <br />
                consectetur adipisicing elit.
            </p>
        </CardBody>
        <CardFooter>
            <Button onClick={handleClose}>
                Close
            </Button>
        </CardFooter>
    </ModalSide>
</section>
`
                }</TypeScriptCode>
            </ModalViewportProperty>
            <ModalSideStyleProperty>
                {modalSideStyleOptions.map((modalSideStyle, index) => <React.Fragment key={index}>
                    {(index !== 0) && <p></p>}
                    <Preview display='right' stretch={false} transpMask={false} title={<code>{`modalSideStyle='${modalSideStyle}'`}</code>} cardBodyComponent={<DemoModalSideStyle modalSideStyle={modalSideStyle} />} />
                </React.Fragment>)}
            </ModalSideStyleProperty>
            <BackdropStyleProperty>
                {backdropStyleOptions.map((backdropStyle, index) => <React.Fragment key={index}>
                    {(index !== 0) && <p></p>}
                    <Preview display='right' stretch={false} transpMask={false} title={<code>{`backdropStyle='${backdropStyle}'`}</code>} cardBodyComponent={<DemoBackdrop backdropStyle={backdropStyle} />} />
                </React.Fragment>)}
            </BackdropStyleProperty>
            <LazyProperty />
            <ComponentProperties>
                <CardComponentProperty />
                <CollapseComponentProperty />
                <ModalComponentProperty />
                <ModalRefProperty />
            </ComponentProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='Spacings'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>cardCaptionGap</code>
                                <p>The <strong>spacing</strong> between items in the <code>{'<CardHeader>'}</code> and <code>{'<CardFooter>'}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {modalSides, modalSideValues} from '@reusable-ui/modal-side';

modalSides.opacity = 0.5;
console.log('opacity variable name: ', modalSides.opacity);
console.log('opacity variable value: ', modalSideValues.opacity);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default ModalSidePage
