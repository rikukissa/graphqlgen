import { INeighbourhood } from "../generated/resolvers";
import { Types } from "./typemap";
import { PictureParent } from "./Picture";
import { CityParent } from "./City";

export interface NeighbourhoodParent {
  id: string;
  name: string;
  slug: string;
  homePreview?: PictureParent;
  city: CityParent;
  featured: boolean;
  popularity: number;
}

export const Neighbourhood: INeighbourhood.Resolver<Types> = {
  id: parent => parent.id,
  name: parent => parent.name,
  slug: parent => parent.slug,
  homePreview: parent => parent.homePreview,
  city: parent => parent.city,
  featured: parent => parent.featured,
  popularity: parent => parent.popularity
};
