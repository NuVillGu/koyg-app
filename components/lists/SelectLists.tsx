'use client'

import React from 'react';
import Select from 'react-select';


export const SelectLists = () => {
    
    const styles = {
        control: (provided) => ({
          ...provided,
          border: 'none',
          boxShadow: 'none',
        }),
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isSelected ? '#a78bfa' : state.isFocused ? '#f0f0f0' : 'white',
          color: state.isSelected ? 'white' : 'black',
          padding: 5,
          ':active': {
            backgroundColor: '#ede9fe'
          }
        }),
        menu: (provided) => ({
          ...provided,
          borderRadius: '0px',
          marginTop: '1px',
        }),
        menuList: (provided) => ({
          ...provided,
          padding: 0,
        }),
    };

    const options = [
        { value: '5', label: '5' },
        { value: '10', label: '10' },
        { value: '20', label: '20' },
        { value: 'All', label: 'All' },
    ];

    return (
        <Select options={options} styles={styles} placeholder="Select an option"/>
    );
}