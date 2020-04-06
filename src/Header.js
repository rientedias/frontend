import React from  'react';

export default function Header({children}/* Desestruturação */){
    return (
       <header>
        <h1>{children}</h1> 
       </header>

    );
}