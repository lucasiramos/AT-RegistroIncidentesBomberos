import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'RegistroIncidentesBomberosWebPartStrings';
import RegistroIncidentesBomberos from './components/RegistroIncidentesBomberos';
import { IRegistroIncidentesBomberosProps } from './components/IRegistroIncidentesBomberosProps';

export interface IRegistroIncidentesBomberosWebPartProps {
  description: string;
}

export default class RegistroIncidentesBomberosWebPart extends BaseClientSideWebPart<IRegistroIncidentesBomberosWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IRegistroIncidentesBomberosProps> = React.createElement(
      RegistroIncidentesBomberos,
      {
        Context: this.context,
      }
    );

    ReactDom.render(element, this.domElement);
  }
  
  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
