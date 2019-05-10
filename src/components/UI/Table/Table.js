import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Select from 'react-select';
import './Table.css';

class UITable extends Component {
    handleChange = (index) => {
        this.props.handleDelete(index)
    }

    render() {
        const options = [
            { value: 'delete', label: 'Delete' }
        ];

        const customStyles = {
            option: (provided, { data, isDisabled, isFocused, isSelected }) => ({
                border: null,
                color: isDisabled
                    ? '#ccc'
                    : isSelected
                        ? '#FFFFFF'
                        : isFocused
                            ? '#FFFFFF'
                            : '#000000',
                backgroundColor: isDisabled
                    ? null
                    : isSelected
                        ? '#1498BE'
                        : isFocused
                            ? '#1498BE'
                            : '#FFFFFF',
                padding: 10,
                width: '20.9rem',
                cursor: 'pointer'
            }),
            valueContainer: () => ({
                display: 'none'
            }),
            control: () => ({
                width: '1.5rem'
            }),
            menu: () => ({
                width: '20.9rem'
            }),
            input: styles => ({
                ...styles,
                width: '17rem',
                border: null
            }),
            placeholder: styles => ({
                ...styles,
                color: '#999999'
            }),
            singleValue: (provided, state) => {
                const opacity = state.isDisabled ? 0.5 : 1;
                const transition = 'opacity 300ms';

                return { ...provided, opacity, transition };
            }
        }

        return (
            <Table className="table">
                <thead className="table__header">
                    <tr>
                        <th></th>
                        {this.props.tableData.headers.map((header, index) => <th key={index}>{header}</th>)}
                        <th></th>
                    </tr>
                </thead>
                <tbody className="table__body">
                    {this.props.tableData.data.map((data, index) => (
                        <tr className="table__body__row" key={index}>
                            <td className="table__body__row__edit" onClick={() => this.props.handleEdit(index, data)}>Edit</td>
                            <td className="table__body__row__name">{data.name}</td>
                            <td className="table__body__row__slug">{data.slug}</td>
                            <td lassName="table__body__row__field-type">{data.fieldType}</td>
                            <td className="table__body__row__dropdown">
                                <Select
                                    placeholder="Select option"
                                    value='delete'
                                    label='Field type*'
                                    onChange={() => this.handleChange(index)}
                                    options={options}
                                    styles={customStyles}
                                    classNamePrefix="table__body"
                                    id="fieldType"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )
    }
}

export default UITable;