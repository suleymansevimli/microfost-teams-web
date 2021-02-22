import React from 'react';
import styles from './title-bar.module.css';
import {SearchBox} from 'office-ui-fabric-react/lib-commonjs/SearchBox';
import { IPersonaSharedProps, Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib-commonjs/Persona';
import {initializeIcons} from 'office-ui-fabric-react';
import {ArrowLeft, ArrowRight} from '../icons';

const TitleBar = () => {
    // icons initialized
    initializeIcons(undefined, {disableWarnings: true});

    const examplePersona  = {
        imageUrl: 'https://avatars.githubusercontent.com/u/40808249?s=460&u=fef9ef6d701ded44f0631da84834ba99a0ce880e&v=4',
        imageInitials: 'AL'
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
                    style={{width:'100%',flex:1}}
                    placeholder="Search or type a command"
                    onSearch={(newValue) => console.log('value is ' + newValue)}
                />
            </div>
            <div className={styles.profile}>
                <Persona
                    {...examplePersona}
                    size={PersonaSize.size40}
                    hidePersonaDetails={true}
                    presence={PersonaPresence.online}
                    imageAlt="Süleyman Sevimli"
                />
            </div>
        </div>
    );
};

export default TitleBar;