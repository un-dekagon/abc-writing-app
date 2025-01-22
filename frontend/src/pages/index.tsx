import React from 'react';

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Welcome to My Fullstack App</h1>
            <p>This is the home page of the application.</p>
        </div>
    );
};

const AboutPage: React.FC = () => {
    return (
        <div>
            <h1>About</h1>
            <p>This application is built with TypeScript, React, and Node.js.</p>
        </div>
    );
};

const IndexPage: React.FC = () => {
    return (
        <div>
            <HomePage />
            <AboutPage />
        </div>
    );
};

export default IndexPage;