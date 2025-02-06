

const customElement = {
    type: 'a',
    props: {
        href : "https://www.google.com",
        target: '_blank'
    },
    children  : "Click here to visit Google"
}

function createCustomElement(customElement, rootElement){
    const domElement = document.createElement(customElement.type);
    domElement.innerHTML = customElement.children;
    // domElement.setAttribute('href', customElement.props.href);
    // domElement.setAttribute('_blank', customElement.props.target)
    for (const prop in customElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, customElement.props[prop]);
    }
    rootElement.appendChild(domElement);

}


const rootElement = document.querySelector('#root');
createCustomElement(customElement,rootElement);
