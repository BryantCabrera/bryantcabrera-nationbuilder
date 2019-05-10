import React, { Component } from 'react';
import { Switch, Route, NavLink, withRouter } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Select from 'react-select';
import './People.css';

class People extends Component {
    state = {
        selectedOption: null
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });

        console.log(`Option selected:`, selectedOption);
    }

    render() {
        const options = [
            { value: 'test', label: 'Text' },
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

        return (
            <div className="people">
                <h2 className="people__title">Sharing custom field settings</h2>

                <h3 className="people__description">You are sharing custom field settings. All custom fields you create will automatically become available to your networked nations.</h3>

                <Form className="people__form">
                    <FormGroup>
                        <Label for="name" className="people__form__label">Name*</Label>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            className="people__form__input"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="slug" className="people__form__label">Slug*</Label>
                        <div className="people__form__input--slug">
                            <Input
                                type="text"
                                name="slug"
                                id="slug"
                                className="people__form__input"
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
                   
                    <Button className="people__form__button" color="info">Create field</Button>
                </Form>
            </div>
        )
    }
}

export default People;