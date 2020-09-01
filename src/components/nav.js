import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Nav = () => {
    const data = useStaticQuery(graphql`
        query {
            allLibrariesJson {
                edges {
                    node {
                        title
                        slug
                    }
                }
            }
        }
    `);
    return (
        <div className="nav">
            <nav>
                {data.allLibrariesJson.edges.map((item) => (
                    <a className="nav-link" href={`/#${item.node.slug}`}>
                        {item.node.title}
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default Nav;
