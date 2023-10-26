import React from "react";
import ContentLeft from './ContentLeft';
import ContentMain from "./ContentMain";
import ContentRight from "./ContentRight";
const Content = () => {
    return (
        <section>
            <ContentLeft />
            <ContentMain />
            <ContentRight />
        </section>
    )
}

export default Content;