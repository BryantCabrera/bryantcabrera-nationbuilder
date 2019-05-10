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
                        {this.props.tableData.data.map((data, index) => <td key={index}>{data.name}</td>)}
                    </tr>
                    <tr>
                        {this.props.tableData.data.map((data, index) => <td key={index}>{data.slug}</td>)}
                    </tr>
                    <tr>
                        {this.props.tableData.data.map((data, index) => <td key={index}>{data.type}</td>)}
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default UITable;