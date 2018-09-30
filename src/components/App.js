import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import ItemList from './ItemList';
import ItemModal from './ItemModal';
import MoreButton from './MoreButton';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pageNo: 1, 
      noteCount: 10,
      notes: [],
      noteModalOpened: false,
      currentNoteContents: null
    }

    this.httpRequest = new XMLHttpRequest();
    this.update();
  }

  openNoteModal(noteContents) {
    this.setState({
      currentNoteContents: noteContents,
      noteModalOpened: true
    });
  }

  closeNoteModal() {
    this.setState({
      currentNoteContents: null,
      noteModalOpened: false
    });
  }

  handleNoteClick(notes) {
    this.openNoteModal(notes.contents);
  }

  handleBodyClick(event) {
    this.closeNoteModal();
  }

  render() {
    const { notes, currentNoteContents, noteModalOpened } = this.state;
    const onItemClickCallback = this.handleNoteClick.bind(this);
    const onBodyClickCallback = this.handleBodyClick.bind(this);
    
    return (
      <div onClick = {onBodyClickCallback}>
        <Header/>
        <ItemList data = {notes} onItemClick = {onItemClickCallback} />
        <ItemModal contents = {currentNoteContents} opened = {noteModalOpened} />
        <MoreButton/>
      </div>
    );
  }

  update(pageParam) {

    if (typeof pageParam === "undefined") {
      pageParam = 1;
    }

    const params = {
      page: pageParam,
      count: 10
    };

    if (!this.httpRequest) {
      alert("XMLHTTP 인스턴스를 만들 수가 없어요 ㅠㅠ");
      return false;
    }
    
    this.httpRequest.onreadystatechange = this.updateView.bind(this);
    this.httpRequest.open(
      "POST",
      "https://us-central1-pink-note.cloudfunctions.net/getNotes"
    );
    this.httpRequest.setRequestHeader("Content-Type", "application/json");
    this.httpRequest.send(JSON.stringify(params));
  }

  updateView() {
    let obj;
    if (this.httpRequest.readyState === XMLHttpRequest.DONE) {
      if (this.httpRequest.status === 200) {
        obj = JSON.parse(this.httpRequest.responseText);
        
      } else {
        alert("request에 뭔가 문제가 있어요.");

        obj = {
          pageNo: 1,
          count: 10,
          notes: [
            {
              id: 1000,
              title: "Note #1000",
              contents: "<div>Hello World 1000</div>",
              date: 1535882011319
            },
            {
              id: 999,
              title: "Note #999",
              contents: "<div>Hello World 999</div>",
              date: 1535882011319
            }
          ]
        };
      }

      this.setState(obj);
    }
  }

}

export default App;
