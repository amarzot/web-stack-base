import * as React from "react";
import '../sass/custom-bulma.scss';

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class SampleComponent extends React.Component {
    render() {
        return <h1 className="title">Hello from TypeScript, Sass, Bulma, Webpack, and React!</h1>;
    }
}
