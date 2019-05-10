import React, { Component } from 'react';
import { Switch, Route, NavLink, withRouter } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Select from 'react-select';
import UITable from '../../UI/Table/Table';
import './People.css';

class People extends Component {
    state = {
        name: {
            value: '',
            isValid: false
        },
        slug: {
            value: '',
            isValid: false
        },
        fieldType: {
            value: '',
            isValid: false
        },
        selectedOption: null,
        customFields: []
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: {
                value: e.target.value,
                isValid: true
            }
        });
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });

        this.setState({
            fieldType: {
                value: selectedOption.value,
                isValid: true
            }
        });

        console.log(`Option selected:`, selectedOption);
    }

    handleSubmit = () => {
        const newData = {
            name: this.state.name.value,
            slug: this.state.slug.value,
            fieldType: this.state.fieldType.value
        }

        this.setState({
            customFields: [...this.state.customFields, newData]
        });

        this.reset()
    }

    reset = () => {
        this.setState(prevState => {
            return {
                ...prevState,
                name: {
                    value: '',
                    isValid: false
                },
                slug: {
                    value: '',
                    isValid: false
                },
                fieldType: {
                    value: '',
                    isValid: false
                },
                selectedOption: null
            }
        });
    }

    render() {
        const options = [
            { value: 'text', label: 'Text' },
            { value: 'checkbox', label: 'Checkbox' },
            { value: 'multipleChoice', label: 'Multiple choice' }
        ];

        const { selectedOption } = this.state;

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
                width: '20.9rem'
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

        const tableData = {
            headers: [
                'Name',
                'Slug', 
                'Type'
            ],
            data: this.state.customFields
        }

        return (
            <div className="people">
                <h2 className="people__title">Sharing custom field settings</h2>

                <h3 className="people__description">You are sharing custom field settings. All custom fields you create will automatically become available to your networked nations.</h3>

                <Form className="people__form">
                    <FormGroup>
                        <Label for="name" className="people__form__label">Name*</Label>
                        <Input
                            type="text"
                            value={this.state.name.value}
                            name="name"
                            id="name"
                            className="people__form__input"
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="slug" className="people__form__label">Slug*</Label>
                        <div className="people__form__input--slug">
                            <Input
                                type="text"
                                value={this.state.slug.value}
                                name="slug"
                                id="slug"
                                className="people__form__input"
                                onChange={this.handleInputChange}
                            />
                            <h4 className="people__form__input--slug__warning">Choose carefully, for data integrity reasons, this cannot be changed later.</h4>
                        </div>
                    </FormGroup>
                    {/* <FormGroup className="people__form__selectGroup">
                        <Label for="fieldType" className="people__form__label">Field type*</Label>
                        <Input
                            type="select"
                            name="fieldType"
                            id="fieldType"
                            className="people__form__input--select"
                        >
                            <option disabled selected hidden className="people__form__input--select__option">Select option</option>
                            <option className="people__form__input--select__option">Text</option>
                            <option className="people__form__input--select__option">Checkbox</option>
                            <option className="people__form__input--select__option">Multiple choice</option>
                        </Input>
                    </FormGroup> */}
                    <Label for="fieldType" className="people__form__label">Field type*</Label>
                    <Select
                        placeholder="Select option"
                        value={selectedOption}
                        label='Field type*'
                        onChange={this.handleChange}
                        options={options}
                        styles={customStyles}
                        classNamePrefix="people__select"
                        id="fieldType"
                    />
                   
                    <Button
                        className="people__form__button"
                        color="info"
                        onClick={this.handleSubmit}
                        disabled={!this.state.name.isValid || !this.state.slug.isValid || !this.state.fieldType.isValid}
                    >Create field</Button>
                </Form>

                <UITable tableData={tableData} />
            </div>
        )
    }
}

export default People;