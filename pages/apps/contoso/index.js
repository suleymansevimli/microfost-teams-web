import React from 'react';
import AppLayout from '../../../components/Layout/AppLayout/AppLayout';
import Gauge from '../../../components/Chart/Gauge/Gauge';

const Contoso = () => {
    return (
        <AppLayout>
            <Gauge
                title={'Gauge Chart Updated'}
                series={[72]}
                seriesColors={['var(--brand-800)']}
                labels={['Small Description']}
                filters={[]}
            />
        </AppLayout>
    );
};

export default Contoso;