/* eslint-disable */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './sample-page.scss';
import Controller from './logic.js';

import { Main, PageHeader, PageHeaderTitle } from '@red-hat-insights/insights-frontend-components';
import { DownloadIcon, ExclamationCircleIcon, CircleIcon } from '@patternfly/react-icons';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    DataList,
    DataListItem,
    DataListCell,
    Modal,
    Grid,
    GridItem,
    Tooltip
} from '@patternfly/react-core';

import SampleComponent from '../../PresentationalComponents/SampleComponent/sample-component';
// const PageHeader2 = asyncComponent(() => import('../../PresentationalComponents/PageHeader/page-header'));
// const PageHeaderTitle2 = asyncComponent(() => import('../../PresentationalComponents/PageHeader/page-header-title'));

/**
 * A smart component that handles all the api calls and data needed by the dumb components.
 * Smart components are usually classes.
 *
 * https://reactjs.org/docs/components-and-props.html
 * https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43
 */
class SamplePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isModalOpen: false
        };
        this.controller = new Controller(this);
        window.controller = this.controller;

        this.handleModalToggle = this.handleModalToggle.bind(this);
    }

    handleModalToggle () {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    };
    shouldComponentUpdate (nextProps, nextState) {
        return true;
    }
    componentDidMount() {
        this.controller.init();
    }

    render() {
        const { isModalOpen } = this.state;

        const dataListCellStyle = {
            color: '#aeaeae',
            fontStyle: 'italic'
        };

        var hosts = [];
        for (var i = 0; i < this.controller.hosts.length; i++) {
            var host = this.controller.hosts[i];
            var tasks = this.controller.tasks_by_host[host.host_id];
            console.log(tasks);
            if (tasks === undefined) {
                continue;
            }
            if (tasks.length === 0) {
                continue;
            }
            var last_task = tasks.slice(-1)[0];
            console.log(last_task);
            hosts.push(<DataListItem aria-labelledby="simple-item1">
                        <DataListCell>
                            <h3>
                            {last_task.status == 'ok' ?
                            <Tooltip
                                position="left"
                                content={<p>Successful</p>} >
                            <CircleIcon size="sm" style={{ color: '#52af51', marginRight: '5px' }}/>
                            </Tooltip>
                            :
                            <Tooltip
                                position="left"
                                content={<p>Failed</p>} >
                            <ExclamationCircleIcon size="sm" style={{ color: '#d44946', marginRight: '5px' }} />
                            </Tooltip>
                            }
                            {host.name}</h3>
                        </DataListCell>
                        <DataListCell style={ dataListCellStyle }>
                            <h3>{last_task.name}</h3>
                        </DataListCell>
                    </DataListItem>);
        }

        return (
            <React.Fragment>
                <PageHeader>
                    <PageHeaderTitle title='Find It, Fix It'/>
                </PageHeader>
                <Main>
                    <div className="runDetails" style={{ display: 'flex' }}>
                        <Card className="pf-u-mr-md">
                            <CardHeader>Details</CardHeader>
                            <CardBody>
                                <Grid gutter="md">
                                    <GridItem span={2}><b>Title</b></GridItem>
                                    <GridItem span={10}>{this.controller.playbook.name}</GridItem>
                                    <GridItem span={2}><b>Plan</b></GridItem>
                                    <GridItem span={10}><ul><li><a href="">Plan Title 1</a></li>
                                                            <li><a href="">Plan Title 2</a></li></ul></GridItem>
                                    <GridItem span={2}><b>Playbook</b></GridItem>
                                    <GridItem span={10}>
                                    <span style={{ color: '#007bba', cursor: 'pointer' }} onClick={this.handleModalToggle}>View playbook</span>
                                    </GridItem>
                                </Grid>
                            </CardBody>
                        </Card>
                        <Card className="taskCard" style={{ maxHeight: '500px' }}>
                            <CardHeader>Tasks</CardHeader>
                                <CardBody style={{ maxHeight: '100%', overflowY: 'auto'}}>
                                    <DataList aria-label="Simple data list example">
                                        <DataListItem aria-labelledby="simple-item1" style={{ marginBottom: '8px' }}>
                                            <DataListCell>
                                                <h3><b>Host</b></h3>
                                            </DataListCell>
                                            <DataListCell>
                                                <h3><b>Activity</b></h3>
                                            </DataListCell>
                                        </DataListItem>
                                        {hosts}
                                    </DataList>
                                </CardBody>
                            </Card>
                        </div>
                    <Card className="logCard">
                        <CardHeader style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h1>Log</h1>
                            <Tooltip
                                position="left"
                                content={<p>Download Log</p>} >
                                <Button className="downloadIcon" variant="tertiary" aria-label="Action">
                                    <DownloadIcon size="sm"/>
                                </Button>
                            </Tooltip>
                        </CardHeader>
                        <CardBody style={{ overflowY: 'auto', paddingTop: '20px'}}>
                        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <pre style={{fontFamily: 'monospace',
                                     backgroundColor: '#e8e8e8',
                                     padding: '10px',
                                     whiteSpace: 'pre-line',
                                     textAlign: 'right',
                                     border: '1px solid #b7b7b7',
                                     borderRight: '0px'}}>{[...Array(this.controller.log.map(function (d) {return d.value;}).join('\n').split('\n').length+1).keys()].slice(1).join('\n')}</pre>
                        <pre style={{fontFamily: 'monospace',
                                     backgroundColor: '#f6f6f6',
                                     padding: '10px',
                                     flex: '1',
                                     border: '1px solid #b7b7b7',
                                     marginTop: '0px',
                                     whiteSpace: 'pre'}}>{this.controller.log.map(function (d) {return d.value;}).join('\n')}</pre>
                               </div>
                        </CardBody>
                    </Card>
                    <Modal
                        title={<div style={{borderBottom: '1px solid #aeaeae', paddingBottom: '20px', marginBottom: '20px'}}>{this.controller.playbook.name}</div>}
                        isOpen={isModalOpen}
                        onClose={this.handleModalToggle}
                        actions={[
                            <Button key="cancel" variant="secondary" onClick={this.handleModalToggle}>Close</Button>
                        ]}>
                        <Card className="playBookCard">

                        <CardBody>
                        <div style={{display: 'flex', justifyContent: 'flex-start' }}>
                        <pre style={{fontFamily: 'monospace',
                                     backgroundColor: '#e8e8e8',
                                     padding: '10px',
                                     border: '1px solid #b7b7b7',
                                     whiteSpace: 'pre-line',
                                     textAlign: 'right',
                                     borderRight: '0px'}}>{[...Array(this.controller.playbook.contents.split('\n').length+1).keys()].slice(1).join('\n')}</pre>
                        <pre style={{fontFamily: 'monospace',
                                     backgroundColor: '#f6f6f6',
                                     padding: '10px',
                                     flex: '1',
                                     border: '1px solid #b7b7b7',
                                     marginTop: '0px',
                                     whiteSpace: 'pre'}}>{this.controller.playbook.contents}</pre>
                               </div>
                        </CardBody>
                        </Card>
                    </Modal>
                </Main>
            </React.Fragment>
        );
    }
}

export default withRouter(SamplePage);
