import React from "react";
import { graphql } from "gatsby";
import { connect } from "react-redux";
import { Search, BrowseLearningCircles } from 'p2pu-search-cards';
import { EditableText, EditableParagraph, EditableImageUpload } from "react-easy-editables";
import { uploadImage } from "../firebase/operations";

import {
  updatePage,
  loadPageData,
} from "../redux/actions";

import Layout from "../layouts/default.js";
import HeaderTextCarousel from "../components/common/HeaderTextCarousel";

import "p2pu-search-cards/dist/build.css"

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
    pageData: state.page.data
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
    this.props.onUpdatePageData("home", id, content);
  };

  handleSelectResult = (props) => {
    console.log(props)
  }

  render() {
    const content = this.props.pageData ? this.props.pageData.content : JSON.parse(this.props.data.pages.content);

    return (
      <Layout>
        <section id="landing">
          <div className="container">
            <div className="row">
              <div className="col-12 my-5 pt-5">
                <div id="header-text-carousel">
                  <HeaderTextCarousel />
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-md-6 my-5">
                <div className="bg-pattern circle">
                  <div className="img-fluid mouse-parallax">
                    <EditableImageUpload content={content["intro-image"]} handleSave={this.onSave("intro-image")} uploadImage={uploadImage} />
                  </div>
                </div>
              </div>

              <div className="col-md-6 my-5" data-aos="fade-in">
                <div className="mb-4 subtitle"><EditableText content={content["intro-header"]} handleSave={this.onSave("intro-header")} /></div>
                <EditableParagraph content={content["intro-description"]} handleSave={this.onSave("intro-description")} />
              </div>
            </div>
          </div>
        </section>

        <section id="courses">
          <div className="container">
            <header className="text-center my-5">
              <h2>
                <EditableText content={content["courses-header"]} handleSave={this.onSave("courses-header")} />
              </h2>
            </header>
            <div className="mx-4">
              <Search
                searchSubject={'learningCircles'}
                Browse={BrowseLearningCircles}
                onSelectResult={this.handleSelectResult}
              />
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
    pages(id: { eq: "home" }) {
      id
      content
      title
      slug
    }
  }
`;


