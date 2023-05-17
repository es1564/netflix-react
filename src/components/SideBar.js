import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const SideBar = () => {
  return (
    <div>
        <Dropdown>
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
            Sort
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
            <Dropdown.Item href="#/action-1" active>
                None
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Popularity(Desc)</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Popularity(Asc)</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Release Day(Desc)</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Release Day(Asc)</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Vote(Desc)</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Vote(Asc)</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Revenue(Desc)</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Revenue(Asc)</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
            Filter
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
            <Dropdown.Item href="#/action-1" active>
                Action
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}

export default SideBar