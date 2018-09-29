import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        console.error(error);
        console.log(info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Возникли ошибки.</h1>;
        }
        return this.props.children;
    }
}