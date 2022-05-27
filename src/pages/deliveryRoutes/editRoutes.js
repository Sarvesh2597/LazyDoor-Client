import React, { Component } from 'react';
import {
	Row, Col, Card, CardBody, Button, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown
} from 'reactstrap';
import classNames from 'classnames';
import { Briefcase, FolderPlus, HardDrive } from 'react-feather';
import Sortable from 'react-sortablejs';

import PageTitle from '../../components/PageTitle';

import { allTasks } from '../apps/Tasks/Data';


const Task = (task) => {
	return <React.Fragment>
		<Card className="border mb-0">
			<CardBody className="p-3">
				{/* <UncontrolledDropdown className="float-right">
					<DropdownToggle tag="a" className="dropdown-toggle p-0 arrow-none cursor-pointer">
						<i className="uil uil-ellipsis-v font-size-14"></i>
					</DropdownToggle>

					<DropdownMenu>
						<DropdownItem><i className="uil uil-edit-alt mr-2"></i>Edit</DropdownItem>
						<DropdownItem><i className="uil uil-user-plus mr-2"></i>Add People</DropdownItem>
						<DropdownItem className="text-warning"><i className="uil uil-exit mr-2"></i>Leave</DropdownItem>
						<DropdownItem divider />
						<DropdownItem className="text-danger"><i className="uil uil-trash mr-2"></i>Delete</DropdownItem>
					</DropdownMenu>
				</UncontrolledDropdown>
 */}
				<h6 className="mt-0 mb-2 font-size-15">
					<a href="/" className="text-body">{task.title}</a>
				</h6>
				<p>{task.location}</p>
				<span className={classNames('badge', { 'badge-soft-danger': task.priority === 'Ad-hoc', 'badge-soft-warning': task.priority === 'Monday', 'badge-soft-success': task.priority === 'Daily' })}>{task.priority}</span>
				<p>					<small className="float-right text-muted">{task.due_date}</small>
				</p>
				{/* <p className="mb-0 mt-4">
					<img src={task.assignee_avatar} alt="user-img"
						className="avatar-xs rounded-circle mr-2" />

					<span className="text-nowrap align-middle font-size-13 mr-2">
						<i className="uil uil-comments-alt text-muted mr-1"></i>{task.comments.length}</span>

					<span className="text-nowrap align-middle font-size-13">
						<i className="uil uil-check-square mr-1 text-muted"></i>{task.checklists.filter(x => x.completed).length}/{task.checklists.length}</span>
					<small className="float-right text-muted">{task.due_date}</small>
				</p> */}
			</CardBody>
		</Card>
	</React.Fragment>
}

const TaskContainer = ({ tasks }) => {
	tasks = tasks.map((task, idx) => (<Task key={idx} data-id={task.id} {...task}></Task>));

	return (
		<Sortable
			options={{
				group: 'shared',
				animation: 150
			}}
			tag="div"
		>
			{tasks}
		</Sortable>
	);
};


class editRoutes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todoTasks: [...allTasks.filter(x => x.stage === 'Todo')],
			inProgessTasks: [...allTasks.filter(x => x.stage === 'In-progress')],
			reviewTasks: [...allTasks.filter(x => x.stage === 'Review')],
			completedTasks: [...allTasks.filter(x => x.stage === 'Done')]
		};
	}

	render() {
		return <React.Fragment>
			<Row className="page-title">
				<Col md={12}>
					<PageTitle
						title={'Edit Routes'}
					/>
				</Col>
			</Row>


			<Row>
				<Col>
					<div className="tasks border">
						<h5 className="mt-0 task-header header-title">Route 1<UncontrolledDropdown className="float-right">
							<DropdownToggle tag="a" className="dropdown-toggle p-0 arrow-none cursor-pointer">
								<i className="uil uil-ellipsis-v font-size-14"></i>
							</DropdownToggle>

							<DropdownMenu>
								<DropdownItem><i className="uil uil-edit-alt mr-2"></i>Assign To</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown></h5>


						<TaskContainer id="task-list-one" classNames="task-list-items" tasks={this.state.todoTasks}></TaskContainer>
					</div>

					<div className="tasks border">
						<h5 className="mt-0 task-header header-title">Route 2 </h5>
						<TaskContainer id="task-list-two" classNames="task-list-items" tasks={this.state.inProgessTasks}></TaskContainer>
					</div>

					<div className="tasks border">
						<h5 className="mt-0 task-header header-title">Route 3 </h5>
						<TaskContainer id="task-list-three" classNames="task-list-items" tasks={this.state.reviewTasks}></TaskContainer>
					</div>

					<div className="tasks border">
						<h5 className="mt-0 task-header header-title">Route 4 </h5>
						<TaskContainer id="task-list-four" classNames="task-list-items" tasks={this.state.completedTasks}></TaskContainer>
					</div>
				</Col>
			</Row>
		</React.Fragment>
	}
}


export default editRoutes;