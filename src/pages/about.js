import React from "react";
import { graphql } from "gatsby";
import { connect } from "react-redux";
import { EditableText, EditableParagraph } from "react-easy-editables";

import {
  updatePage,
  loadPageData,
} from "../redux/actions";

import Layout from "../layouts/default.js";
import Accordion from "../components/common/Accordion";

import "p2pu-search-cards/dist/build.css"
import "p2pu-theme/src/scss/accordion.scss"

const mapDispatchToProps = dispatch => {
  return {
    onUpdatePageData: (page, id, data) => {
      dispatch(updatePage(page, id, data));
    },
    onLoadPageData: data => {
      dispatch(loadPageData(data));
    },
  };
};

const mapStateToProps = state => {
  return {
    pageData: state.page.data,
    isEditing: state.adminTools.isEditingPage,
  };
};

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    const initialPageData = {
      ...this.props.data.pages,
      content: JSON.parse(this.props.data.pages.content)
    };

    this.props.onLoadPageData(initialPageData);
  }

  onSave = id => content => {
    this.props.onUpdatePageData("about", id, content);
  };

  handleSelectResult = (props) => {
    console.log(props)
  }

  render() {
    const content = this.props.pageData ? this.props.pageData.content : {};
    const faqs = content["faqs"] || [];

    return (
      <Layout>
        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <header className="text-center my-5 pt-5">
                  <h1>
                    <EditableText content={content["about-header"]} handleSave={this.onSave("about-header")} />
                  </h1>
                </header>
              </div>
            </div>

            <div className="row">
              <div className="col-12 my-5">
                <EditableParagraph content={content["about-description"]} handleSave={this.onSave("about-description")} />
              </div>
            </div>
          </div>
        </section>

        <section id="faqs" className="mb-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="text-center mb-4">
                  <EditableText content={content["faq-header"]} handleSave={this.onSave("faq-header")} />
                </h2>
                <Accordion items={faqs} onSave={this.onSave("faqs")} isEditing={this.props.isEditing} />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

export const query = graphql`
  query {
    pages(id: { eq: "about" }) {
      id
      content
      title
      slug
    }
  }
`;


