import { fetchProperties, fetchPropertyDetails, getAvailablePropertyTypes } from "./api";

export const searchApiFetch = async ( address: string, propertyType?: string | undefined ) =>
{
        console.log("input searchApi", address );

    let res;

  return res = await fetchProperties( { address, propertyType } );
    
}

export const searchApiDetails = async ( propertyId: string ) =>
{
        console.log("input searchApi", propertyId );

    let res;

  return res = await fetchPropertyDetails(propertyId);
    
}

export const getPropertyTypes = async () =>
{

    let res = await getAvailablePropertyTypes();
    return res;
    
}