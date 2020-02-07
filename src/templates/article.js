import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../compontents/layout';

const Article = ({ data }) => {
	const post = data.nodeArticle;

	return (
		<Layout>
			<h1>{post.title}</h1>

			<img 
				src={data.nodeArticle.relationship.field_image.localFile.publicURL}
				alt={data.nodeArticle.relationship.field_image.alt}
			/>

			<div
				dangerouslySetInnerHtml={{_html: post.body.processed}}
			/>
		</Layout>
	);
};

Article.propTypes = {
	data: PropTypes.object.isRequired,
};

export const query = graphql`
	query($ArticleId: String!){
		nodeArticle(id: { eq: $ArticleId }) {
			id
			title
			body {
				processed
			}
			field_image {
				alt
			}
			relationships {
				field_image {
					localFile {
						publicURL
					}
				}
			}
		}
	}
`