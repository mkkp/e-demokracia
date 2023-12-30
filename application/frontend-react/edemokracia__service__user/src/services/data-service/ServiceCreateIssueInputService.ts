//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getClassTypes(#application)
// Path expression: 'data-service/'+#serviceClassName(#self)+'.ts'
// Template name: classService.ts.hbs
// Template file: data-service/classService.ts.hbs

import {
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceCreateIssueInput,
  ServiceCreateIssueInputStored,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
} from '../data-api';
import type { JudoIdentifiable } from '../data-api/common';

/**
 * Class Service for ServiceCreateIssueInput
 */
export interface ServiceCreateIssueInputService {
  getTemplate(): Promise<ServiceCreateIssueInput>;
  getTemplateForCity(): Promise<ServiceCity>;
  getCity(
    target: JudoIdentifiable<ServiceCreateIssueInput>,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<ServiceCityStored>;
  getRangeForCity(
    owner?: JudoIdentifiable<ServiceCreateIssueInput> | ServiceCreateIssueInput,
    queryCustomizer?: ServiceCityQueryCustomizer,
  ): Promise<Array<ServiceCityStored>>;
  setCity(owner: JudoIdentifiable<ServiceCreateIssueInput>, selected: JudoIdentifiable<ServiceCity>): Promise<void>;
  unsetCity(owner: JudoIdentifiable<ServiceCreateIssueInput>): Promise<void>;
  getTemplateForCounty(): Promise<ServiceCounty>;
  getCounty(
    target: JudoIdentifiable<ServiceCreateIssueInput>,
    queryCustomizer?: ServiceCountyQueryCustomizer,
  ): Promise<ServiceCountyStored>;
  getRangeForCounty(
    owner?: JudoIdentifiable<ServiceCreateIssueInput> | ServiceCreateIssueInput,
    queryCustomizer?: ServiceCountyQueryCustomizer,
  ): Promise<Array<ServiceCountyStored>>;
  setCounty(owner: JudoIdentifiable<ServiceCreateIssueInput>, selected: JudoIdentifiable<ServiceCounty>): Promise<void>;
  unsetCounty(owner: JudoIdentifiable<ServiceCreateIssueInput>): Promise<void>;
  getTemplateForDistrict(): Promise<ServiceDistrict>;
  getDistrict(
    target: JudoIdentifiable<ServiceCreateIssueInput>,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<ServiceDistrictStored>;
  getRangeForDistrict(
    owner?: JudoIdentifiable<ServiceCreateIssueInput> | ServiceCreateIssueInput,
    queryCustomizer?: ServiceDistrictQueryCustomizer,
  ): Promise<Array<ServiceDistrictStored>>;
  setDistrict(
    owner: JudoIdentifiable<ServiceCreateIssueInput>,
    selected: JudoIdentifiable<ServiceDistrict>,
  ): Promise<void>;
  unsetDistrict(owner: JudoIdentifiable<ServiceCreateIssueInput>): Promise<void>;
  getTemplateForIssueType(): Promise<ServiceIssueType>;
  getIssueType(
    target: JudoIdentifiable<ServiceCreateIssueInput>,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
  ): Promise<ServiceIssueTypeStored>;
  getRangeForIssueType(
    owner?: JudoIdentifiable<ServiceCreateIssueInput> | ServiceCreateIssueInput,
    queryCustomizer?: ServiceIssueTypeQueryCustomizer,
  ): Promise<Array<ServiceIssueTypeStored>>;
  setIssueType(
    owner: JudoIdentifiable<ServiceCreateIssueInput>,
    selected: JudoIdentifiable<ServiceIssueType>,
  ): Promise<void>;
  unsetIssueType(owner: JudoIdentifiable<ServiceCreateIssueInput>): Promise<void>;
}
