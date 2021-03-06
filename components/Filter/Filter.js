import React from "react";
import styles from "./filter.module.css";
import {List, ListColumn, ListRow} from "../icons";
import {CommandButton} from "office-ui-fabric-react";
import {initializeIcons} from "office-ui-fabric-react/lib-commonjs/Icons";

const Filter = () => {

    initializeIcons(undefined, { disableWarnings: true });

    // filter
    const sortProps = {
        items: [
            {
                key: 'azSorting',
                text: 'A-Z Sort',
                iconProps: { iconName: 'Down' }
            },
            {
                key: 'zaSorting',
                text: <span>Z-A Sort</span>,
                iconProps: { iconName: 'Up' }
            }
        ]
    };

    const filterProps = {
        items: [
            {
                key: 'education',
                text: 'Education',
                iconProps: { iconName: 'Like' }
            },
            {
                key: 'technology',
                text: <span>Technology</span>,
                iconProps: { iconName: 'Game' }
            }
        ]
    };

    const sortIcon = { iconName: 'Sort' };
    const filterIcon = { iconName: 'Filter' };

    return (
        <div className={styles.filter}>
            <div className={styles.listing}>
                <button className={styles.active}>
                    <ListRow />
                </button>
                <button>
                    <ListColumn />
                </button>
                <button>
                    <List />
                </button>
            </div>
            <div className={styles.filtering}>
                <div className={styles.sorting}>
                    <CommandButton
                        iconProps={sortIcon}
                        text="Sorting"
                        menuProps={sortProps}
                        disabled={false}
                        checked={false}
                    />
                </div>
                <div className={styles.filterButton}>
                    <CommandButton
                        iconProps={filterIcon}
                        text="Filter"
                        menuProps={filterProps}
                        disabled={false}
                        checked={false}
                    />
                </div>
            </div>
        </div>
    )
}

export default Filter;