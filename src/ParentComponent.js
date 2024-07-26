import React from 'react';
import ListGroupPropsWithFunc from './ListGroupPropsWithFunc'; 

const ParentComponent = () => {
    let items=['siva','vamsi','navya','divya','shan']
    const heading = 'Names';

    const handleSelectItem = (item) => {
        console.log('Selected item:', item);
    };

    return (
        <div>
            <ListGroupPropsWithFunc 
                items={items} 
                heading={heading} 
                onSelectItem={handleSelectItem} 
            />
        </div>
    );
};

export default ParentComponent;
