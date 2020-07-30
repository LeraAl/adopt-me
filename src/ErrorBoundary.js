import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

export class ErrorBoundary extends Component {
    state = { hasError: false, redirect: false };
    timeoutId = null;

    componentDidCatch(error) {
        this.setState({ hasError: true });
        console.error("ErrorBoundary caught an error", error);
    }

    componentDidUpdate() {
        if (this.state.hasError) {
            this.timeoutId = setTimeout(() => {
                this.setState({ redirect: true });
            }, 5000);
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutId);
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" noThrow />;
        }
        if (this.state.hasError) {
            return (
                <h2>
                    Error! <Link to="/">Go home</Link> or wait for 5 seconds!
                </h2>
            );
        }

        return this.props.children;
    }
}
