declare module '@apiverve/sunposition' {
  export interface sunpositionOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface sunpositionResponse {
    status: string;
    error: string | null;
    data: SunPositionData;
    code?: number;
  }


  interface SunPositionData {
      date:        string;
      coordinates: Coordinates;
      sun:         Sun;
  }
  
  interface Coordinates {
      latitude:  number;
      longitude: number;
  }
  
  interface Sun {
      altitude: number;
      azimuth:  number;
  }

  export default class sunpositionWrapper {
    constructor(options: sunpositionOptions);

    execute(callback: (error: any, data: sunpositionResponse | null) => void): Promise<sunpositionResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: sunpositionResponse | null) => void): Promise<sunpositionResponse>;
    execute(query?: Record<string, any>): Promise<sunpositionResponse>;
  }
}
