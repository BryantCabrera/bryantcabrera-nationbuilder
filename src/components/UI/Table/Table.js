import React, { Component } from 'react';
import { Table } from 'reactstrap';
import './Table.css';

class UITable extends Component {
    state = {
    }

    render() {
        

        return (
            <Table className="table">
                <thead>
                    <tr>
                        {this.props.tableData.headers.map((header, index) => <th key={index}>{header}</th> )}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default UITable;