import React from 'react';
import styles from '../../../styles/store/sub-pages/search-results.module.css';
import AppCard from "../../../components/Card/AppCard/AppCard";

const SearchResults = ({data, searchTerm}) => {

    const RenderApps = () => {
        return data.map((e,i)=> {
            return (
                <AppCard
                    key={i}
                    {...e}
                />
            )
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <p> Search results for "{searchTerm}" </p>
                <p className={styles.totalResult}>
                    {data.length} results
                </p>
            </div>
            <div>
                Filter burada olacak
            </div>

            <div className={styles.content}>
                <RenderApps/>
            </div>
        </div>
    );
};

export default SearchResults;