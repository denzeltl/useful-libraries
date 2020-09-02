import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Main = () => {
    const data = useStaticQuery(graphql`
        query {
            allLibrariesJson {
                edges {
                    node {
                        title
                        url
                        npm
                        slug
                        id
                    }
                }
            }
        }
    `);

    return (
        <main className="main">
            <ul className="list">
                {data.allLibrariesJson.edges.map((item) => {
                    return (
                        <li className="item" key={item.node.id} id={`#${item.node.slug}`}>
                            <h2>{item.node.title}</h2>
                            <pre>{item.node.npm}</pre>
                            <a href={item.node.url} target="_blank">
                                Official Site
                            </a>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
};

export default Main;
