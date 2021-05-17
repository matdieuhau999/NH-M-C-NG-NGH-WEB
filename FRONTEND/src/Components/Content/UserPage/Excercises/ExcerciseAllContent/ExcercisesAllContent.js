import React from "react";
import "./ExcercisesAllContent.css";

import ExcercisesAllList from "./ExcercisesAllList";

export default class ExcercisesAllContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-Excercises_all">
        <div className="user-Excercises_all__control">
          <div className="user-Excercises_all__control___title">
            <p>Bộ đề - Bài tập trắc nghiệm</p>
          </div>
          <div className="user-Excercises_all__control___button">
            <button
              onClick={() =>
                this.props.updateRenderExcerciseControl("createExcercisenew")
              }
            >
              Tạo Bộ đề - Bài tập mới
            </button>
          </div>
        </div>
        <ExcercisesAllList
          MemberID={this.props.MemberID}
          socket={this.props.socket}
          updateRenderExcerciseControl={this.props.updateRenderExcerciseControl}
        />
      </div>
    );
  }
}