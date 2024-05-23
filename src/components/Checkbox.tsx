import React from 'react';
import checkbox from './../modules/checkbox.module.scss';
import { ICheckedType } from '../types/Props';

const Checkbox: React.FC<ICheckedType> = ({ isChecked, setChecked }) => {
    return (
        <div className={checkbox.checkboxWrapper}>
            <input
                type="checkbox"
                className={checkbox.checkboxElement}
                checked={isChecked}
                onChange={() => setChecked(prev => !prev)}
            />
        </div>
    );
}

export default Checkbox;
