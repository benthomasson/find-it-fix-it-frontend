/* eslint-disable */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './sample-page.scss';

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
                                    <GridItem span={10}>
                                    <span style={{ color: '#007bba', cursor: 'pointer' }} onClick={this.handleModalToggle}>Place playbook link here</span>
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
                                        <DataListItem aria-labelledby="simple-item1">
                                            <DataListCell>
                                                <h3>
                                                <Tooltip
                                                    position="left"
                                                    content={<p>Running</p>} >
                                                <CircleIcon size="sm"  style={{ color: '#aeaeae', marginRight: '5px' }}/>
                                                </Tooltip>
                                                Host Name 5</h3>
                                            </DataListCell>
                                            <DataListCell style={ dataListCellStyle }>
                                                <h3>Gathering Facts</h3>
                                            </DataListCell>
                                        </DataListItem>
                                        <DataListItem aria-labelledby="simple-item1">
                                            <DataListCell>
                                                <h3>
                                                <Tooltip
                                                    position="left"
                                                    content={<p>Failed</p>} >
                                                <ExclamationCircleIcon size="sm" style={{ color: '#d44946', marginRight: '5px' }} />
                                                </Tooltip>
                                                Host Name 4</h3>
                                            </DataListCell>
                                            <DataListCell style={ dataListCellStyle }>
                                                <h3>Gathering Facts</h3>
                                            </DataListCell>
                                        </DataListItem>
                                        <DataListItem aria-labelledby="simple-item1">
                                            <DataListCell>
                                                <h3>
                                                <Tooltip
                                                    position="left"
                                                    content={<p>Successful</p>} >
                                                <CircleIcon size="sm" style={{ color: '#52af51', marginRight: '5px' }}/>
                                                </Tooltip>
                                                Host Name 3</h3>
                                            </DataListCell>
                                            <DataListCell style={ dataListCellStyle }>
                                                <h3>Gathering Facts</h3>
                                            </DataListCell>
                                        </DataListItem>
                                        <DataListItem aria-labelledby="simple-item1">
                                            <DataListCell>
                                                <h3>
                                                <Tooltip
                                                    position="left"
                                                    content={<p>Successful</p>} >
                                                <CircleIcon size="sm" style={{ color: '#52af51', marginRight: '5px' }}/>
                                                </Tooltip>
                                                Host Name 2</h3>
                                            </DataListCell>
                                            <DataListCell style={ dataListCellStyle }>
                                                <h3>Gathering Facts</h3>
                                            </DataListCell>
                                        </DataListItem>
                                        <DataListItem aria-labelledby="simple-item1">
                                            <DataListCell>
                                                <h3>
                                                <Tooltip
                                                    position="left"
                                                    content={<p>Successful</p>} >
                                                <CircleIcon size="sm" style={{ color: '#52af51', marginRight: '5px' }}/>
                                                </Tooltip>
                                                Host Name 1</h3>
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
                                content={<p>Download Log</p>} >
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
                        title={'Playbook Title'}
                        isOpen={isModalOpen}
                        onClose={this.handleModalToggle}
                        actions={[
                            <Button key="cancel" variant="secondary" onClick={this.handleModalToggle}>Close</Button>
                        ]}
                    >
                        <Card>

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
																	   whiteSpace: 'pre'}}>{`

---
# Red Hat Insights has recommended one or more actions for you, a system administrator, to review and if you
# deem appropriate, deploy on your systems running Red Hat software. Based on the analysis, we have automatically
# generated an Ansible Playbook for you. Please review and test the recommended actions and the Playbook as
# they may contain configuration changes, updates, reboots and/or other changes to your systems. Red Hat is not
# responsible for any adverse outcomes related to these recommendations or Playbooks.
#
# Addresses maintenance plan 38668 (bthomass.test)
# https://access.redhat.com/insights/planner/38668
# Generated by Red Hat Insights on Tue, 12 Mar 2019 20:20:26 GMT

# Kernel vulnerable to side-channel attacks in modern microprocessors (CVE-2017-5715/Spectre)
# Identifier: (CVE_2017_5715_cpu_virt|VIRT_CVE_2017_5715_CPU_3_ONLYKERNEL,105,kernel_update)
# Version: 4a790e0e27660f70dab0bf6572968378e5801b48
- name: Update system to the latest kernel and reboot
  hosts: "Host1,Host2,Host3,Host4"
  become: true
  vars:
    # determine if we need to update the 'kernel' package or 'kernel-rt' package
    kernel_pkg: "{{'kernel-rt' if 'rt' in ansible_kernel else 'kernel'}}"

  tasks:
    - name: Update kernel
      yum:
        name: "{{kernel_pkg}}"
        state: latest
      register: yum

    - when: yum is changed
      name: set reboot fact
      set_fact:
        insights_needs_reboot: True

    - when: not yum is changed
      # The latest kernel is already installed so boot from it.  Sort the installed kernels
      # by buildtime and select the one with the most recent build time
      block:
      - name: get latest installed {{kernel_pkg}} package version
        shell: rpm -q {{kernel_pkg}} --queryformat="%{buildtime}\t%{version}-%{release}.%{arch}\n" | sort -nr | head -1 | cut -f2
        register: latest_kernel
        check_mode: no

      - name: get configured default kernel
        command: /sbin/grubby --default-kernel
        register: default_kernel
        check_mode: no

      - when: default_kernel.stdout.split('-', 1)[1] != latest_kernel.stdout
        name: set the default kernel to the latest installed
        command: /sbin/grubby --set-default /boot/vmlinuz-{{latest_kernel.stdout}}
        register: grub_change
        check_mode: no

      - when: grub_change is changed
        name: set reboot fact
        set_fact:
          insights_needs_reboot: True


# Kernel vulnerable to side-channel attacks in modern microprocessors (CVE-2017-5753/Spectre, CVE-2017-5715/Spectre, CVE-2017-5754/Meltdown)
# Identifier: (CVE_2017_5753_4_cpu_kernel|KERNEL_CVE_2017_5753_4_CPU_ERROR_3,105,kernel_update)
# Version: 4a790e0e27660f70dab0bf6572968378e5801b48
- name: Update system to the latest kernel and reboot
  hosts: "Host1,Host2,Host3,Host4"
  become: true
  vars:
    # determine if we need to update the 'kernel' package or 'kernel-rt' package
    kernel_pkg: "{{'kernel-rt' if 'rt' in ansible_kernel else 'kernel'}}"

  tasks:
    - name: Update kernel
      yum:
        name: "{{kernel_pkg}}"
        state: latest
      register: yum

    - when: yum is changed
      name: set reboot fact
      set_fact:
        insights_needs_reboot: True

    - when: not yum is changed
      # The latest kernel is already installed so boot from it.  Sort the installed kernels
      # by buildtime and select the one with the most recent build time
      block:
      - name: get latest installed {{kernel_pkg}} package version
        shell: rpm -q {{kernel_pkg}} --queryformat="%{buildtime}\t%{version}-%{release}.%{arch}\n" | sort -nr | head -1 | cut -f2
        register: latest_kernel
        check_mode: no

      - name: get configured default kernel
        command: /sbin/grubby --default-kernel
        register: default_kernel
        check_mode: no

      - when: default_kernel.stdout.split('-', 1)[1] != latest_kernel.stdout
        name: set the default kernel to the latest installed
        command: /sbin/grubby --set-default /boot/vmlinuz-{{latest_kernel.stdout}}
        register: grub_change
        check_mode: no

      - when: grub_change is changed
        name: set reboot fact
        set_fact:
          insights_needs_reboot: True


# NetworkManager DHCP script vulnerable to remote code execution (CVE-2018-1111)
# Identifier: (CVE_2018_1111_dhcp|ERROR_CVE_2018_1111_DHCP_2,105,fix)
# Version: 1d9d901c3bf89c756299eb53f11f7d1154495734
- name: Fix ERROR_CVE_2018_1111_DHCP_2 by updating dhclient
  hosts: "Host1,Host2,Host3,Host4"
  become: true

  tasks:
    - name: Update dhclient
      yum:
        name: dhclient
        state: latest


# Kernel vulnerable to side-channel attacks in Intel x86 microprocessors using L1 Terminal Fault (CVE-2018-3620)
# Identifier: (CVE_2018_3620_cpu_kernel|CVE_2018_3620_CPU_KERNEL_NEED_UPDATE,105,kernel_update)
# Version: 4a790e0e27660f70dab0bf6572968378e5801b48
- name: Update system to the latest kernel and reboot
  hosts: "Host1,Host2,Host3,Host4"
  become: true
  vars:
    # determine if we need to update the 'kernel' package or 'kernel-rt' package
    kernel_pkg: "{{'kernel-rt' if 'rt' in ansible_kernel else 'kernel'}}"

  tasks:
    - name: Update kernel
      yum:
        name: "{{kernel_pkg}}"
        state: latest
      register: yum

    - when: yum is changed
      name: set reboot fact
      set_fact:
        insights_needs_reboot: True

    - when: not yum is changed
      # The latest kernel is already installed so boot from it.  Sort the installed kernels
      # by buildtime and select the one with the most recent build time
      block:
      - name: get latest installed {{kernel_pkg}} package version
        shell: rpm -q {{kernel_pkg}} --queryformat="%{buildtime}\t%{version}-%{release}.%{arch}\n" | sort -nr | head -1 | cut -f2
        register: latest_kernel
        check_mode: no

      - name: get configured default kernel
        command: /sbin/grubby --default-kernel
        register: default_kernel
        check_mode: no

      - when: default_kernel.stdout.split('-', 1)[1] != latest_kernel.stdout
        name: set the default kernel to the latest installed
        command: /sbin/grubby --set-default /boot/vmlinuz-{{latest_kernel.stdout}}
        register: grub_change
        check_mode: no

      - when: grub_change is changed
        name: set reboot fact
        set_fact:
          insights_needs_reboot: True


# Kernel vulnerable to side-channel attacks in modern microprocessors using Speculative Store Bypass (CVE-2018-3639)
# Identifier: (CVE_2018_3639_cpu_kernel|CVE_2018_3639_CPU_BAD_KERNEL,105,kernel_update)
# Version: 4a790e0e27660f70dab0bf6572968378e5801b48
- name: Update system to the latest kernel and reboot
  hosts: "Host1,Host2,Host3,Host4"
  become: true
  vars:
    # determine if we need to update the 'kernel' package or 'kernel-rt' package
    kernel_pkg: "{{'kernel-rt' if 'rt' in ansible_kernel else 'kernel'}}"

  tasks:
    - name: Update kernel
      yum:
        name: "{{kernel_pkg}}"
        state: latest
      register: yum

    - when: yum is changed
      name: set reboot fact
      set_fact:
        insights_needs_reboot: True

    - when: not yum is changed
      # The latest kernel is already installed so boot from it.  Sort the installed kernels
      # by buildtime and select the one with the most recent build time
      block:
      - name: get latest installed {{kernel_pkg}} package version
        shell: rpm -q {{kernel_pkg}} --queryformat="%{buildtime}\t%{version}-%{release}.%{arch}\n" | sort -nr | head -1 | cut -f2
        register: latest_kernel
        check_mode: no

      - name: get configured default kernel
        command: /sbin/grubby --default-kernel
        register: default_kernel
        check_mode: no

      - when: default_kernel.stdout.split('-', 1)[1] != latest_kernel.stdout
        name: set the default kernel to the latest installed
        command: /sbin/grubby --set-default /boot/vmlinuz-{{latest_kernel.stdout}}
        register: grub_change
        check_mode: no

      - when: grub_change is changed
        name: set reboot fact
        set_fact:
          insights_needs_reboot: True


# Kernel vulnerable to local privilege escalation via exceptions triggered after the POP SS and MOV to SS instructions (CVE-2018-8897, CVE-2018-1087)
# Identifier: (CVE_2018_8897_kernel_popss|KERNEL_CVE_2018_8897_VULNERABLE_2,105,kernel_update)
# Version: 4a790e0e27660f70dab0bf6572968378e5801b48
- name: Update system to the latest kernel and reboot
  hosts: "Host1,Host2,Host3,Host4"
  become: true
  vars:
    # determine if we need to update the 'kernel' package or 'kernel-rt' package
    kernel_pkg: "{{'kernel-rt' if 'rt' in ansible_kernel else 'kernel'}}"

  tasks:
    - name: Update kernel
      yum:
        name: "{{kernel_pkg}}"
        state: latest
      register: yum

    - when: yum is changed
      name: set reboot fact
      set_fact:
        insights_needs_reboot: True

    - when: not yum is changed
      # The latest kernel is already installed so boot from it.  Sort the installed kernels
      # by buildtime and select the one with the most recent build time
      block:
      - name: get latest installed {{kernel_pkg}} package version
        shell: rpm -q {{kernel_pkg}} --queryformat="%{buildtime}\t%{version}-%{release}.%{arch}\n" | sort -nr | head -1 | cut -f2
        register: latest_kernel
        check_mode: no

      - name: get configured default kernel
        command: /sbin/grubby --default-kernel
        register: default_kernel
        check_mode: no

      - when: default_kernel.stdout.split('-', 1)[1] != latest_kernel.stdout
        name: set the default kernel to the latest installed
        command: /sbin/grubby --set-default /boot/vmlinuz-{{latest_kernel.stdout}}
        register: grub_change
        check_mode: no

      - when: grub_change is changed
        name: set reboot fact
        set_fact:
          insights_needs_reboot: True


# Reboots a system if any of the preceeding plays sets the 'insights_needs_reboot' variable to true.
# The variable can be overridden to suppress this behavior.
- name: Reboot system (if applicable)
  hosts: "Host1,Host2,Host3,Host4"
  become: True
  gather_facts: False
  tasks:
    - when:
        - insights_needs_reboot is defined
        - insights_needs_reboot
      block:
        - name: Reboot system
          shell: sleep 2 && shutdown -r now "Ansible triggered reboot"
          async: 1
          poll: 0
          ignore_errors: true

        - name: Wait for system to boot up
          local_action:
            module: wait_for
            host: "{{ hostvars[inventory_hostname]['ansible_host'] | default(hostvars[inventory_hostname]['ansible_ssh_host'], true) | default(inventory_hostname, true) }}"
            port: "{{ hostvars[inventory_hostname]['ansible_port'] | default(hostvars[inventory_hostname]['ansible_ssh_port'], true) | default('22', true) }}"
            delay: 15
            timeout: 300
          become: false

- name: run insights
  hosts: "Host1,Host2,Host3,Host4"
  become: True
  gather_facts: False
  tasks:
    - name: run insights
      command: redhat-access-insights
      changed_when: false


                               `}</pre>
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
