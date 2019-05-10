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
                    {/* <tr>
                        {this.props.tableData.data.map((data, index) => <td key={index}>{data.name}</td>)}
                    </tr>
                    <tr>
                        {this.props.tableData.data.map((data, index) => <td key={index}>{data.slug}</td>)}
                    </tr>
                    <tr>
                        {this.props.tableData.data.map((data, index) => <td key={index}>{data.type}</td>)}
                    </tr> */}

                    {this.props.tableData.data.map((data, index) => (
                        <tr key={index}>
                            <td>{data.name}</td>
                            <td>{data.slug}</td>
                            <td>{data.fieldType}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )
    }
}

export default UITable;