/* eslint-disable */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './sample-page.scss';

import { Main, PageHeader, PageHeaderTitle } from '@red-hat-insights/insights-frontend-components';
import { DownloadIcon } from '@patternfly/react-icons';
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

        this.handleModalToggle = this.handleModalToggle.bind(this);
    }

    handleModalToggle () {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    };

    render() {
        const { isModalOpen } = this.state;

        const dataListCellStyle = {
            color: '#aeaeae',
            fontStyle: 'italic'
        };

        return (
            <React.Fragment>
                <PageHeader>
                    <PageHeaderTitle title='Find It Fix It'/>
                </PageHeader>
                <Main>
                    <div className="runDetails" style={{ display: 'flex' }}>
                        <Card className="pf-u-mr-md">
                            <CardHeader>Details</CardHeader>
                            <CardBody>
                                <Grid gutter="md">
                                    <GridItem span={2}><b>Title</b></GridItem>
                                    <GridItem span={10}>Place title here</GridItem>
                                    <GridItem span={2}><b>Plan</b></GridItem>
                                    <GridItem span={10}><ul><li><a href="">Plan Title 1</a></li>
                                                            <li><a href="">Plan Title 2</a></li></ul></GridItem>
                                    <GridItem span={2}><b>Playbook</b></GridItem>
                                    <GridItem span={10}><a href="">Place playbook link here</a></GridItem>
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
                                        <DataListItem aria-labelledby="simple-item1">
                                            <DataListCell>
                                                <h3>Host Name 5</h3>
                                            </DataListCell>
                                            <DataListCell style={ dataListCellStyle }>
                                                <h3>Gathering Facts</h3>
                                            </DataListCell>
                                        </DataListItem>
                                        <DataListItem aria-labelledby="simple-item1">
                                            <DataListCell>
                                                <h3>Host Name 4</h3>
                                            </DataListCell>
                                            <DataListCell style={ dataListCellStyle }>
                                                <h3>Gathering Facts</h3>
                                            </DataListCell>
                                        </DataListItem>
                                        <DataListItem aria-labelledby="simple-item1">
                                            <DataListCell>
                                                <h3>Host Name 3</h3>
                                            </DataListCell>
                                            <DataListCell style={ dataListCellStyle }>
                                                <h3>Gathering Facts</h3>
                                            </DataListCell>
                                        </DataListItem>
                                        <DataListItem aria-labelledby="simple-item1">
                                            <DataListCell>
                                                <h3>Host Name 2</h3>
                                            </DataListCell>
                                            <DataListCell style={ dataListCellStyle }>
                                                <h3>Gathering Facts</h3>
                                            </DataListCell>
                                        </DataListItem>
                                        <DataListItem aria-labelledby="simple-item1">
                                            <DataListCell>
                                                <h3>Host Name 1</h3>
                                            </DataListCell>
                                            <DataListCell style={ dataListCellStyle }>
                                                <h3>Gathering Facts</h3>
                                            </DataListCell>
                                        </DataListItem>
                                    </DataList>
                                </CardBody>
                            </Card>
                        </div>
                    <Card className="logCard">
                        <CardHeader style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h1>Log</h1>
                            <Tooltip
                                position="left"
                                content={<p>Download Log</p>}
                            >
                                <DownloadIcon size="md"/>
                            </Tooltip>
                        </CardHeader>
                        <CardBody>
                        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <pre style={{fontFamily: 'monospace',
                                    backgroundColor: '#e8e8e8',
                                    padding: '10px',
                                     border: '1px solid #b7b7b7',
                                     borderRight: '0px',
                                     whiteSpace: 'pre'}}>
{` 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
32
34
35
36
37
38
39
40
41
42
`}
                        </pre>
                        <pre style={{fontFamily: 'monospace',
																		 backgroundColor: '#f6f6f6',
																		 padding: '10px',
                                     flex: '1',
                                     border: '1px solid #b7b7b7',
                                     marginTop: '0px',
																	   whiteSpace: 'pre'}}>{`PLAY [Update system to the latest kernel and reboot] ***************************

TASK [Gathering Facts] *********************************************************

ok: [Host1]

ok: [Host2]

ok: [Host3]

ok: [Host4]

TASK [Update kernel] ***********************************************************

ok: [Host1]

ok: [Host4]

ok: [Host2]

ok: [Host3]

TASK [set reboot fact] *********************************************************

skipping: [Host1]

skipping: [Host2]

skipping: [Host3]

skipping: [Host4]

TASK [get latest installed kernel package version] *****************************

changed: [Host1]

changed: [Host3]

changed: [Host2]

changed: [Host4]
                               `}</pre>
                               </div>
                        </CardBody>
                    </Card>
                    <Modal
                        title={'Template Name 1'}
                        isOpen={isModalOpen}
                        onClose={this.handleModalToggle}
                        actions={[
                            <Button key="cancel" variant="secondary" onClick={this.handleModalToggle}>Close</Button>
                        ]}
                    >
                        {/* Table */}
                        <Card>
                            <h1>hi</h1>
                        </Card>
                    </Modal>
                </Main>
            </React.Fragment>
        );
    }
}

export default withRouter(SamplePage);
