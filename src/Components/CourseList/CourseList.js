import React, { Component, Fragment } from "react";
import "./CourseList.sass";

class CourseList extends Component {
	state = {
		isEdit: false,
	};

	renderCourse = () => {
		return (
			<li>
				<span className="span_name">{this.props.details.name}</span>
				<button className = "button_toggle"
					onClick={() => {
						this.toggle();
					}}
				>
					EditCourse
				</button>
				<button className="button_delete"
					onClick={() => {
						this.props.deleteCourse(this.props.index);
					}}
				>
					Delate
				</button>
			</li>
		);
	};

	// function toggle state
	toggle = () => {
		let { isEdit } = this.state;
		this.setState({
			isEdit: !isEdit,
		});
	};

	updateCourseItem = (e) => {
		e.preventDefault();
		this.props.editCourse(this.props.index, this.input.value);
		this.toggle();
	};

	// function updateForm
	updateForm = () => {
		return (
			<form onSubmit={this.updateCourseItem}>
				<input className="input_text" type="text" ref={(v) => this.input = v} defaultValue={this.props.details.name} />
				<button className="button_update">update</button>
			</form>
		);
	};

	render() {
		let { isEdit } = this.state;
		return (
			<Fragment>{isEdit ? this.updateForm() : this.renderCourse()}</Fragment>
		);
	}
}

export default CourseList;
