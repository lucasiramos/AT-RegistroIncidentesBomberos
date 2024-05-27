import * as React from 'react';
import type { IRegistroIncidentesBomberosProps } from './IRegistroIncidentesBomberosProps';

import { App } from './App/App';

export const ContextSharePoint: any = React.createContext(undefined)

export default class RegistroIncidentesBomberos extends React.Component<IRegistroIncidentesBomberosProps, {}> {
  public constructor(props: IRegistroIncidentesBomberosProps){
    super(props)
  }

  public render(): React.ReactElement<IRegistroIncidentesBomberosProps> {
    return (
      <ContextSharePoint.Provider value={this.props}>
        <App/>
      </ContextSharePoint.Provider>
    );
  }
}
