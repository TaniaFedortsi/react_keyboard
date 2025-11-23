import React from 'react';

type State = {
  pressedKey: string | null;
};
export class App extends React.Component<State> {
  state: Readonly<State> = {
    pressedKey: null,
  };

  handler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handler);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handler);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey === null
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${pressedKey}]`}
        </p>
      </div>
    );
  }
}
