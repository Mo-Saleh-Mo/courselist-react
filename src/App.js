import React, { Component } from "react";
import "./App.sass";

import CourseList from "./Components/CourseList/CourseList";
import FormList from "./Components/FormList/FormList";

class App extends Component {
	state = {
		courses: [{ name: "Html" }, { name: "css" }, { name: "js" }],
		courent: "",
	};

	// start function updateChange
	updateChange = (e) => {
		this.setState({
			courent: e.target.value,
		});
	};

	// start function
	addCourse = (e) => {
        e.preventDefault();
        let courent = this.state.courent;
        let courses = this.state.courses;
		if (courent !== "") {
			courses.push({ name: courent });
            this.setState({ courses, courent: "" });
        }
	};

	// delete function deleteCourse
	deleteCourse = (index) => {
		let courses = this.state.courses;
		courses.splice(index, 1);
		this.setState({ courses });
	};
	editCourse = (index, value) => {
		let courses = this.state.courses;
		let course = courses[index];
		course['name'] = value;
		this.setState({
			courses
		});
	};
	render() {
        const { courses } = this.state;
		const courseList = courses.map((course, index) => {
			return (
				<CourseList
					details={course}
					key={index}
					index={index}
					deleteCourse={this.deleteCourse}
					editCourse={this.editCourse}
				/>
			);
		});
		return (
			<div className="App">
				<h2>Add Course</h2>
				<FormList
					courent={this.state.courent}
					updateChange={this.updateChange}
					addCourse={this.addCourse}
				/>
				<ul>{courseList}</ul>
			</div>
		);
	}
}

export default App;
