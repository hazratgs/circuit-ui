import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'react-emotion';

import IconInputWrapper from '../IconInputWrapper';
import Input from '../Input';
import SvgButton from '../SvgButton';
import State from '../State/State';
import RevealIcon from './eye.svg';
import HideIcon from './eye-off.svg';

/**
 * PasswordInput component for forms.
 */
const PasswordInput = ({ disabled, ...props }) => (
  <State
    initial={false}
    name="visible"
    updaterName="onToggle"
    updater={visible => !visible}
  >
    {({ visible, onToggle }) => (
      <IconInputWrapper
        {...{ disabled }}
        iconPosition="right"
        icon={({ className, disabledClassName }) => (
          <SvgButton
            onClick={onToggle}
            className={cx(className, { [disabledClassName]: disabled })}
          >
            {visible ? <HideIcon /> : <RevealIcon />}
          </SvgButton>
        )}
        input={({ className }) => (
          <Input
            {...{ ...props, disabled, className }}
            type={visible ? 'text' : 'password'}
          />
        )}
      />
    )}
  </State>
);

PasswordInput.propTypes = {
  /**
   * Placeholder string for this input.
   */
  placeholder: PropTypes.string,
  /**
   * Should the input be rendered as disabled?
   */
  disabled: PropTypes.bool
};

PasswordInput.defaultProps = {
  placeholder: 'Password',
  disabled: false
};

/**
 * @component
 */
export default PasswordInput;
