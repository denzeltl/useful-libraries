import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'react-scroll';

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
                    <Link className="nav-link" activeClass="is-active" to={item.node.slug} spy={true} smooth={true} offset={-20} duration={500}>
                        {item.node.title}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default Nav;
