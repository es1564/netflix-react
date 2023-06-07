import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SideFilterYear from './SideFilterYear';

const SideBar = ({setSelectedSortOption, handleFilterYear}) => {
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                Sort
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark">
                    <Dropdown.Item active onClick={() => setSelectedSortOption('')}>
                        None
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setSelectedSortOption('popularity_desc')}>
                        Popularity(Desc)
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setSelectedSortOption('popularity_asc')}>
                        Popularity(Asc)
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setSelectedSortOption('release_date_desc')}>
                        Release Day(Desc)
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setSelectedSortOption('release_date_asc')}>
                        Release Day(Asc)
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setSelectedSortOption('vote_count_desc')}>
                        Vote(Desc)
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setSelectedSortOption('vote_count_asc')}>
                        Vote(Asc)
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setSelectedSortOption('title_desc')}>
                        Title(Desc)
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setSelectedSortOption('title_asc')}>
                        Title(Asc)
                    </Dropdown.Item>
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
                <Dropdown.Divider />
                <Dropdown.Item><SideFilterYear handleFilterYear={handleFilterYear} /></Dropdown.Item>
                <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            {/* <SideFilterYear handleFilterYear={handleFilterYear} /> */}
        </div>
    )
}

export default SideBar