import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MyComponent, IAppProps } from './app.component';

ReactDOM.render(<MyComponent message="Properties don't change!" />, document.getElementById('container'));