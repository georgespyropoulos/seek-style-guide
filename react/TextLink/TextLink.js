import styles from './TextLink.less';

import React, { PropTypes } from 'react';
import ChevronIcon from '../icons/ChevronIcon/ChevronIcon';
import classnames from 'classnames';

const renderChevron = chevron => {
  if (!chevron) {
    return null;
  }

  return (
    <ChevronIcon
      className={styles.chevron}
      direction={chevron}
      svgClassName={styles.chevronSvg}
    />
  );
};

export default function TextLink({ component: Root, className, children, chevron, ...restProps }) {
  const allProps = {
    ...restProps,
    className: classnames(styles.link, className)
  };

  return (
    <Root {...allProps}>
      {children}
      {renderChevron(chevron)}
    </Root>
  );
}

TextLink.displayName = 'TextLink';

TextLink.propTypes = {
  component: PropTypes.any,
  className: PropTypes.string,
  children: PropTypes.node,
  chevron: PropTypes.oneOf(['up', 'down', 'right', 'left'])
};

TextLink.defaultProps = {
  component: 'a'
};
