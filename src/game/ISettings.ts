export default interface ISettings {
  //if generated from scratch
  widthSize: number;
  heightSize: number;
  treasureQuantity?: number; //how to set not more then
  //if loaded from map. then its inside Imap already - or it should be class - are there inicialization of tiles that can be set upon loading map?
  //map: IMap
  // 2dImage = type?
  // ColorMapping
  // <tileColor,IFTile> ? how to create architecture for color -> type of tiles?
}