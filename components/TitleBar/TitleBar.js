import React from 'react';
import styles from './title-bar.module.css';
import {SearchBox} from 'office-ui-fabric-react/lib-commonjs/SearchBox';
import {Persona, PersonaPresence, PersonaSize} from 'office-ui-fabric-react/lib-commonjs/Persona';
import {CommandButton, initializeIcons} from 'office-ui-fabric-react';
import {ArrowLeft, ArrowRight} from '../icons';

const TitleBar = () => {
    // icons initialized
    initializeIcons(undefined, {disableWarnings: true});

    // persona component
    const examplePersona = {
        imageUrl:
            'https://avatars.githubusercontent.com/u/40808249?s=460&u=fef9ef6d701ded44f0631da84834ba99a0ce880e&v=4',
        imageInitials: 'AL'
    };

    const menuProps = {
        items: [
            {
                key: 'emailMessage',
                text: 'Email message',
                iconProps: {iconName: 'Mail'}
            },
            {
                key: 'calendarEvent',
                text: 'Calendar event',
                iconProps: {iconName: 'Calendar'}
            }
        ]
    };

    const Personal = () => {
        return (
            <Persona
                {...examplePersona}
                size={PersonaSize.size40}
                hidePersonaDetails={true}
                presence={PersonaPresence.online}
                imageAlt="Süleyman Sevimli"
            />
        );
    };

    return (
        <div className={styles.titleBar}>
            <div className={styles.appTitle}>Microsoft Teams</div>
            <div className={styles.search}>
                <div className={styles.navigations}>
                    <ArrowLeft className={styles.active}/>
                    <ArrowRight/>
                </div>
                <SearchBox
                    style={{width: '100%', flex: 1}}
                    placeholder="Search or type a command"
                    onSearch={(newValue) => console.log('value is ' + newValue)}
                />
            </div>
            <div className={styles.profile}>
                <CommandButton text={<Personal/>} menuProps={menuProps} disabled={false} checked={false}/>
            </div>
        </div>
    );
};

export default TitleBar;