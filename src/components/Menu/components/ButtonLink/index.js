import React from 'react';

function ButtonLink(props){
    // props => { className: "name que passar", href: "link que passar"}

    return (  
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    );
}

export default ButtonLink;