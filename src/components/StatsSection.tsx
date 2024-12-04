import React from 'react';

const styles = {
    container: {
        backgroundColor: '#10234f',
        color: 'white',
        padding: '50px 10%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    },
    statBlock: {
        textAlign: 'center',
        flex: 1,
    },
    number: {
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
    },
    label: {
        fontSize: '1rem',
        fontWeight: 500,
    },
    divider: {
        width: '1px',
        height: '60px',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        margin: '0 20px',
    },
};

const StatsSection: React.FC = () => {
    return (
        <div style={styles.container}>
            <div style={styles.statBlock}>
                <div style={styles.number}>45K+</div>
                <div style={styles.label}>Active Students</div>
            </div>
            <div style={styles.divider}></div>
            <div style={styles.statBlock}>
                <div style={styles.number}>89+</div>
                <div style={styles.label}>Faculty Courses</div>
            </div>
            <div style={styles.divider}></div>
            <div style={styles.statBlock}>
                <div style={styles.number}>156K</div>
                <div style={styles.label}>Best Professors</div>
            </div>
            <div style={styles.divider}></div>
            <div style={styles.statBlock}>
                <div style={styles.number}>42K</div>
                <div style={styles.label}>Award Achieved</div>
            </div>
        </div>
    );
};

export default StatsSection;
