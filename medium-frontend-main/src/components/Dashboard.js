import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {postData} from './helperFunctions/getData';

import Header from "./Header";
import img from './images/home_page_header_img.png';

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./editors.css";

class Dashboard extends Component {
  toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["link", "image", "formula"], // add's image support
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"],
  ];


  constructor(props) {
    super(props);
    this.state = {
      QuillText: "",
      modules: { toolbar: this.toolbarOptions },
      tags:[],
      selectedTags:[],
      title:""
    };
  }

  handleChange = (value) => {
    this.setState({ QuillText: value });
  };

  async componentDidMount(){
    let tags = await fetch("http://localhost:8080/api/tag/getAllTags");
    let tagsResp = await tags.json();
    if (tags.status === 200){
      await this.setState({tags:tagsResp.data});
    }
    console.log(tagsResp.data);
  }

  setTag = async(tagId) => {
    let tempSelectTags = [...this.state.selectedTags];
    if (tempSelectTags.includes(tagId)) {
      tempSelectTags.splice(tempSelectTags.indexOf(tagId),1);

    }else{
      tempSelectTags.push(tagId);
    }
    await this.setState({selectedTags : tempSelectTags});
    console.log(this.state.selectedTags);
  }

  setTitle = async(event) => {
    await this.setState({title : event.target.value});
    console.log(this.state.title);
  }   

  saveBlog = async(event) => {
    event.preventDefault();
    let author = localStorage.getItem('token');
    let tags = this.state.selectedTags;
    let content = this.state.QuillText;
    let title = this.state.title;
    let coverImg = "https://www.ie.edu/exponential-learning/blog/wp-content/uploads/2018/01/MachineLearninginMarketing-1621x1000.jpg";

    let data = JSON.stringify({author,tags,content,title,coverImg});

    let blogResp = await postData('api/blog/createBlog', data);
    let resp = await blogResp.json();
    console.log(resp);
  }

  render() {
    return (
      <>
      <Header color={"#fff"}/>
      <div className="writers_block">
        <div className="editors_section">
            <form onSubmit={this.saveBlog}>
                <input type="text" name="title" className="blogTitle" placeholder="Title" onChange={this.setTitle} value={this.state.title}/>
                <ReactQuill
                value={this.state.QuillText}
                onChange={this.handleChange}
                theme="snow"
                modules={this.state.modules}
                placeholder="Write Something..."
              />
              <button type="submit">Publish</button>
            </form>
            <div>{this.state.QuillText}</div>
        </div>
        <div className="tagsSection">
          {/* {this.state.tags.map((tag) => {
            if(this.state.selectedTags.includes(tag._id)){
              return (<div className="tagsButton greenButton" onClick={() => this.setTag(tag._id)}>{tag.name}</div>)
            }else{
              return (<div className="tagsButton" onClick={() => this.setTag(tag._id)}>{tag.name}</div>)
            }
          })} */}

          {this.state.tags.map((tag) => {
              return (
              <div 
              className={this.state.selectedTags.includes(tag._id) ? "tagsButton greenButton" : "tagsButton"} 
              onClick={() => this.setTag(tag._id)}>{tag.name}</div>)
            
          })}
        </div>
      </div>
      </>
    );
  }
}

export default withRouter(Dashboard);

