/* eslint-disable */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './sample-page.scss';

import { Section, Main, PageHeader, PageHeaderTitle } from '@red-hat-insights/insights-frontend-components';
import { WarningTriangleIcon } from '@patternfly/react-icons';
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardHeader,
    DataList,
    DataListItem,
    DataListCell,
    Dropdown,
    DropdownToggle,
    DropdownItem,
    DropdownSeparator,
    Modal,
    Grid,
    GridItem
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
          isLeftOpen: false,
          isRightOpen: false,
          isModalOpen: false
        };

        this.onLeftToggle = this.onLeftToggle.bind(this);
        this.onRightToggle = this.onRightToggle.bind(this);
        this.onLeftSelect = this.onLeftSelect.bind(this);
        this.onRightSelect = this.onRightSelect.bind(this);
        this.handleModalToggle = this.handleModalToggle.bind(this);
    }

    onLeftToggle (isLeftOpen) {
        this.setState({
          isLeftOpen
        });
    };

    onRightToggle (isRightOpen) {
        this.setState({
          isRightOpen
        });
    };

    onLeftSelect (event) {
        this.setState({
          isLeftOpen: !this.state.isLeftOpen
        });
    };

    onRightSelect (event) {
        this.setState({
          isRightOpen: !this.state.isRightOpen
        });
    };

    handleModalToggle () {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    };

    render() {
        const { isLeftOpen, isRightOpen, isModalOpen } = this.state;

        const dataListCellStyle = {
            display: 'flex',
            justifyContent: 'flex-end'
        };

        const dropdownItems = [
          <DropdownItem key="link">Link</DropdownItem>,
          <DropdownItem key="action" component="button">
            Action
          </DropdownItem>,
          <DropdownItem key="disabled link" isDisabled>
            Disabled Link
          </DropdownItem>,
          <DropdownItem key="disabled action" isDisabled component="button">
            Disabled Action
          </DropdownItem>,
          <DropdownSeparator key="separator" />,
          <DropdownItem key="separated link">Separated Link</DropdownItem>,
          <DropdownItem key="separated action" component="button">
            Separated Action
          </DropdownItem>
        ];

        return (
            <React.Fragment>
                <PageHeader>
                    <PageHeaderTitle title='Find It Fix It'/>
                </PageHeader>
                <Main>
                    <div className="dataCard" style={{ display: 'flex' }}>
											<Card>
												<CardHeader style={{ borderBottom: '2px solid #ebebeb', display: 'flex', justifyContent: 'space-between' }}>Details</CardHeader>
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
											<Card>
												<CardHeader style={{ borderBottom: '2px solid #ebebeb', display: 'flex', justifyContent: 'space-between' }}>Tasks</CardHeader>
												<CardBody>

                        <DataList aria-label="Simple data list example">
                            <DataListItem aria-labelledby="simple-item1">
                                <DataListCell>
                                    <h3>Host</h3>
                                </DataListCell>
                                <DataListCell style={ dataListCellStyle }>
                                    <h3>Activity</h3>
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
										<div className="logCard" style={{ display: 'flex', marginTop: '20px' }} >
                    <Card>
                        <CardHeader style={{ borderBottom: '2px solid #ebebeb', display: 'flex', justifyContent: 'space-between' }}>
                            <h1>Log</h1>
                        </CardHeader>
                        <CardBody>
                        </CardBody>
										</Card>
										</div>
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
