/* tslint:disable */

declare var Object: any;
export interface RetinopathyInterface {
  "id"?: number;
}

export class Retinopathy implements RetinopathyInterface {
  "id": number;
  constructor(data?: RetinopathyInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Retinopathy`.
   */
  public static getModelName() {
    return "Retinopathy";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Retinopathy for dynamic purposes.
  **/
  public static factory(data: RetinopathyInterface): Retinopathy{
    return new Retinopathy(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Retinopathy',
      plural: 'Retinopathies',
      path: 'Retinopathies',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
