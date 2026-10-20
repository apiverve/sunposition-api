declare module '@apiverve/sunposition' {
  export interface sunpositionOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface sunpositionResponse {
    status: string;
    error: string | null;
    data: SunPositionData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface SunPositionData {
      date:           null | string;
      time:           null | string;
      timezone:       null | string;
      timestampUTC:   Date | null;
      coordinates:    Coordinates;
      sun:            Sun;
      equationOfTime: number | null;
      airMass:        number | null;
      clearSky:       ClearSky;
      shadowRatio:    number | null;
      panelAim:       PanelAim;
  }
  
  interface ClearSky {
      directNormal:     number | null;
      globalHorizontal: number | null;
  }
  
  interface Coordinates {
      latitude:  number | null;
      longitude: number | null;
  }
  
  interface PanelAim {
      tilt:    number | null;
      azimuth: number | null;
  }
  
  interface Sun {
      altitude:        number | null;
      azimuth:         number | null;
      altitudeDegrees: number | null;
      azimuthDegrees:  number | null;
      compassBearing:  number | null;
      isDaylight:      boolean | null;
      declination:     number | null;
      rightAscension:  number | null;
      hourAngle:       number | null;
      distance:        number | null;
  }

  export default class sunpositionWrapper {
    constructor(options: sunpositionOptions);

    execute(callback: (error: any, data: sunpositionResponse | null) => void): Promise<sunpositionResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: sunpositionResponse | null) => void): Promise<sunpositionResponse>;
    execute(query?: Record<string, any>): Promise<sunpositionResponse>;
  }
}
