import React, { useRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Button, Tooltip } from '@reusable-ui/components'
import { TypeScriptCode } from '../components/Code'
import styles from '../styles/About.module.scss'
import { Section } from '../components/Section'



const About: NextPage = () => {
    const profileRef = useRef<HTMLElement>(null);
    
    
    
    return (<>
        <Head>
            <title>About Reusable-UI</title>
            <meta name="description" content="A short history about Reusable-UI libs" />
        </Head>
        
        <Section>
            <p>
                Reusable-UI is a personal project created by <Button buttonStyle='link' theme='primary' href='https://www.instagram.com/heyyy.marco/' target='_blank'>Hey Marco</Button>.
                Hopefully in the future the Reusable-UI will be a team project.
            </p>
            <Tooltip floatingOn={profileRef} theme='warning'>
                An ugly creature
            </Tooltip>
            <p>
                <span className={styles.profileImg} style={{}} ref={profileRef}>
                    <Image src='/marco.jpg' alt='Marco' width={80} height={80} />
                </span>
                Hi I&apos;m Marco (my english nickname).<br />
                My original name is Yunus Kurniawan.
                Sadly my english friends have trouble pronouncing my name, even if my local friends.
                Then I created a nickname <strong>Mario</strong>, inspired by Nintendo&apos;s mascot: <strong>Super Mario Bross</strong>.
                But that name actually makes me ridiculed, so then I modified my nickname to <strong>Marco</strong>.
                So, please call me <strong>Marco</strong>.
            </p>
            <div className={styles.clear}></div>
            <TypeScriptCode collapsable={false}>{`
import { YunusKurniawan as Marco } from '@reusable-ui/creator'
            `}</TypeScriptCode>
            <p>
                Before pandemic, I was a craftsman with Arduino powered inside my crafts.
                I was vb, c++, c# and JavaScript for my side job and hobby.
                But after pandemic I left my crafting and focusing in web development.
                Then a <strong>Reusable-UI</strong> born!
                Previously named <strong>Nodestrap</strong> then renamed to <strong>Reusable-UI</strong>.
            </p>
            <p>
                The version 1 to 3 of Nodestrap was failed projects and never published properly (but you can see my repo in my GitHub).
                Then the version 4 released here.<br />
                Starting from version 5, the name changed to <strong>Reusable-UI</strong>.
            </p>
            <p>
                Hopefully you like my project and makes your react project much fun!
                Please support me for my existence!
            </p>
        </Section>
    </>);
}

export default About
