import React from 'react';
import throttle from 'lodash/throttle';

class WidthListener extends React.PureComponent {
  width = 0;

  constructor(props) {
    super(props);
    this.onWidthChangeThrottled = throttle(this.onWidthChange, 200);
  }

  componentDidMount() {
    this.onWidthChangeThrottled();
    window.addEventListener('resize', this.onWidthChangeThrottled);
    window.addEventListener('orientationchange', this.onWidthChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWidthChangeThrottled);
    window.removeEventListener('orientationchange', this.onWidthChange);
  }

  onWidthChange = () => {
    if (this.width === window.innerWidth) {
      return;
    }
    this.width = window.innerWidth;
    const { onWidthChange } = this.props;
    onWidthChange(window.innerWidth);
  };

  render() {
    return null;
  }
}

export default WidthListener;