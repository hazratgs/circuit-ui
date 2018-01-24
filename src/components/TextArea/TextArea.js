import PropTypes from 'prop-types';
import { css } from 'react-emotion';

import { Input } from '../Input';

const baseStyles = ({ theme }) => css`
  label: textarea;
  overflow: auto;
`;

/**
 * TextArea component for forms.
 */
const TextArea = Input.withComponent('textarea');

// TODO: do we need to overwrite the prop types or can we reuse them
//       for the automated documentation?
TextArea.propTypes = {
  /**
   * An ID passed to the <input> element via a data attribute. This
   * is used as an identifier for analytics tracking and e2e testing.
   */
  analyticsId: PropTypes.string
};

/**
 * @component
 */
export default TextArea;
