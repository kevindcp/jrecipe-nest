import { IsNumberString } from 'class-validator';
 
export default class IdValidator {
  @IsNumberString()
  id: string;
}