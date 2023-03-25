import { RawNodeDatum } from "react-d3-tree/lib/types/types/common";

function convertToRawNodeDatum(json: Record<string, string | number | boolean>): RawNodeDatum[] {
    if (json === null || typeof json !== 'object') {
      throw new Error('Input must be a non-null object');
    }
  
    const rawNodeData: RawNodeDatum[] = [];
  
    for (const key in json) {
      const value = json[key];
      const rawNodeDatum: RawNodeDatum = { name: key };
  
      if (Array.isArray(value)) {
        rawNodeDatum.children = value.map(convertToRawNodeDatum).flat();
      } else if (typeof value === 'object') {
        rawNodeDatum.children = convertToRawNodeDatum(value);
      } else {
        rawNodeDatum.attributes = { value: value };
      }
  
      rawNodeData.push(rawNodeDatum);
    }
  
    return rawNodeData;
  }

  export default convertToRawNodeDatum